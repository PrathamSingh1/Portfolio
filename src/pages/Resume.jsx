import React from "react";

const Resume = () => {
  return (
    <div className="sm:max-w-[1000px] max-w-[350px] mx-auto mt-4 text-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-white">My Resume</h1>

      {/* PDF Viewer */}
      <div className="w-full h-[800px] border rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={`Resume.pdf`}
          title="Resume"
          className="w-full h-full"
        />
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
