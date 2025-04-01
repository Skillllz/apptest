import React, { useState, useRef, useEffect } from "react";

const SamplePage1 = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [savedAudios, setSavedAudios] = useState([]);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  useEffect(() => {
    fetchSavedAudios('https://res.cloudinary.com/da0owzx4y/raw/upload/v1743231746/audio_files/cforwo3lgi36lk5ehuku.webm');
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = saveRecording;
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const saveRecording = () => {
    const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
    const formData = new FormData();
    formData.append("audio", audioBlob, "recording.webm");

    fetch("https://apptest-uvgg.onrender.com/upload-audio", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Audio uploaded:", data);
        fetchSavedAudios(); 
      })
      .catch((err) => console.error("Upload error:", err));
    
    audioChunks.current = []; 
  };

  const fetchSavedAudios = () => {
    fetch("https://apptest-uvgg.onrender.com/get-audios")
      .then((res) => res.json())
      .then((data) => setSavedAudios(data))
      .catch((err) => console.error("Fetch error:", err));
  };

  return (
    <div>
      <h2>Audio Recorder</h2>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? "Stop Recording" : "Start Recording"}
      </button>

      <h3>Saved Audios:</h3>
      {savedAudios.length > 0 ? (
        savedAudios.map((audio, index) => (
          <div key={index}>
            <audio controls>
              <source src={audio.url} type="audio/webm" />
            </audio>
          </div>
        ))
      ) : (
        <p>No recordings yet.</p>
      )}
    </div>
  );
};

export default SamplePage1;

