import React from "react";

const Admissions = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#ccfffd",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        {/* Iframe Section */}
        <div className="text-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdyqrE46D2USXCSwCRi33SozB2txVTpWtBmhvfjlYiRrE-92A/viewform?embedded=true"
            width="100%"
            height="2000px"
            style={{
              border: "none",
            }}
            title="Admission Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
