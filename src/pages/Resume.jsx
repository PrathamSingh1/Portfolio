import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set PDF.js worker (required)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="sm:max-w-[900px] max-w-[350px] mx-auto mt-10 p-5 text-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-white">My Resume</h1>

      {/* PDF Viewer */}
      <div className="w-full border rounded-lg shadow-lg overflow-hidden flex flex-col items-center bg-white">
        <Document
          file={`${import.meta.env.BASE_URL}Resume.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={window.innerWidth > 900 ? 800 : 350} // responsive width
            />
          ))}
        </Document>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <button
          onClick={async () => {
            const response = await fetch(`${import.meta.env.BASE_URL}Resume.pdf`);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "Pratham_Singh_Resume.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          }}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Download Resume
        </button>

        <a
          href={`${import.meta.env.BASE_URL}Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg bg-gray-600 text-white font-semibold hover:bg-gray-700 transition"
        >
          View in New Tab
        </a>
      </div>
    </div>
  );
};

export default Resume;
