import React from "react";

const SamplePage2 = () => {
  return (
    <div>
      <h2>WebGL Player</h2>
      <iframe
        src="http://localhost:5000/webgl/index.html"
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="WebGL Game"
      ></iframe>
    </div>
  );
};

export default SamplePage2;
