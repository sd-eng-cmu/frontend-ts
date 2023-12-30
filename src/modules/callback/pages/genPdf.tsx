// import ReactDOMServer from "react-dom/server";
import htmlPdf from "html2pdf.js";
import { useState, useContext, useEffect } from "react";
import { StoreContext } from "common/contexts/StoreContext";

interface GenpdfProps {
  docs: string | null;
}

const Genpdf: React.FC<GenpdfProps> = ({ docs }) => {
  const [selectedPrename, setSelectedPrename] = useState<string | null>(null);
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true); // Initialize as true

  //  major and years options
  const majorOptions = [
    "วิศวกรรมโยธา",
    "วิศวกรรมไฟฟ้า",
    "วิศวกรรมสิ่งแวดล้อม",
    "วิศวกรรมเครื่องกล",
    "วิศวกรรมเครื่องกลและการบริหารโครงการวิศวกรรม (หลักสูตรนานาชาติ)",
    "วิศวกรรมอุตสาหการ",
    "วิศวกรรมเหมืองแร่",
    "วิศวกรรมคอมพิวเตอร์",
    "วิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์",
    "วิศวกรรมบูรณาการ",
    "วิศวกรรมระบบสารสนเทศและเครือข่าย (หลักสูตรนานาชาติ)",
    "วิศวกรรมอุตสาหการและการจัดการโลจิสติกส์"
  ];
  const yearOptions = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const preNameOptions = ["นาย", "นางสาว"];
  const [{ userData }] = useContext(StoreContext);

  // Thai month names
  const thaiMonths = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม"
  ];

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
      
      }

        body {

          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        h1{
          font-family: 'Sarabun', sans-serif;
          font-size: 15px;
        }

        .container {
          text-align: center;
          margin-top: 40px;
          margin-left: 8px;
          
        }

        img {
          width: 120px; 
          display: block;
          margin: 20px auto 0 auto; /* Center the image */
        }

        .test {
          margin-top: 30px;
          display: flex;
          text-align:center ;
          justify-content: center;
          align-items: center;
          /* Add any additional styles for centering the content */
        }

        .topic {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 25px;
          margin-top: 25px;
        }

        .topic2 {
          font-weight: bold;
          display: inline;
        }

        .topic3 {
          text-decoration: underline;
          display: inline;
          margin-top: 25px;
        }
        .remark {

          display: inline;
          margin-top: 250px;
        }
        

        .date{
          margin-left: 250px;
          margin-top: 25px;
          margin-bottom: 50px;
          position: relative;
        }

        .professor{
          margin-left: 250px;
          margin-top: 25px;
          margin-bottom: 135px;
          position: relative;
        }

        .bookno {
          text-align: center;
          position: relative;
          margin-bottom: 25px;
        }

        .footbar-img {
          width: 100%;
          display: block;
          margin:  0; /* Center the image at the bottom */
        }
        .p_sign-img{
          position: absolute;
          bottom: 270px;
          left: 150px;
        }



        
      </style>
    </head>
    <body>
    <h1>
    <div class="container">
      <img src="/images/RibbinENG1.png" />
        <div >
        <div class = "topic"> 
          หนังสือรับรองสถานภาพการเป็นนักศึกษา <br />
          คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ <br /> <br /> </div>
          หนังสือรับรองฉบับนี้ให้ไว้เพื่อแสดงว่า <br /><br />
          <div class= "topic2">
            ${selectedPrename}${userData?.first_name}
            ${userData?.last_name} </div>
          </div>
          <br />
          <div>รหัสประจําตัว <div class= "topic2"> ${userData?.student_id} </div> </div>
          <br />
          <div>ในปีการศึกษา 2566 เป็นนักศึกษาระดับปริญญาตรี ชั้นปีที่ ${selectedYear}</div>
          <br />
          <div>สาขาวิชา ${selectedMajor}</div>
          <br />
          คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ 
          <br /><br />
          <div class = "date">ให้ไว้ ณ วันที่ ${`${today.getDate()} 
          เดือน ${thaiMonths[today.getMonth()]} พ.ศ. ${
            today.getFullYear() + 543
          }`}
          </div>
          <br />
          <img class="p_sign-img" src="/images/p_sign.png" />
          <div class = "professor">
          (ผู้ช่วยศาสตราจารย์ ดร.ปวรุตม์ จงชาญสิทโธ) <br />
          รองคณบดี ปฏิบัติการแทน <br />
          คณบดีคณะวิศวกรรมศาสตร์ <br />
          </div>
          <br />
          <div class = "remark"> 
          <div class = "topic3"> หมายเหตุ</div> หนังสือรับรองสถานภาพการเป็นนักศึกษานี้ใช้ได้ 45 วัน นับตั้งแต่วันที่ออกให้</div>
          <br />
          <div style="text-indent:-148px;">
          หรือถึงวันสิ้นสุดสถานภาพการเป็นนักศึกษา</div> </div>
          <br />
          <div class = "bookno">${` ${
            today.getFullYear() + 543
          }`}
          </div>
        </div>
      <img class="footbar-img" src="/images/footbar.png" />
    </div>
    </h1>
  </body>
</html>  
        `;
  };

  const printHandler = () => {
    const printElement = pdfJSX();
    if (selectedMajor && selectedPrename && selectedYear) {
      const pdfOptions = {
        margin: 0,
        filename: "หนังสือรับรองการเป็นนักศึกษา.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 }, // Increase scale to improve resolution
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      };

      htmlPdf().from(printElement).set(pdfOptions).save();
    } else {
      alert("กรอกข้อมูลให้ครบถ้วน");
    }
  };

  useEffect(() => {
    setDisabled(!selectedMajor || !selectedPrename || !selectedYear);
  }, [selectedMajor, selectedPrename, selectedYear]);

  return (
    <div style={container_form}>
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
        <button style={disabled ? disabledButtonStyle : buttonStyle} onClick={printHandler} disabled={!selectedMajor || !selectedPrename || !selectedYear}>
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
  margin: "20px auto",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  width: "150px"
};

const disabledButtonStyle = {
  ...buttonStyle,
  background: "#B0B0B0", // Grey color for disabled state
  cursor: "not-allowed", // Change cursor for disabled state
};

const container_form = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  border: "1px solid #FFD9DE",
  background: "#FFFFFF",
  width: "500px",
  padding: "10px 30px 10px 30px",
  margin:"50px auto"
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
  margin: "auto auto 30px auto"
};

