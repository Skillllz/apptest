
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import PdfViewer from "./pages/PDFPage";
import SamplePage1 from "./pages/SamplePage1";
import SamplePage2 from "./pages/SamplePage2";

function App() {
  return (
    <Router>
      <div>
        Navigation Menu
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/video">Video Player</Link></li>
            <li><Link to="/pdf">PDF Viewer</Link></li>
            <li><Link to="/audio">Audio recording</Link></li>
            <li><Link to="/sample2">WebGL File</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/pdf" element={<PdfViewer />} />
          <Route path="/audio" element={<SamplePage1 />} />
          <Route path="/sample2" element={<SamplePage2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
