import React, { useEffect } from "react";




export default function BlogSection() {
 

  const blogs = [
    {
      id: 1,
      title:
        "How to Grow Network on LinkedIn: A Strategic Guide for Business Growth",
      category: "How to's",
      date: "April 4, 2025",
      image: "./images/blog.jpeg",
    },
    {
      id: 2,
      title:
        "How to Grow LinkedIn Followers as a Founder: From 0 to 10K (Step-by-Step Guide 2025)",
      category: "How to's",
      date: "March 24, 2025",
      image: "./images/blog1.png",
    },
    {
      id: 3,
      title:
        "Social Media Growth Hacks for Startups: How to Go Viral with a Plan",
      category: "Marketing",
      date: "February 18, 2025",
      image: "./images/blog.jpeg",
    },
  ];

  return (
    <section className="blog-section py-5">
      <div className="container">
      <div className="text-center mb-5">
        <span className="text-primary fw-semibold">Blogs</span>
        <h2 className="section-title">Everything about <br /> LinkedIn growth</h2>
        
        <p>The latest news, tips, and how-to's to help founders grow on LinkedIn.</p>
        </div>
        <div className="row g-4">
          {blogs.map((blog) => (
            <div className="col-md-4" key={blog.id}>
              <div className="card blog-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <span className="badge bg-light text-primary mb-2 fw-semibold">
                    {blog.category}
                  </span>
                  <h5 className="card-title fw-bold">{blog.title}</h5>
                  <p className="text-muted small mb-3">{blog.date}</p>
                  <a
                    href="#"
                    className="text-decoration-none text-primary fw-semibold"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
