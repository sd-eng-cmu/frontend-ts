import { noop } from "lodash-es";
import { useQuery } from "react-query";
import { useLoadingContext } from "react-router-loading";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import Checkdoc from "components/checkDoc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Staffhome() {
  const loadingContext = useLoadingContext();
  useQuery("home-init", noop, {
    onSettled() {
      loadingContext.done();
    }
  });
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div className="flex flex-1 ml-24 pr-12 pt-3 flex-col gap-2 pb-10">
      <div className="justify-center w-full h-full">
        {isButtonClicked ? (
          <>
            <div className="flex flex-row">
              <Button  onClick={() => setIsButtonClicked(false)} className="w-fit h-fit ">
                <i
                  className="pi pi-angle-left"
                  style={{ fontSize: "2rem"}}
                ></i>
              </Button>
              <h5 className="pb-3">ตรวจสอบเอกสาร</h5>
            </div>
          </>
        ) : (
          <h5 className="pb-3">รายการใบคำขอ</h5>
        )}
        {!isButtonClicked && (<Button
          onClick={() => setIsButtonClicked(true)}
          className="text-black bg-slate-300 rounded-xl py-2 w-52 flex"
          label="ตรวจสอบ (ทดสอบ)"
          severity="danger"
        />)}
      </div> 
      {isButtonClicked && <Checkdoc />}
      {!isButtonClicked && (
        <DataTable
          scrollable
          scrollHeight="calc(100vh - 200px)"
          tableStyle={{ minWidth: "50rem" }}
          className=""
        >
          <Column
            field="date"
            header="วันที่ทำรายการ"
            sortable
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="stuNo"
            header="รหัสนักศึกษา"
            sortable
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="stuName"
            header="ชื่อ-สกุล"
            style={{ width: "30%" }}
          ></Column>
          <Column
            field="list"
            header="รายการ"
            style={{ width: "30%" }}
          ></Column>
          {/* <Column exportable={false} className="w-full text-center">
          <Button
            icon="pi pi-trash"
            rounded
            className="w-9 h-9"
            severity="danger"
          />
        </Column> */}
        </DataTable>
      )}
    </div>
  );
}

export default Staffhome;
