import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About us';
import HowItWorks from './Pages/How-it-works.jsx'; 

//import Footer from "./components/Footer";
//import Home from "./pages/Home";
//import Volunteer from "./pages/Volunteer";

function App() {
  return (
    <Router basename="/teach">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
