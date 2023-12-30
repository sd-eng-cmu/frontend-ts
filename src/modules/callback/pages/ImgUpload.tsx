import React, { useRef, ChangeEvent } from "react";

interface FileUploadProps {
  onFileUpload: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
}

const ImgUpload: React.FC<FileUploadProps> = ({ onFileUpload, accept, multiple }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      onFileUpload(files);
    }
  };

  return (
    <><div style={{ marginTop: "40px" }}>
      {/* ImgUpload */}
      <h3 style={{display: 'flex',flexDirection: 'column', alignItems: 'center',justifyContent:'center', marginBottom:'5px'}}>
        <span style={{fontWeight: '400'}} className="text-wrapper">แนบรูปถ่าย </span>
        <span style={{color: "#6B6B6B" }} className="span">(ไฟล์ .png, .jpg สัดส่วน 3:4 และขนาดไม่เกิน 5MB)</span>
      </h3>
    </div>
    <div style={{display: 'flex', alignItems: 'right',justifyContent:'right'}}>
      <img 
        src="/images/imgExample.png"
        alt="img Example"
        style={{height:'170px' , width:'360px',margin:'10px'}}
      ></img>
      <div className="drag-drop-area-img" onClick={handleClick} style={{ display: 'flex', alignItems: 'center',justifyContent:'center',flexDirection: 'column' }}>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept={accept}
            multiple={multiple} />
          <p>Click or Drop Image Here</p>
          {/* SVG icon */}
          <img
            src="/images/upload.svg"
            alt="Upload Icon"

            style={{ marginTop:'10px', width:'50px' ,alignItems:'center',justifyContent:'center'}} // Adjust spacing as needed
          />
        </div>
      </div></>
  );
};

export default ImgUpload;
