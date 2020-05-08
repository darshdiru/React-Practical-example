import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Stylings/Datafetch.css";

function DataFetch() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Wrapp">
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetch;
