import React, { useState, useContext } from "react";
import { StoreContext } from "common/contexts/StoreContext";

const Forms: React.FC = () => {
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  //  major and years options
  const majorOptions = [
    "วิศวกรรมคอมพิวเตอร์",
    "วิศวกรรมเครื่องกล",
    "วิศวกรรมไฟฟ้า",
    "วิศวกรรมโยธา",
    "วิศวกรรมสิ่งแวดล้อม",
    "วิศวกรรมเหมืองแร่และปิโตรเลียม",
    "วิศวกรรมอุตสาหการ",
    "วิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์"
  ];
  const yearOptions = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const [{ userData }] = useContext(StoreContext);

  // Function to handle form submission
  const handleSubmit = () => {
    // Implement your logic to use selectedMajor and selectedDate
    console.log("Selected Major:", selectedMajor);
    console.log("Selected Years:", selectedYear);
  };

  return (
    <div style={container}>
      <div>
        <div style={topic}>หนังสือรับรองการเป็นนักศึกษา</div>
        <label>หนังสือรับรองฉบับนี้ให้ไว้เพื่อแสดงว่า </label>
        <div style={lockBar}>
          {userData?.first_name} {userData?.last_name}
        </div>
        <br />
        <label>
          {" "}
          รหัสประจำตัว
          <div style={lockBar}>640612097</div>
        </label>{" "}
        <br />
        <label>ในปีการศึกษา 2566 เป็นนักศึกษาระดับปริญญาตรี </label>
        <label>ชั้นปีที่ </label>
        <select
          onChange={(e) => setSelectedMajor(e.target.value)}
          style={dropdown}
        >
          <option value="">Select</option>
          {yearOptions.map((Years, index) => (
            <option key={index} value={Years}>
              {Years}
            </option>
          ))}
        </select>
        <br />
        <label>สาขาวิชา</label>
        <select
          onChange={(e) => setSelectedMajor(e.target.value)}
          style={dropdown}
        >
          <option value="">Select</option>
          {majorOptions.map((major, index) => (
            <option key={index} value={major}>
              {major}
            </option>
          ))}
        </select>
        <br />
        <label>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</label>
        <button style={buttonStyle} onClick={handleSubmit}>
          ถัดไป
        </button>
      </div>
    </div>
  );
};

export default Forms;

const lockBar = {
  borderRadius: "5px",
  border: "1px solid var(--white-gray-6-gray, #E1E1E1)",
  background: "#F3F3F3",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "220px"
};

const dropdown = {
  borderRadius: "5px",
  border: "1px solid var(--white-gray-6-gray, #E1E1E1)",
  background: "#FFF",
  color: "#838383"
};

const buttonStyle = {
  borderRadius: "10px",
  background:
    "var(--gra-R, linear-gradient(115deg, rgba(255, 54, 81, 0.70) -5.4%, rgba(255, 71, 95, 0.00) 83.98%), #8B0213)",
  color: "#FFFFFF",
  display: "flex",
  padding: "10px 0px 10px 0px",
  margin: "20px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  width: "150px"
};

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  border: "1px solid #FFD9DE",
  background: "#FFFFFF",
  width: "500px",
  padding: "10px 30px 10px 30px"
};

const topic = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px 10px 0px 0px",
  borderBottom: "1px solid var(--cert-0-r, #FFD9DE)",

  background:
    "var(--gra2-R, linear-gradient(90deg, rgba(255, 255, 255, 0.20) -1.24%, rgba(249, 233, 235, 0.20) 69.32%), #FFF)",
  padding: "10px 0px 20px 0px",
  margin: "0px 0px 30px 0px"
};
