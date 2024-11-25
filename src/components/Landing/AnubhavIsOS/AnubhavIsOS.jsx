import React from "react";
import { Link } from "react-router-dom";
import ButtonV5 from "../../ui/buttonv5";
import FadeWrapper from "../../ui/fadeWrapper";
import Background from "./background";

const AnubhavIsOS = () => {
  return (
    <>
      <section className="relative z-50 mb-24 flex flex-col items-center gap-8 bg-[#f9f9f9] py-16">
        <Background />
        <FadeWrapper>
          <h2 className="text-5xl font-semibold tracking-tighter text-[#212121] sm:text-3xl lg:text-6xl">
            Anubhav is Open Source
          </h2>
        </FadeWrapper>
        <FadeWrapper>
          <img
            src="/assets/Anubhav.svg"
            className="select-none"
            draggable={false}
          />
        </FadeWrapper>
        <FadeWrapper delay={0.1}>
          <p className="mt-4 max-w-2xl px-4 text-center text-2xl font-medium text-[#444] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_200%)] sm:text-xl lg:text-3xl">
            Join our journey to make Anubhav better! Contribute to the project
            on{" "}
            <a
              href="https://github.com/your-repo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#121212]"
            >
              GitHub
            </a>{" "}
            and help us create something extraordinary.
          </p>
        </FadeWrapper>
        <FadeWrapper delay={0.2}>
          <Link
            to="https://github.com/aitoss/Anubhav-frontend-23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonV5 className="w-full" icon={true}>
              Contribute Now
            </ButtonV5>
          </Link>
        </FadeWrapper>
      </section>
    </>
  );
};

export default AnubhavIsOS;
