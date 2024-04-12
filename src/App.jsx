import { Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Create from './pages/Create';
import Error404 from './pages/Error404';
import ViewBlog from './pages/ViewBlog';
import BlogSection from './components/BlogSection/BlogSection';
import Videos from './pages/Videos';
import Guidelines from './pages/Guidelines';
import RequestArticle from './pages/RequestArticle';
import TermsService from './pages/TermsService';
import Video from "./pages/Videos"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={
        <div className="flex flex-col mx-auto overflow-hidden">
          <Navbar />
          <HomeScreen />
          <div className="flex flex-col items-center">
            <BlogSection />
            <Video />
            <Footer />
          </div>
        </div>
      } />
      <Route path='/Create' element={<Create />} />
      <Route path='/blog/:id' element={<ViewBlog />} />
      {/* <Route path='/videos' element={<Videos />} /> */}
      <Route path='/guidelines' element={<Guidelines />} />
      <Route path='/request' element={<RequestArticle />} />
      <Route path="/TermService" element={<TermsService />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}


export default App