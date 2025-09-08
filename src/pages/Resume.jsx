import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set worker file for PDF rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div className="sm:max-w-[900px] max-w-[350px] mx-auto mt-10 p-5 text-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-white">My Resume</h1>

      {/* PDF Viewer */}
      {/* <div className="w-full h-[600px] border rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={`Resume.pdf`}
          title="Resume"
          className="w-full h-full"
        />
      </div> */}
      <div className="w-full border rounded-lg shadow-lg overflow-hidden flex justify-center">
        <Document file={`${import.meta.env.BASE_URL}Resume.pdf`}>
          <Page pageNumber={1} />
        </Document>
      </div>

      {/* Download Button */}
      <div className="mt-6">
        <a
          href={`Resume.pdf`}
          download="Pratham_Singh_Resume.pdf"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
