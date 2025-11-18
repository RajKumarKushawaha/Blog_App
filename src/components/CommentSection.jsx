import React, { useState, useEffect } from "react";
import axios from "axios";

function CommentSection({ blogId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    author: "",
    text: ""
  });

  // Fetch comments for this blog
  useEffect(() => {
    axios
      .get(`http://localhost:5000/comments?blogId=${blogId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, [blogId]);

  // Handle input change
  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.author || !newComment.text) {
      alert("Please fill all fields");
      return;
    }

    const commentData = { ...newComment, blogId };

    axios
      .post("http://localhost:5000/comments", commentData)
      .then(() => {
        setNewComment({ author: "", text: "" });
        return axios.get(`http://localhost:5000/comments?blogId=${blogId}`);
      })
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Error posting comment:", err));
  };

  return (
    <div className="mt-5">
      <h5>Comments ({comments.length})</h5>

      {/* List of comments */}
      {comments.length > 0 ? (
        comments.map((c) => (
          <div key={c.id} className="card p-2 mb-2 shadow-sm">
            <strong>{c.author}</strong>
            <p className="mb-0">{c.text}</p>
          </div>
        ))
      ) : (
        <p>No comments yet. Be the first!</p>
      )}

      {/* Add comment form */}
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            name="author"
            placeholder="Your name"
            value={newComment.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <textarea
            className="form-control"
            name="text"
            placeholder="Write a comment..."
            value={newComment.text}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary btn-sm">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentSection;
