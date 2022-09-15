import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Friends from "./components/Friends";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/restaurants" element={<Restaurants/>} />
        <Route path="/friends" element={<Friends/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


