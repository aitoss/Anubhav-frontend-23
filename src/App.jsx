import React from 'react'
// import { Route, Switch } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import BlogSection from './components/BlogSection/BlogSection';

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HomeScreen />
      <BlogSection/>
      <Footer />
    </div>
  );
}


export default App