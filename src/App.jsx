import React from 'react'
import HomeScreen from './pages/HomeScreen'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeScreen />
      <Footer />
    </div>
  );
}


export default App