import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
// import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
const [nav] = useState([
  "About",
  "Portfolio", 
  "Resume", 
  "Contact"]);

const [recentNav, setRecentNav] = useState(nav[0]);

const [recentMobile, setRecentMobile] = useState(false);

return (
  <div className={`${recentMobile ? "mobile-nav-active" : ""}`}>
    <Header />
    <Nav
    nav={nav}
    recentNav={recentNav}
    recentMobile={recentMobile}
    setRecentNav={setRecentNav}
    setRecentMobile={setRecentMobile}
    ></Nav>

    <main>
      {recentNav === "About Me" ? (
          <About />
        ) : recentNav === "Portfolio" ? (
          <Portfolio />
        ) : recentNav === "Contact" ? (
          <Contact />
        ) : recentNav === "Resume" ? (
          <Resume />
        ) : (
          <About />
        )}
          <Footer />
    </main>
  </div>
);
}

export default App;