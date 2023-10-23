import React from 'react'
import HomeScreen from './pages/HomeScreen'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import BlogSection from './components/BlogSection/BlogSection';

const App = () => {
  return (
    <div className=" px-1">
      <Navbar />
      <HomeScreen />
      <BlogSection/>
      <Footer />
    </div>
  );
}


export default App