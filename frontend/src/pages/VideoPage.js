import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VideoPage = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const { data } = await axios.get("http://localhost:5000/videos");
    setVideos(data);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select a video file first!");

    const formData = new FormData();
    formData.append("video", file);
    formData.append("title", title);

    await axios.post("http://localhost:5000/upload-video", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    fetchVideos();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Video Upload & List</h1>
      <form onSubmit={handleUpload}>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit">Upload Video</button>
      </form>

      <h2>Available Videos</h2>
      {videos.map((video) => (
        <div key={video._id}>
          <h3>{video.title}</h3>
          <Link to={`/video/${video._id}`}>
            <button>Watch Video</button>
          </Link>
        </div>
      ))}

      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default VideoPage;
