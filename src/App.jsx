import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import HomePage from "./pages/HomePage";
import BlogSection from "./pages/Blog";
import FreeTool from "./pages/FreeTool";
import ScrollToTop from "./components/ScrollToTop";


function Home() {
  return <h2 className="text-center mt-5">Welcome to R|ethoric</h2>;
}
function HowItWorks() {
  return <h2 className="text-center mt-5">How it Works</h2>;
}
function Examples() {
  return <h2 className="text-center mt-5">Examples</h2>;
}
function Benefits() {
  return <h2 className="text-center mt-5">Benefits</h2>;
}
function FAQ() {
  return <h2 className="text-center mt-5">FAQ</h2>;
}
function Tools() {
  return <h2 className="text-center mt-5">Free Tools</h2>;
}
function Blog() {
  return <h2 className="text-center mt-5">Blog</h2>;
}

export default function App() {
  return (
    
  
      <Layout>
         <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tools" element={<FreeTool />} />
        <Route path="/blog" element={<BlogSection/>} />
      </Routes>
      </Layout>
   
  );
}
