import React, { useState, ChangeEvent } from "react";

interface TextBoxProps {
  onTextChange: (text: string) => void;
}

const TextBox: React.FC<TextBoxProps> = ({ onTextChange }) => {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    onTextChange(event.target.value);
  };

  return (
    <>
      <div>
        <h4 style={{ marginTop: "40px" }}>
          เหตุผลในการขอ
          <span style={{ color: "red" }}>*</span>
        </h4>
      </div>
      <textarea
        placeholder="จะนำไปใช้ในการ....."
        value={text}
        onChange={handleTextChange}
        style={{
          marginTop: "10px",
          border: "1px solid",
          borderColor: "#959595",
          backgroundColor: "white",
          borderRadius: "5px",
          padding: "8px",
          paddingLeft: "15px",
          height: "auto",
          overflow: "auto"
        }}
      />
                <h3 style={{marginTop: '40px',
            display: 'flex',flexDirection:'column', alignItems: 'center',justifyContent:'center',marginBottom:'5px'}}>
            <span  className="text-wrapper">กรุณาตรวจสอบข้อมูลของท่านให้เรียบร้อย ก่อนกดยืนยันการขอ</span>
            </h3>
      
    </>
  );
};

export default TextBox;
