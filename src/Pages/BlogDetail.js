import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { postId } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    // Fetch the blog post details
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog details:", error));
    if (firstVisit) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.log("Error Fetching comments", error));
      setFirstVisit(false);
    }
  }, [postId, firstVisit]);
  console.log("comments", comments.name);

  return (
    <div style={{ padding: "10px" }}>
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
      )}
      <h2>Comment</h2>
      {comments.map((comment) => (
        <li
          style={{
            listStyle: "none",
            background: "blue",
            color: "white",
            padding: "10px 5px",
            borderBottom: "1px solid white",
          }}
          key={comment.id}
        >
          <h4 style={{ fontSize: "16px" }}>{comment.name}</h4>
          <p>{comment.body}</p>
        </li>
      ))}
    </div>
  );
}

export default BlogDetail;
