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
            src="https://docs.google.com/forms/d/e/1FAIpQLSfspM1DDJ40B3UKjLEP0doRr6O_HVKPBesZC1jXfi7ygNXx9A/viewform?embedded=true"
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
