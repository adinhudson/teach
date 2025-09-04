import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About us';
import Contact from './Pages/contact us';
import VolunteerSignup from './Pages/Volunteer_signup';

//import Footer from "./components/Footer";
//import Home from "./pages/Home";
//import Volunteer from "./pages/Volunteer";

function App() {
  // Compute a basename from PUBLIC_URL so the app works when deployed
  // at the site root (e.g. https://www.teachlk.com) or a subpath
  // (e.g. https://username.github.io/teach)
  let basename;
  if (process.env.PUBLIC_URL) {
    try {
      const url = new URL(process.env.PUBLIC_URL);
      // Use pathname as basename; if it's just '/', leave undefined
      basename = url.pathname === '/' ? undefined : url.pathname.replace(/\/$/, '');
    } catch (e) {
      // If PUBLIC_URL is not a full URL, use it directly
      basename = process.env.PUBLIC_URL === '/' ? undefined : process.env.PUBLIC_URL.replace(/\/$/, '');
    }
  }

  return (
    <Router basename={basename}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/volunteer" element={<VolunteerSignup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
