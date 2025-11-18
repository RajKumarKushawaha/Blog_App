import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentSection from "../components/CommentSection";

function BlogPage() {
  const { id } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);

  // Fetch blog by ID
  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  if (!blog) {
    return <h4 className="text-center mt-5">Loading blog...</h4>;
  }

  return (
    <div className="container">
      <div className="card shadow-sm p-4 mb-4">
        <h2 className="card-title">{blog.title}</h2>
        <h6 className="text-muted mb-3">By {blog.author}</h6>
        <p className="card-text">{blog.content}</p>

        <Link to="/" className="btn btn-secondary mt-3">
          Back to Home
        </Link>
      </div>

      {/* Comments Section */}
      <CommentSection blogId={blog.id} />
    </div>
  );
}

export default BlogPage;
