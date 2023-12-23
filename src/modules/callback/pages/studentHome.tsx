import React, { useState } from "react";
import Genpdf from "./genPdf";
import Genpdf2 from "./genPdf2";

function StudentHome() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const docOptions = [
    "หนังสือรับรองความประพฤติ",
    "หนังสือรับรองการเป็นนักศึกษา",
    "หนังสือขอลงทะเบียนเรียนภาคฤดูร้อน",
    "ใบคำขอทั่วไป"
  ];

  const handleButtonClick = (doc: string) => {
    setSelectedDoc(doc);
  };

  // Explicitly define the type for buttonStyle
  const buttonStyle: React.CSSProperties = {
    borderRadius: "10px",
    width: "500px",
    border: "1px solid #FFD9DE",
    padding: "0px 0px",
    marginTop: "16px",
    cursor: "pointer",
    color: "#000",
    background: "var(--gra2-R, linear-gradient(90deg, rgba(255, 255, 255, 0.20) -1.24%, rgba(249, 233, 235, 0.20) 69.32%), #FFF)",
    boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.05)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  };

  const rectangleStyle = {
    width: "10px",
    height: "54px",
    margin: "0px 24px 0px 0px",
    flexShrink: 0,
    borderRadius: "10px 0px 0px 10px",
    background: "var(--Cert-5-R, #AE0218)",
  };

  return (
    <div style={container_form}>
      <div className="body">
        <h5 style={{marginTop: "6rem"}}>ขอใบคำขอ</h5>
        <div>
          {docOptions.map((doc, index) => (
            <button
              key={index}
              style={{
                ...buttonStyle,
                background: selectedDoc === doc ? "rgba(255, 222, 222, 0.5)" : "#FFF",
              }}
              onClick={() => handleButtonClick(doc)}
            >
              <div style={rectangleStyle}></div>
              {doc}
            </button>
          ))}
        </div>
        {selectedDoc !== null && selectedDoc !== "" && (
          selectedDoc === "หนังสือรับรองความประพฤติ" ? (
            <Genpdf2 docs={selectedDoc} />
          ) : (
            <Genpdf docs={selectedDoc} />
          )
        )}
      </div>
    </div>
  );
}

const container_form = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px"
};

export default StudentHome;
