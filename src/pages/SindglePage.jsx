import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    post && (
      <>
        <button onClick={goBack}>Go back</button>
        <button onClick={goHome}>Go Home</button>

        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button disabled>disabled</button>

        <Link to={`/posts/${id}/edit`}>edit </Link>
      </>
    )
  );
};
export default SinglePage;
