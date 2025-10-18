import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Contact from './Pages/ContactUs';
import VolunteerSignup from './Pages/Volunteer_signup';


function App() {
  // Compute a basename from PUBLIC_URL so the app works when deployed
  // at the site root (e.g. https://www.teachlk.com) or a subpath
  // (e.g. https://username.github.io/teach)
  let basename;
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || import.meta.env.BASE_URL;

if (publicUrl) {
  try {
    const url = new URL(publicUrl, window.location.origin);
    basename = url.pathname === '/' ? undefined : url.pathname.replace(/\/$/, '');
  } catch (e) {
    basename = publicUrl === '/' ? undefined : publicUrl.replace(/\/$/, '');
  }
}

  return (
    <Router basename={basename}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/volunteer" element={<VolunteerSignup />} />
          </Routes>
        </main> */}
      </div>
    </Router>
  );
}

export default App;
