import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plan from './pages/Plan';
import Contact from './pages/Contact';

// Landing Pages
import SeoAgency from './pages/SeoAgency';
import ContentMarketing from './pages/ContentMarketing';
import LeadGeneration from './pages/LeadGeneration';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Playbook from './pages/Playbook';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/contact" element={<Contact />} />

            {/* SEO Landing Pages */}
            <Route path="/saas-seo-agency" element={<SeoAgency />} />
            <Route path="/b2b-content-marketing" element={<ContentMarketing />} />
            <Route path="/saas-lead-generation" element={<LeadGeneration />} />

            {/* Footer Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/playbook" element={<Playbook />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
