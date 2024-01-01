import { StoreContext } from "common/contexts/StoreContext";
import { Button } from "primereact/button";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const [{ userData }] = useContext(StoreContext);
  const { pathname } = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const navigate = useNavigate();

  if (pathname === "/login") return null;

  return (
    <div className="fixed flex w-64 justify-items-center bg-[#fffefe] justify-center h-screen drop-shadow-xl ">
      {/* {userData?.type === "MISEmpAcc" && (
        <div className="space-y-3 fixed gap-2 pl-3 pr-3 pt-9">
          <Button
            onClick={() => navigate("/home")}
            link
            className="text-black bg-red rounded-xl py-2 w-52 flex"
            label="รายการใบคำขอ"
            style={{
              backgroundColor: isHovered4
                ? "#8B0213"
                : location.pathname === "/home"
                ? "#B91A2F"
                : "",
              color:
                location.pathname === "/home" || isHovered4
                  ? "#ffffff"
                  : "#000000"
            }}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          ></Button>
          <Button
            onClick={() => navigate("/adminSetting")}
            link
            className="text-black bg-red rounded-xl py-2 w-52 flex"
            label="ตั้งค่าเอกสาร"
            style={{
              backgroundColor: isHovered3
                ? "#8B0213"
                : location.pathname === "/adminSetting"
                ? "#B91A2F"
                : "",
              color:
                location.pathname === "/adminSetting" || isHovered3
                  ? "#ffffff"
                  : "#000000"
            }}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          ></Button>
        </div>
      )} */}

      {userData?.type === "StdAcc" && (
        <div className=" space-y-3 fixed gap-2 pl-3 pr-3 pt-9 ">
          <Button
            onClick={() => navigate("/home")}
            className={`text-black rounded-xl w-52 py-2 flex`}
            label="ขอใบคำขอ"
            link
            style={{
              backgroundColor: isHovered
                ? "#8B0213"
                : location.pathname === "/home"
                ? "#B91A2F"
                : "",
              color:
                location.pathname === "/home" || isHovered
                  ? "#ffffff"
                  : "#000000"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></Button>

          <Button
            onClick={() => navigate("/studentList")}
            link
            className="text-black bg-white rounded-xl py-2 w-52 flex "
            label="รายการใบคำขอ"
            style={{
              backgroundColor: isHovered2
                ? "#8B0213"
                : location.pathname === "/studentList"
                ? "#B91A2F"
                : "",
              color:
                location.pathname === "/studentList" || isHovered2
                  ? "#ffffff"
                  : "#000000"
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
                ? "#8B0213"
                : location.pathname === "/a"
                ? "#B91A2F"
                : "",
              color:
                location.pathname === "/a" || isHovered3 ? "#ffffff" : "#000000"
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
