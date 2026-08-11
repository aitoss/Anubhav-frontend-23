import { useEffect, useRef, useState } from "react";
import Spinner from "../../../assets/Spinner";
import { getBlogSummaryStatus, requestBlogSummary } from "../../../api/blogs";

const POLL_INTERVAL_MS = 2500;

const ArticleSummaryCard = ({ articleId, articleTitle }) => {
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [generatedAt, setGeneratedAt] = useState(null);
  const [requesting, setRequesting] = useState(false);
  const pollingRef = useRef(null);

  const clearPolling = () => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  };

  const syncFromStatus = (data) => {
    const nextStatus = data?.status || "idle";
    setStatus(nextStatus);
    setErrorMessage(data?.errorMessage || "");
    setGeneratedAt(data?.generatedAt || null);

    if (nextStatus === "ready" && data?.summary) {
      setSummary(data.summary);
      clearPolling();
      return;
    }

    if (nextStatus !== "ready") {
      setSummary("");
    }
  };

  const loadStatus = async () => {
    if (!articleId) return;

    try {
      const data = await getBlogSummaryStatus(articleId);
      syncFromStatus(data);

      if (["pending", "processing"].includes(data?.status)) {
        startPolling();
      }
    } catch (error) {
      setStatus("failed");
      setErrorMessage(error?.response?.data?.message || "Failed to load summary status");
      clearPolling();
    }
  };

  const startPolling = () => {
    if (pollingRef.current) return;

    pollingRef.current = setInterval(async () => {
      try {
        const data = await getBlogSummaryStatus(articleId);
        syncFromStatus(data);

        if (!["pending", "processing"].includes(data?.status)) {
          clearPolling();
        }
      } catch (error) {
        setStatus("failed");
        setErrorMessage(error?.response?.data?.message || "Failed while polling summary status");
        clearPolling();
      }
    }, POLL_INTERVAL_MS);
  };

  const requestSummary = async () => {
    if (!articleId || requesting) return;

    setRequesting(true);
    setErrorMessage("");

    try {
      const response = await requestBlogSummary(articleId);

      if (response?.status === 200 && response?.data?.summary) {
        setSummary(response.data.summary);
        setStatus("ready");
        setGeneratedAt(response.data.generatedAt || null);
        clearPolling();
        return;
      }

      setStatus(response?.data?.status || "pending");
      startPolling();
    } catch (error) {
      setStatus("failed");
      setErrorMessage(error?.response?.data?.message || "Failed to request summary");
    } finally {
      setRequesting(false);
    }
  };

  useEffect(() => {
    clearPolling();
    setSummary("");
    setStatus("idle");
    setErrorMessage("");
    setGeneratedAt(null);

    if (!articleId) return undefined;

    loadStatus();

    return () => {
      clearPolling();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleId]);

  const buttonLabel = () => {
    if (requesting) return "Requesting...";
    if (status === "ready") return "Refresh summary";
    if (status === "failed" || status === "stale") return "Try again";
    if (status === "pending" || status === "processing") return "Generating...";
    return "Generate summary";
  };

  const showBody = status === "ready" && summary;

  const statusTone = () => {
    if (status === "ready") return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (status === "failed") return "bg-rose-50 text-rose-700 border-rose-200";
    if (status === "stale") return "bg-amber-50 text-amber-800 border-amber-200";
    if (status === "pending" || status === "processing") return "bg-sky-50 text-sky-700 border-sky-200";
    return "bg-zinc-100 text-zinc-700 border-zinc-200";
  };

  const statusLabel = () => {
    if (status === "ready") return "Ready";
    if (status === "failed") return "Needs retry";
    if (status === "stale") return "Stale";
    if (status === "pending" || status === "processing") return "Generating";
    return "Idle";
  };

  return (
    <section className="my-6 overflow-hidden rounded-[28px] border border-[#e7e7ea] bg-gradient-to-br from-[#ffffff] via-[#fbfbfd] to-[#f4f7fb] shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
      <div className="relative px-4 py-4 sm:px-5 sm:py-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.09),_transparent_34%)]" />

        <div className="relative flex flex-col gap-6">
          
          {/* Centered Header & Button Container */}
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="mx-auto max-w-3xl space-y-3">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#dbeafe] bg-[#eff6ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                  <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                  AI Summary
                </span>
                <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${statusTone()}`}>
                  {statusLabel()}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#111827] sm:text-[28px]">
                  {articleTitle ? `Summary for ${articleTitle}` : "Article summary"}
                </h2>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button
                type="button"
                onClick={requestSummary}
                disabled={requesting || status === "processing"}
                className="inline-flex items-center justify-center rounded-full bg-[#111827] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(17,24,39,0.18)] transition hover:-translate-y-0.5 hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {buttonLabel()}
              </button>
            </div>
          </div>

          {(status === "pending" || status === "processing") && (
            <div className="flex items-center gap-4 rounded-[22px] border border-[#e5e7eb] bg-white px-4 py-4 shadow-sm backdrop-blur-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111827] text-white">
                <Spinner />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-[#111827]">Generating summary</p>
                <p className="mt-1 text-sm leading-6 text-[#6b7280]">
                  The model is preparing a clean article overview. You can stay on this page while we generate and save it.
                </p>
              </div>
            </div>
          )}

          {status === "failed" && errorMessage && (
            <div className="rounded-[22px] border border-rose-200 bg-rose-50 px-4 py-4 text-sm leading-6 text-rose-700">
              <p className="font-semibold text-rose-800">Generation failed</p>
              <p className="mt-1">{errorMessage}</p>
            </div>
          )}

          {status === "stale" && (
            <div className="rounded-[22px] border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-amber-900">
              <p className="font-semibold">This summary is stale</p>
              <p className="mt-1">The article changed, so the previous AI summary should be regenerated to keep it accurate.</p>
            </div>
          )}

          {showBody && (
            <div className="overflow-hidden rounded-[24px] border border-[#e5e7eb] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
              <div className="flex items-center gap-3 border-b border-[#eef2f7] bg-[#fcfcfd] px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#111827] shadow-[0_0_0_5px_rgba(17,24,39,0.10)]" />
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Summary</p>
                  <p className="text-xs text-[#6b7280]">Saved and reused for future requests</p>
                </div>
              </div>

              <div className="px-4 py-5 sm:px-5">
                <p className="whitespace-pre-wrap text-[15px] leading-7 text-[#374151] sm:text-[16px]">
                  {summary}
                </p>

                {generatedAt && (
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#8b8e93]">
                    <span className="rounded-full border border-[#e5e7eb] bg-[#fafafa] px-3 py-1">
                      Generated at {new Date(generatedAt).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Centered Idle/Empty State Div */}
          {!showBody && status === "idle" && (
            <div className="text-center rounded-[22px] border border-dashed border-[#cbd5e1] bg-white/70 px-4 py-6 text-sm leading-6 text-[#6b7280]">
              Click <span className="font-semibold text-[#111827]">Generate summary</span> to create a clean AI summary card for this article. If one already exists, the backend will reuse it.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticleSummaryCard;