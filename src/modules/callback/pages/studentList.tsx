import { noop } from "lodash-es";
import { useQuery } from "react-query";
import { useLoadingContext } from "react-router-loading";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

function StudentList() {
  const loadingContext = useLoadingContext();
  useQuery("home-init", noop, {
    onSettled() {
      loadingContext.done();
    }
  });
  return (
    <div className="flex flex-1 ml-72 pr-12 pt-7 flex-col gap-2 pb-10">
      <div className="justify-center w-full h-full">
        <h5 className="pb-3">รายการใบคำขอ</h5>
      </div>

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
          style={{ width: "30%" }}
        ></Column>
        <Column field="list" header="รายการ" style={{ width: "50%" }}></Column>
        <Column field="status" header="สถานะ" style={{ width: "30%" }}></Column>
      </DataTable>
    </div>
  );
}

export default StudentList;
