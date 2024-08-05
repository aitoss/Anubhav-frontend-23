import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Create from "./pages/Create";
import Error404 from "./pages/Error404";
import ViewBlog from "./pages/ViewBlog";
import BlogSection from "./components/BlogSection/BlogSection";
import Guidelines from "./pages/Guidelines";
import RequestArticle from "./pages/RequestArticle";
import TermsService from "./pages/TermsService";
import Video from "./pages/Videos";
import VideosPage from "./pages/VideosPage";
import { useEffect } from "react";
import SearchPage from "./components/Search/SearchPage";
import Story from "./pages/Story";
import CTA from "./components/CTA/CTA";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import WhatIsAnubhav from "./components/WhatIsAnubhav/WhatIsAnubhav";
import Lenis from "lenis";
import VideoSection from "./components/VideoSection/VideoSection";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="mx-auto flex flex-col overflow-hidden">
              <Navbar />
              <HomeScreen />
              <WhatIsAnubhav />
              <HowItWorks />
              <VideoSection />
              <div className="flex flex-col items-center">
                {/* <BlogSection /> */}
                {/* <Video /> */}
                <CTA />
                <Footer />
              </div>
            </div>
          </>
        }
      />
      <Route path="/Create" element={<Create />} />
      <Route path="/blog/:id" element={<ViewBlog />} />
      {/* <Route path='/videos' element={<Videos />} /> */}
      <Route path="/guidelines" element={<Guidelines />} />
      <Route path="/request" element={<RequestArticle />} />
      <Route path="/legal/terms/" element={<TermsService />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/story" element={<Story />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
