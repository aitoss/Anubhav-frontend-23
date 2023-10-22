import React from 'react'
import HomeScreen from './pages/HomeScreen'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className=" px-1">
      <Navbar />
      <HomeScreen />
      <Footer />
    </div>
  );
}


export default App