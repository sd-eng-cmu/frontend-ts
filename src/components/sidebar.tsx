import { StoreContext } from "common/contexts/StoreContext";
import { Button } from "primereact/button";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const [{ userData }] = useContext(StoreContext);
  const { pathname } = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  if (pathname === "/login") return null;
  return (
    <div className="fixed flex w-64 justify-items-center bg-[#fffefe] justify-center h-screen drop-shadow-xl ">
      {/* {userData?.type === "MISEmpAcc" && ( */}
      {/* {(<div className="space-y-3 fixed gap-2 pl-3 pr-3 pt-9">
          <Button
            link
            className="text-black bg-red rounded-xl py-2 w-52 flex"
            label="รายการใบคำขอ"
          ></Button>
          <Button
            link
            className="text-black bg-red rounded-xl py-2 w-52 flex"
            label="ตั้งค่าเอกสาร"
          ></Button>
        </div> */}
      {/* )} */}

      {userData?.type === "StdAcc" && (
        <div className=" space-y-3 fixed gap-2 pl-3 pr-3 pt-9 ">
          <Button
            className={`text-black rounded-xl w-52 py-2 flex`}
            label="ขอใบคำขอ"
            link
            style={{
              backgroundColor: isHovered
                ? "#8B0213"
                : location.pathname === "/home"
                ? "#B91A2F"
                : "",
              color: location.pathname === "/home" ? "#ffffff" : "#000000"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></Button>

          <Button
            link
            className="text-black bg-white rounded-xl py-2 w-52 flex "
            label="รายการใบคำขอ"
            style={{
              backgroundColor: isHovered2
                ? "#B91A2F"
                : location.pathname === "/home"
                ? "#ffffff"
                : "",
              color:
                location.pathname === "/home" && !isHovered2
                  ? "#000000"
                  : "#ffffff"
            }}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          ></Button>
          <Button
            link
            className="text-black bg-white rounded-xl py-2 w-52 flex"
            label="ประวัติการขอ"
            style={{
              backgroundColor: isHovered3
                ? "#B91A2F"
                : location.pathname === "/home"
                ? "#ffffff"
                : "",
              color:
                location.pathname === "/home" && !isHovered3
                  ? "#000000"
                  : "#ffffff"
            }}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          ></Button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
