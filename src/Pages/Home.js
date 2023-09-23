import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the API when the component mounts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blog Homepage</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} style={{ listStyle: "none" }}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
