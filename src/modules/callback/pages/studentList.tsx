import { useQuery } from "react-query";
import { useLoadingContext } from "react-router-loading";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { getStudentCertificates } from "../apis/queries";
import { useContext, useState } from "react";
import { StoreContext } from "common/contexts/StoreContext";
import { CertificateDto, TValidate } from "types/certificate";

function StudentList() {
  const loadingContext = useLoadingContext();
  const [store] = useContext(StoreContext);
  const [certs, setCerts] = useState<CertificateDto[]>([]);
  useQuery(
    "home-init",
    () => getStudentCertificates(parseInt(store.userData?.student_id ?? "0")),
    {
      onSuccess(data) {
        if (data) {
          setCerts(data.result);
        }
      },
      onSettled() {
        loadingContext.done();
      }
    }
  );

  const statusConvText = (status: TValidate) => {
    switch (status) {
      case "Accept":
        return "เอกสารตรวจสอบเรียบร้อย";
      case "Unaccept":
        return "เอกสารไม่ผ่านการตรวจสอบ";
      case "Waiting":
        return "อยู่ระหว่างพิจารณา";
      case "Exported":
        return "มารับเอกสารได้";
    }
  };

  const preparedDatas = certs.map((c) => {
    return {
      ...c,
      type:
        c.type === "Student"
          ? "หนังสือรับรองการเป็นนักศึกษา"
          : "หนังสือรับรองความประพฤติ",
      statusTxt: statusConvText(c.status)
    };
  });

  return (
    <div className="flex flex-1 ml-72 pr-12 pt-7 flex-col gap-2 pb-10">
      <div className="justify-center w-full h-full">
        <h5 className="pb-3">รายการใบคำขอ</h5>
      </div>

      <DataTable
        value={preparedDatas}
        scrollable
        scrollHeight="calc(100vh - 200px)"
        tableStyle={{ minWidth: "50rem" }}
        className=""
      >
        <Column
          field="created_at"
          header="วันที่ทำรายการ"
          sortable
          style={{ width: "30%" }}
        ></Column>
        <Column field="type" header="รายการ" style={{ width: "50%" }}></Column>
        <Column
          field="statusTxt"
          header="สถานะ"
          style={{ width: "30%" }}
        ></Column>
      </DataTable>
    </div>
  );
}

export default StudentList;
