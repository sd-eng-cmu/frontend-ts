import React, { useContext, useState } from "react";
import Genpdf from "./genPdf";
import Genpdf2 from "./genPdf2";
import "./uploading.css";
import FileUpload from "./FileUpload";
import ImgUpload from "./ImgUpload";
import TextBox from "./TextBox";
import { Button } from "primereact/button";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { postCertificateRequest, uploadFile } from "../apis/queries";
import { useCertificateStore } from "../contexts/certificate";
import { StoreContext } from "common/contexts/StoreContext";
import { CreateCertificateDto, TDocType } from "types/certificate";

function StudentHome() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]); // Updated to use File[]
  const [uploadedPictures, setUploadedPictures] = useState<File[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { prename, year, major } = useCertificateStore();
  const [store] = useContext(StoreContext);
  const [reason, setReason] = useState<string>("");
  const [docType, setDocType] = useState<TDocType>("Conduct");
  const [currentPicture, setCurrentPicture] = useState<File | null>(null);

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
      setCurrentPicture(files[0]);
    setUploadedPictures((prevPictures) => [...prevPictures, ...Array.from(files)]);
  };

  const handleDeleteFile = (index: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleDeletePicture = () => {
    setCurrentPicture(null);
    setUploadedPictures([]);
  };

  const handleTextChange = (text: string) => {
    // Do something with the entered text, if needed
    console.log("Entered text:", text);
    setReason(text);
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
    background:
      "var(--gra2-R, linear-gradient(90deg, rgba(255, 255, 255, 0.20) -1.24%, rgba(249, 233, 235, 0.20) 69.32%), #FFF)",
    boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.05)",
    textAlign: "left",
    display: "flex",
    alignItems: "center"
  };

  const rectangleStyle = {
    width: "10px",
    height: "54px",
    margin: "0px 24px 0px 0px",
    flexShrink: 0,
    borderRadius: "10px 0px 0px 10px",
    background: "var(--Cert-5-R, #AE0218)"
  };

  const { mutateAsync } = useMutation(postCertificateRequest, {});

  const { mutateAsync: mutateFile } = useMutation(uploadFile, {});

  const handleSubmit = async () => {
    setIsDisabled(true);
    try {
      if (store.userData) {
        const payload: CreateCertificateDto = {
          prename: prename,
          firstname: store.userData?.first_name,
          lastname: store.userData?.last_name,
          student_code: parseInt(store.userData?.student_id),
          study_level: "Bachelor",
          year: year,
          major: major,
          type: docType,
          reason: reason
        };
        const data = await mutateAsync(payload);

        if (uploadedFiles.length > 0) {
          const payload = {
            files: uploadedFiles,
            certId: data.result,
            type: "Document"
          };
          await mutateFile(payload);
        }

        if (uploadedPictures.length > 0) {
          const payload = {
            files: uploadedPictures,
            certId: data.result,
            type: "Photo"
          };
          await mutateFile(payload);
        }
      }
    } catch {
      toast.error("มีข้อผิดพลาด");
    }
    toast.success("ส่งใบคำขอเสร็จสิ้น");
    setIsDisabled(false);
  };

  return (
    <div className="flex justify-center w-full h-full">
      <div>
        <h5>ขอเอกสาร</h5>
        <div>
          {docOptions.map((doc, index) => (
            <button
              key={index}
              style={{
                ...buttonStyle,
                background:
                  selectedDoc === doc ? "rgba(255, 222, 222, 0.5)" : "#FFF"
              }}
              onClick={() => handleButtonClick(doc)}
            >
              <div style={rectangleStyle}></div>
              {doc}
            </button>
          ))}
        </div>
        {selectedDoc !== null &&
          selectedDoc !== "" &&
          (selectedDoc === "หนังสือรับรองความประพฤติ" ? (
            <Genpdf2 docs={selectedDoc} setType={setDocType} />
          ) : (
            <Genpdf docs={selectedDoc} setType={setDocType} />
          ))}
        <div>
          {selectedDoc && (
            <>
              <FileUpload onFileUpload={handleFileUpload} accept=".pdf" />
            </>
          )}
          {uploadedFiles.length > 0 && (
            <div>
              <ul
                style={{
                  fontWeight: "300",
                  borderRadius: "5px",
                  background: "var(--white-2-Gray, #F5F5F5)"
                }}
              >
                {uploadedFiles.map((file, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <span style={{ margin: "5px" }}>
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                    <button
                      style={{
                        margin: "5px",
                        width: "100px",
                        borderRadius: "5px",
                        marginLeft: "auto",
                        color: "white",
                        background: "#BE2D40"
                      }}
                      onClick={() => handleDeleteFile(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedDoc && (
            <>
              <ImgUpload
                onFileUpload={handlePictureUpload}
                accept="image/jpeg, image/png"
              />
            </>
          )}

          {currentPicture && (
            <div>
              <ul
                style={{
                  fontWeight: "300",
                  borderRadius: "5px",
                  background: "var(--white-2-Gray, #F5F5F5)"
                }}
              >
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <span style={{ margin: "5px" }}>
                    {currentPicture.name} ({(currentPicture.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </li>
              </ul>
            </div>
          )}

          {uploadedPictures.length > 0 && !currentPicture && (
            <div>
              <ul
                style={{
                  fontWeight: "300",
                  borderRadius: "5px",
                  background: "var(--white-2-Gray, #F5F5F5)"
                }}
              >
                {uploadedPictures.map((pic, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <span style={{ margin: "5px" }}>
                      {pic.name} ({(pic.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedDoc && <TextBox onTextChange={handleTextChange} />}
          {selectedDoc && (
            <Button
              className={`mt-10 w-full h-full px-2 py-2 rounded-xl text-white ${
                isHovered ? "hovered" : ""
              }`}
              label="ยืนยัน"
              onClick={handleSubmit}
              disabled={isDisabled}
              style={{ backgroundColor: isHovered ? "#8B0213" : "#B91A2F" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            ></Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentHome;