import React, { useRef, ChangeEvent, useState } from "react";

interface FileUploadProps {
  onFileUpload: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, accept, multiple }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const validFiles = Array.from(files).filter(file => file.size <= 5 * 1024 * 1024); // 5MB limit

      if (validFiles.length === files.length) {
        setErrorMessage(null); // Reset error message if files are valid
        onFileUpload(files);
      } else {
        // Set error message
        setErrorMessage("Files exceed the 5MB size limit.");
      }
    }
  };


  return (
    <><div>
            {/* Upload */}
      <h4 style={{ marginTop: "40px"}}>
        แนบหลักฐานประกอบการขอเอกสาร
        <span style={{ color: "red" }}>*</span>
      </h4>
        {/* FilesUpload */}
            <h3 style={{display: 'flex',flexDirection:'column', alignItems: 'center',justifyContent:'center',marginBottom:'5px'}}>
            <span style={{fontWeight: '400'}} className="text-wrapper">แนบเอกสาร</span>
            </h3>
            <h3>
                <div style={{display: 'flex',flexDirection:'column', alignItems: 'center',justifyContent:'center'}} >
                {/*<span style={{marginLeft:'30px'}} className="text-wrapper"> 1. สำเนาบัตรประชาชน </span> 
                <span style={{marginLeft:'30px'}} className="text-wrapper"> 2. สำเนาทะเบียนบ้าน </span>*/}
                <span style={{ color: "#6B6B6B" }} className="span"> (ไฟล์ .pdf แต่ละไฟล์ขนาดไม่เกิน 5MB)</span>
              </div>
            </h3>
    </div>

    <div className="drag-drop-area" onClick={handleClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
        <p>Click or Drop Files Here</p>
        {errorMessage && <div style={{ color: "red", marginTop: "5px" }}>{errorMessage}</div>}
        {/* SVG icon */}
        <img
          src="/images/upload.svg"
          alt="Upload Icon"
          style={{ marginTop: '10px', width: '50px', alignItems: 'center', justifyContent: 'center' }} // Adjust spacing as needed
        />
      </div>
    </>
  );
};

export default FileUpload;


