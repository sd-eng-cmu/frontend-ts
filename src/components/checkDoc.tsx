import { Button } from "primereact/button";
import { useState } from "react";

function Checkdoc() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="flex flex-row gap-8">
      <Button
        link
        className="text-[#68010E] rounded-xl py-2 w-52 flex"
        label="ไม่อนุมัติ"
        style={{
          backgroundColor: isHovered1 ? "#ECA0A8" : "#F6D2D6"
        }}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      ></Button>
      <Button
        link
        className="text-white rounded-xl py-2 w-52 flex"
        label="อนุมัติ"
        style={{
          backgroundColor: isHovered2 ? "#5E020E" : "#8B0213"
        }}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      ></Button>
    </div>
  );
}

export default Checkdoc;
