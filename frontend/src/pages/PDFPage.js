

import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    // Replace this with an actual file ID from your database
    const fileId = "67e711492325c8d7b337e93c"; // Example ID

     fetch(`http://localhost:5000/get-pdf/${fileId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch PDF");
        return res.blob();
      })
      .then((blob) => {
        setPdfUrl(URL.createObjectURL(blob));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>PDF Viewer</h2>
      {pdfUrl ? (
        <Document file={pdfUrl}>
          <Page pageNumber={1} />
        </Document>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default PdfViewer;


