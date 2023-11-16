import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Guidelines = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-10 md:h-8"></div>
      <div className="min-h-screen flex flex-col items-center">
        <section className="mx-auto lg:w-[70%] px-4 py-8 overflow-y-auto">
          <div className="text-xl text-black">
            <h1 className="text-4xl lg:py-8 font-semibold text-center text-black">
              Guidelines
            </h1>
            <p>
              Anubhav, the experience sharing platform, welcomes contributions
              from anyone at AIT to support others on their journey to the next
              interview. It offers a wealth of articles and resources
              specifically tailored to college placements and interview
              experiences.
            </p>
            <br />
            <h2 className="text-black text-2xl lg:pb-4 font-semibold">
              Reviewing Process:
            </h2>
            <ul>
              <li>
                Step 1: Share your interview experience in the write-article
                section.
              </li>
              <li>
                Step 2: Submit your article. After submission, it will go for
                verification. Verification is just a small process to filter out
                spam articles.
              </li>
              <li>
                Step 3: After verification, it will be available on our
                platform.
              </li>
            </ul>

            <h2 className="text-black text-2xl lg:pt-8 lg:pb-4 font-semibold">
              How to write Article:
            </h2>
            <p className="py-2">
              We've created a user-friendly and straightforward article writing
              section. To ensure a clear understanding of how to use it, please
              refer to the following points:
            </p>
            <div className="lg:ml-8 p-3 lg:p-0">
              <ul className="list-decimal">
                <li>
                  Enter basic information like your name, company name, offered
                  position, and email address.
                </li>
                <li>
                  Write the article in the editor which offers a variety of
                  features to streamline the article writing process, including
                  the ability to add headings, code blocks, format text, insert
                  emojis, images, and more.
                </li>
                <li>Add relevant tags related to your company and field.</li>
                <li>
                  Click the submit button to send your article for spam check
                  (verification step).
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Guidelines;
