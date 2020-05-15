import React, { useState, useEffect } from "react";
import "../Stylings/Content.css";
import axios from "axios";

export default function Content() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/?_limit=12")
      .then((res) => {
        console.log(res);
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="section">
      <div className="row mb-5">
        {images.map((i) => (
          <div key={i.id} className="col-md-4">
            <div className="thumbnail">
              <a href={i.url}>
                <img
                  src={i.url}
                  alt={`Flower ${i.id}`}
                  style={{ width: "100%" }}
                />
              </a>
              <div className="caption">
                <p>{i.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
