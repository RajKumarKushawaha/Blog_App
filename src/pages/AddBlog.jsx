import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    content: ""
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!blog.title || !blog.author || !blog.content) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:5000/blogs", blog)
      .then(() => {
        alert("Blog added successfully!");
        navigate("/"); // Redirect to Home after adding
      })
      .catch((err) => console.error("Error adding blog:", err));
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Add New Blog</h2>

      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={blog.title}
              onChange={handleChange}
              placeholder="Enter blog title"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={blog.author}
              onChange={handleChange}
              placeholder="Enter author name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              className="form-control"
              name="content"
              rows="5"
              value={blog.content}
              onChange={handleChange}
              placeholder="Write your blog content here..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
