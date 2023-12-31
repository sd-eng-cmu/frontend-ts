import { StoreContext } from "common/contexts/StoreContext";
import { Button } from "primereact/button";
import { useContext } from "react";

function Sidebar() {
  const [{ userData }, setStore] = useContext(StoreContext);
  return (
    <div className="fixed flex w-64 justify-items-center justify-center h-screen shadow bg-slate-400">
      {/* {userData?.type === "MISEmpAcc" && ( */ }
        {/* {(<div className="flex-col w-full space-y-5 items-center gap-2 pl-3 pr-3 pt-9">
          <Button
            link
            className="text-black bg-slate-300 rounded-xl h-10 flex items-center justify-center menu-ho outline-none"
            label="รายการใบคำขอ"
            v-if="$route.path !== '/searchfile' && $route.path !== '/uploadfile'"
          ></Button>
          <Button
            link
            className="text-black bg-red rounded-xl w-full items-center justify-center menu-ho outline-none"
            label="ตั้งค่าเอกสาร"
            v-if="$route.path !== '/searchfile' && $route.path !== '/uploadfile'"
          ></Button>
        </div> */}
      {/* )} */}

      {userData?.type === "StdAcc" && (
        <div className=" space-y-5 fixed gap-2 pl-3 pr-3 pt-9">
          <Button
            link
            className="text-black bg-red rounded-xl w-full flex  menu-ho outline-none"
            label="รายการใบคำขอ"
            v-if="$route.path !== '/searchfile' && $route.path !== '/uploadfile'"
          ></Button>
          <Button
            link
            className="text-black bg-red rounded-xl w-full flex menu-ho outline-none"
            label="ขอเอกสาร"
            v-if="$route.path !== '/searchfile' && $route.path !== '/uploadfile'"
          ></Button>
          <Button
            link
            className="text-black bg-red rounded-xl w-full flex items-center justify-center menu-ho outline-none"
            label="ประวัติการขอ"
            v-if="$route.path !== '/searchfile' && $route.path !== '/uploadfile'"
          ></Button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
