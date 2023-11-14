// import ReactDOMServer from "react-dom/server";
import htmlPdf from "html2pdf.js";
import { useState, useContext } from "react";
import { StoreContext } from "common/contexts/StoreContext";

interface GenpdfProps {
  docs: string | null;
}

const Genpdf: React.FC<GenpdfProps> = ({ docs }) => {
  const [selectedPrename, setSelectedPrename] = useState<string | null>(null);
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
  const preNameOptions = ["นาย", "นางสาว"];
  const [{ userData }] = useContext(StoreContext);

  // Function to handle form submission
  // const handleSubmit = () => {
  //   // Implement your logic to use selectedMajor and selectedDate
  //   console.log("Selected Major:", selected);
  //   console.log("Selected Years:", selected);
  // };

  const pdfJSX = () => {
    const today = new Date();
    return `
    <html>
    <head>
      <meta charset="utf-8" />
      <title>PDF Result Template</title>
      <style>
        .test {
          font-size: 100;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: aquamarine;
        }
      </style>
    </head>
    <body>
  <div class="test">
    <div>
      Date: ${`${today.getDate()}. ${today.getMonth() + 1}.
      ${today.getFullYear()}.`}
    </div>

    <div>
      ${selectedPrename}${userData?.first_name}
      ${userData?.last_name}
    </div>
    <div>รหัสประจำตัว ${userData?.student_id}</div>
    <div> ในปีการศึกษา 2566 เป็นนักศึกษาระดับปริญญาตรี ชั้นปีที่ ${selectedYear}</div>

    <div>สาขาวิชา ${selectedMajor}</div>
    <div>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</div>
    
  </div>
</body>
  </html>  
        `;
  };

  const printHandler = () => {
    // const printElement = ReactDOMServer.renderToString(pdfJSX());
    const printElement = pdfJSX();
    if (selectedMajor && selectedPrename && selectedYear)
      htmlPdf().from(printElement).save();
    else {
      alert("กรอกข้อมูลให้ครบถ้วน");
    }
  };

  return (
    <div style={container}>
      <div>
        <div style={topic}>{docs}</div>
        <label>หนังสือรับรองฉบับนี้ให้ไว้เพื่อแสดงว่า </label>
        <br />
        <label> คำนำหน้าชื่อ</label>
        <select
          onChange={(e) => setSelectedPrename(e.target.value)}
          style={dropdown}
        >
          <option value="">Select</option>
          {preNameOptions.map((prenames, index) => (
            <option key={index} value={prenames}>
              {prenames}
            </option>
          ))}
        </select>
        <div style={lockBar} className="mt-3">
          {userData?.first_name} {userData?.last_name}
        </div>
        <br />
        <label>
          {" "}
          รหัสประจำตัว
          <div style={lockBar}>{userData?.student_id}</div>
        </label>{" "}
        <br />
        <label>ในปีการศึกษา 2566 เป็นนักศึกษาระดับปริญญาตรี </label>
        <label>ชั้นปีที่ </label>
        <select
          onChange={(e) => setSelectedYear(e.target.value)}
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
        <button style={buttonStyle} onClick={printHandler}>
          Print
        </button>
      </div>
    </div>
  );
};
export default Genpdf;

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
