import { useState } from "react";
import Genpdf from "./genPdf";

function StudentHome() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const docOptions = [
    "หนังสือรับรองความประพฤติ",
    "หนังสือรับรองการเป็นนักศึกษา",
    "หนังสือขอลงทะเบียนเรียนภาคฤดูร้อน",
    "ใบคำขอทั่วไป"
  ];

  return (
    <div className="body">
      <p className=" mt-56">ขอใบคำขอ</p>
      <select onChange={(e) => setSelectedDoc(e.target.value)} style={dropdown}>
        <option value="">Select</option>
        {docOptions.map((prenames, index) => (
          <option key={index} value={prenames}>
            {prenames}
          </option>
        ))}
      </select>
      {selectedDoc !== null && selectedDoc !== "" && <Genpdf docs={selectedDoc} />}
    </div>
  );
}

export default StudentHome;

const dropdown = {
  borderRadius: "5px",
  border: "1px solid var(--white-gray-6-gray, #E1E1E1)",
  background: "#FFF",
  color: "#838383"
};
