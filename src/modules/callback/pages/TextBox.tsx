import { Button } from "primereact/button";
import React, { useState, ChangeEvent } from "react";

interface TextBoxProps {
  onTextChange: (text: string) => void;
}

const TextBox: React.FC<TextBoxProps> = ({ onTextChange }) => {
  const [text, setText] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);

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
          overflow: "auto",
        }}
      />
      <Button
        className={`mt-10 w-full h-full px-2 py-2 rounded-xl text-white ${
          isHovered ? "hovered" : ""
        }`}
        label="ยืนยัน"
        style={{ backgroundColor: isHovered ? "#8B0213" :  "#B91A2F" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></Button>
    </>
  );
};

export default TextBox;
