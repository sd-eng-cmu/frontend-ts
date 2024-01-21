import React, { useRef, ChangeEvent, useState } from "react";

interface FileUploadProps {
  onFileUpload: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
}

const ImgUpload: React.FC<FileUploadProps> = ({ onFileUpload, accept, multiple }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      if (file.size <= 1024 * 1024) { // Limit to less than 2MB
        setErrorMessage(null); // Clear any previous error messages
        onFileUpload(files);

        // Display image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setErrorMessage("Image size must be less than 1MB");
      }
    }
  };

  const handleReupload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the input value to allow re-uploading of the same file
      setImagePreview(null);
    }
  };

  return (
    <>
      <div style={{ marginTop: "40px" }}>
        {/* ImgUpload */}
        <h3 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
          <span style={{ fontWeight: '400' }} className="text-wrapper">แนบรูปถ่าย </span>
          <span style={{ color: "#6B6B6B" }} className="span">(ไฟล์ .png, .jpg สัดส่วน 3:4 และขนาดไม่เกิน 1MB)</span>
        </h3>
      </div>
      <div style={{ display: 'flex', alignItems: 'right', justifyContent: 'right' }}>
        <img
          src="/images/ImgExm.png"
          alt="ImgExm"
          style={{ width: '350px', margin: '10px' }}
        />
        <div className="drag-drop-area-img" onClick={handleClick}>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept={accept}
            multiple={multiple}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: '151px', height: '198px', objectFit: 'cover' }}
            />
          )}
          {imagePreview ? (
            <button onClick={handleReupload} style={{ marginTop: '10px' }}>
              Click to Reupload
            </button>
          ) : (
            <>
              <p>Click to Upload Image</p>
              {errorMessage && (
                <p style={{ color: 'red' }}>{errorMessage}</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ImgUpload;
