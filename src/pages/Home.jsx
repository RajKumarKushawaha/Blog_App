import React from "react";
import BlogList from "../components/BlogList";

function Home() {
  return (
    <div className="container">
      <h2 className="mb-4 text-center">All Blogs</h2>
      <BlogList /> {/* This should render all blogs */}
    </div>
  );
}

export default Home;
