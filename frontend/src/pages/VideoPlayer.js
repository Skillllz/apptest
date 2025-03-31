
import React, { useEffect, useState } from "react";

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://res.cloudinary.com/da0owzx4y/video/upload/v1743195496/xomaguufvh5gxq7hvjkp.mp4`)
      .then((response) => {
        if (response.ok) {
          setVideoUrl(response.url);
        } else {
          console.error("Error fetching video");
        }
      })
      .catch((error) => console.error("Fetch error:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Video Player</h2>
      {loading ? (
        <p>Loading video...</p>
      ) : videoUrl ? (
        <video width="600" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Video not available.</p>
      )}
    </div>
  );
};

export default VideoPlayer;
