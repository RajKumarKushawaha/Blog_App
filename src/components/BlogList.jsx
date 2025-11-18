import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("newest"); // sorting
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  // Fetch all blogs
  const fetchBlogs = () => {
    axios
      .get("http://localhost:5000/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete blog
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axios
        .delete(`http://localhost:5000/blogs/${id}`)
        .then(() => {
          alert("Blog deleted successfully!");
          fetchBlogs();
        })
        .catch((err) => console.error("Error deleting blog:", err));
    }
  };

  // Filter by search
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase())
  );

  // Sort blogs
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortOption === "newest") {
      return b.id - a.id; // assuming ID increases with new blogs
    } else if (sortOption === "oldest") {
      return a.id - b.id;
    } else if (sortOption === "az") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "za") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {/* 🔍 Search + Sorting */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select w-25"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="newest">Newest → Oldest</option>
          <option value="oldest">Oldest → Newest</option>
          <option value="az">Title A → Z</option>
          <option value="za">Title Z → A</option>
        </select>
      </div>

      {/* Blog List */}
      <div className="row">
        {currentBlogs.length === 0 ? (
          <p className="text-center text-muted">No blogs found.</p>
        ) : (
          currentBlogs.map((blog) => (
            <div className="col-md-6 mb-4" key={blog.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="text-muted">By {blog.author}</p>
                    <p className="card-text text-truncate">{blog.content}</p>
                  </div>
                  <div className="mt-3">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="btn btn-info btn-sm me-2"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit/${blog.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <li
              key={number}
              className={`page-item ${
                currentPage === number ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default BlogList;
