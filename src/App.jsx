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
import Logo from "./components/Loader/DummyLoader";
import { useEffect, useState } from "react";
import SearchPage from "./components/Search/SearchPage";

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* {loading ? (
              <div className="w-full flex justify-center h-screen items-center">
                <Logo />
              </div>
            ) : ( */}
            <div className="flex flex-col mx-auto overflow-hidden">
              <Navbar />
              <HomeScreen />
              <div className="flex flex-col items-center">
                <BlogSection />
                <Video />
                <Footer />
              </div>
            </div>
            {/* )} */}
          </>
        }
      />
      <Route path="/Create" element={<Create />} />
      <Route path="/blog/:id" element={<ViewBlog />} />
      {/* <Route path='/videos' element={<Videos />} /> */}
      <Route path="/guidelines" element={<Guidelines />} />
      <Route path="/request" element={<RequestArticle />} />
      <Route path="/legal/terms/" element={<TermsService />} />
      {/* <Route path="/videos" element={<VideosPage />} /> */}
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
