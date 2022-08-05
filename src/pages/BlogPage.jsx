import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState();
  console.log(useLocation());
  console.log(posts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      {posts && (
        <ul>
          {" "}
          {posts.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))}{" "}
        </ul>
      )}
    </>
  );
};

export default BlogPage;
