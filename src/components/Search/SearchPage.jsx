import React, { useState, useEffect, useMemo, useCallback, Suspense, lazy } from "react";
import NavbarMini from "../Navbar/NavbarMini";
import "./SearchPage.css";
import axios from "axios";
import { BACKEND_URL } from "../../constants";
import { useSearchParams } from "react-router-dom";
import companyLogo from "/assets/images/company.png";
import { ReadTime, formatDate } from "../../services/date";
import debounce from "lodash.debounce";
import SearchCardLoading from "./SearchCardLoading";

const BlogCard = lazy(() => import("../BlogSection/BlogCard"));
const FilterPopUp = lazy(() => import("../Filter/FilterPopUp"));
const Filter = lazy(() => import("../Filter/Filter"));

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [company, setCompany] = useState([]);
  const [headerName, setHeaderName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filterPopUp, setFilterPopUp] = useState(false);

  const fetchArticles = useCallback(
    debounce(async (query, page) => {
      setLoading(true);
      const params = { q: query, page, limit: 10 };

      try {
        const response = await axios.get(BACKEND_URL + "/search", { params });
        const newArticles = response.data.articles;

        if (page === 1) {
          setArticles(newArticles);
        } else {
          setArticles((prevArticles) => [...prevArticles, ...newArticles]);
        }

        setHasMore(newArticles.length === 10);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      } finally {
        setLoading(false);
      }
    }, 50),
    []
  );

  const fetchLatestArticles = useCallback(async (endPoint, page) => {
    setLoading(true);
    try {
      const res = await axios.get(`${BACKEND_URL}${endPoint}?page=${page}`);
      const data = res.data.articles;

      if (page === 1) {
        setArticles(data);
      } else {
        setArticles((prevArticles) => [...prevArticles, ...data]);
      }

      setHasMore(res.data.hasMore);
    } catch (error) {
      console.log("Failed to fetch articles", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const countCompany = useCallback(async () => {
    try {
      const res = await axios.get(BACKEND_URL + "/countCompanies");
      setCompany(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    countCompany();
  }, [countCompany]);

  useEffect(() => {
    const query = searchParams.get("query");
    setIsSearching(!!query);

    if (query) {
      setArticles([]);
      setPage(1);
      fetchArticles(query, 1);
    } else {
      fetchLatestArticles("/blogs", page);
    }
  }, [searchParams, page, fetchArticles, fetchLatestArticles]);

  const handleShowMore = useCallback(() => {
    const query = searchParams.get("query");
    if (query) {
      fetchArticles(query, page + 1);
    } else {
      fetchLatestArticles("/blogs", page + 1);
    }
    setPage((prevPage) => prevPage + 1);
  }, [page, searchParams, fetchArticles, fetchLatestArticles]);

  const openFilterPopup = useCallback(() => setFilterPopUp(true), []);
  const closeFilterPopUp = useCallback(() => setFilterPopUp(false), []);

  const headerText = useMemo(() => {
    return headerName
      ? headerName
      : isSearching
      ? decodeURIComponent(searchParams.toString().substring(6).replace(/\+/g, " "))
      : "Latest Blogs";
  }, [headerName, isSearching, searchParams]);

  return (
    <>
      {filterPopUp && (
        <Suspense fallback={<div>Loading Filter...</div>}>
          <FilterPopUp
            closeFilterPopUp={closeFilterPopUp}
            company={company}
            fetchArticles={fetchArticles}
            setHeaderName={setHeaderName}
          />
        </Suspense>
      )}
      <NavbarMini />
      <div className="pt-24 px-8 md:px-4 lg:px-14 2xl:px-28 h-full">
        <div className="w-full flex gap-10 h-full">
          <div className="section-left w-full flex flex-col gap-2 h-full max-w-5xl">
            <div className="flex w-full justify-between items-center">
              <h3 className="font-[400] text-2xl">
                {articles.length} Articles found for {headerText}
              </h3>
            </div>

            {loading && articles.length === 0 ? (
              <>
                <SearchCardLoading />
                <SearchCardLoading />
                <SearchCardLoading />
                <SearchCardLoading />
                <SearchCardLoading />
              </>
            ) : (
              <Suspense fallback={<div>Loading Articles...</div>}>
                {articles.map((item) => (
                  <BlogCard
                    key={item._id}
                    id={item._id}
                    link={`/blog/${item._id}`}
                    Title={item.title}
                    imagesrc={item.imageUrl === "your_image_url_here" ? companyLogo : item.imageUrl}
                    author={item.author?.name}
                    company={item.companyName}
                    data={item.description}
                    readingTime={ReadTime(item.description)}
                    date={formatDate(item.createdAt)}
                  />
                ))}
              </Suspense>
            )}

            {hasMore && !loading && (
              <div
                onClick={handleShowMore}
                className="pt-4 group pb-8 cursor-pointer h-full flex flex-col justify-center items-center w-full text-[#212121]"
              >
                Show More
              </div>
            )}

            {loading && articles.length > 0 && <SearchCardLoading />}
            <br />
            <br />
          </div>
          <div className="section-right md:hidden w-1/5 flex flex-col gap-2">
            <Suspense fallback={<div>Loading Filter...</div>}>
              <Filter company={company} fetchArticles={fetchArticles} setHeaderName={setHeaderName} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
