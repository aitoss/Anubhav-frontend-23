import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Create from './pages/Create';
import Error404 from './pages/Error404';
import Blog from './pages/Blog';
import BlogSection from './components/BlogSection/BlogSection';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={
      <div className="flex flex-col  overflow-hidden w-screen">
      <Navbar />
      <HomeScreen />
      <BlogSection/>
      <Footer />
    </div>
      } />
      <Route path='/create' element={ <Create /> } />
      <Route path='/blog' element={ <Blog /> }/>
      <Route path='*' element={ <Error404 />} />
    </Routes>
  );
}


export default App