import React, {  useState } from "react";
import Genpdf from "./genPdf";
import Genpdf2 from "./genPdf2";
import "./uploading.css"; 
import FileUpload from "./FileUpload";
import ImgUpload from "./ImgUpload";
import TextBox from "./textbox";


function StudentHome() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]); // Updated to use File[]
  const [uploadedPictures, setUploadedPictures] = useState<File[]>([]);

  const docOptions = [
    "หนังสือรับรองความประพฤติ",
    "หนังสือรับรองการเป็นนักศึกษา",
    "หนังสือขอลงทะเบียนเรียนภาคฤดูร้อน",
    "ใบคำขอทั่วไป"
  ];


  const handleButtonClick = (doc: string) => {
    setSelectedDoc(doc);
  };

  const handleFileUpload = (files: FileList) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
  };

  const handlePictureUpload = (files: FileList) => {
    const validPictures = Array.from(files).filter((pic) => pic.size <= 25 * 1024 * 1024);
    setUploadedPictures((prevPictures) => [...prevPictures, ...validPictures]);
  };

  const handleDeleteFile = (index: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleDeletePicture = (index: number) => {
    setUploadedPictures((prevPictures) =>
      prevPictures.filter((_, i) => i !== index)
    );
  };

  const handleTextChange = (text: string) => {
    // Do something with the entered text, if needed
    console.log("Entered text:", text);
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
        <h5 style={{ marginTop: "6rem" }}>ขอใบคำขอ</h5>
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
              <div>
        {selectedDoc && (
          <>
              <FileUpload onFileUpload={handleFileUpload} accept=".pdf" />
            </>          
            )}
          {uploadedFiles.length > 0 && (
            <div>
                <ul style={{ fontWeight:'300',borderRadius: '5px', background: 'var(--white-2-Gray, #F5F5F5)' }}>
                  {uploadedFiles.map((file, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{margin:'5px'}}>{file.name}</span>
                  <button style={{margin:'5px',width:'100px',borderRadius: '5px', marginLeft: 'auto', color: 'white', background: '#BE2D40' }} onClick={() => handleDeleteFile(index)}>
                  Delete
                  </button>
                  </li>
                  ))}
                </ul>
            </div>
          )}
          {selectedDoc && (
          <>
              <ImgUpload onFileUpload={handlePictureUpload} accept="image/jpeg, image/png" />
            </>          
            )}

          {uploadedPictures.length > 0 && (
            <div>
              <ul style={{ fontWeight:'300',borderRadius: '5px', background: 'var(--white-2-Gray, #F5F5F5)' }}>
                {uploadedPictures.map((pic, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{margin:'5px'}}>{pic.name}</span>
                    <button style={{margin:'5px',width:'100px',borderRadius: '5px', marginLeft: 'auto', color: 'white', background: '#BE2D40' }} onClick={() => handleDeletePicture(index)}>
                  Delete
                  </button>                  
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedDoc && (
          <TextBox onTextChange={handleTextChange} /> )}

      </div>
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
