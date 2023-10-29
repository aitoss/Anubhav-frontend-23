import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import BlogSection from './components/BlogSection/BlogSection';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={
      <div className="flex flex-col">
      <Navbar />
      <HomeScreen />
      <BlogSection/>
      <Footer />
    </div>
      } />
    </Routes>
  );
}


export default App