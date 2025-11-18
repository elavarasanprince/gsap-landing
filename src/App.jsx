import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import HomePage from "./pages/HomePage";
import BlogSection from "./pages/Blog";
import FreeTool from "./pages/FreeTool";
import ScrollToTop from "./components/ScrollToTop";
import HowItWorks from "./components/HowItWorks";
import Example from "./components/Example";
import Benefits from "./components/Benefits";
import FAQSection from "./components/FAQ";




export default function App() {
  return (
    
  
      <Layout>
         <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/examples" element={<Example />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/faq" element={<FAQSection />} />
        {/* <Route path="/tools" element={} /> */}
        <Route path="/blog" element={<BlogSection/>} />
      </Routes>
      </Layout>
   
  );
}
