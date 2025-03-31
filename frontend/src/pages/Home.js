
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to the App</h1>
      <p>Navigate to different sections:</p>

      <button onClick={() => navigate("/video")}>Go to Videos</button>
      <button onClick={() => navigate("/pdf")}>Go to PDFs</button>
      <button onClick={() => navigate("/audio")}>Go to Audio recording Page</button>
      <button onClick={() => navigate("/sample2")}>Go to WebGL file</button>
    </div>
  );
}

export default Home;

