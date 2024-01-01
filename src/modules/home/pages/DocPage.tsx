import { StoreContext } from "common/contexts/StoreContext";
import { noop } from "lodash-es";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useLoadingContext } from "react-router-loading";
import StudentHome from "modules/callback/pages/studentHome";
import StaffHome from "modules/callback/pages/staffHome";

function DocPage() {
  const [store] = useContext(StoreContext);
  const loadingContext = useLoadingContext();
  useQuery("home-init", noop, {
    onSettled() {
      loadingContext.done();
    }
  });
  return (
    <div>
      {store.userData?.type === "MISEmpAcc" ? <StaffHome /> : <StudentHome />}
      {/* I really can't split the page, I want to split the Doc Select and Doc Edit from each other*/}

      {/* DocEdit */}
      <h4 style={{ marginTop: "40px" }}>
        แก้ไขข้อมูลในเอกสาร
        <span style={{ color: "red" }}>*</span>
      </h4>
      {/* Upload */}
      <h4 style={{ marginTop: "40px" }}>
        แนบหลักฐานประกอบการขอเอกสาร
        <span style={{ color: "red" }}>*</span>
      </h4>
      {/* FilesUpload */}
      <h3>
        <span className="text-wrapper">แนบเอกสาร </span>
        <span style={{ color: "#6B6B6B" }} className="span">
          (ไฟล์ .pdf แต่ละไฟล์ขนาดไม่เกิน 10MB)
        </span>
      </h3>
      <h3>
        <span className="text-wrapper"> 1. สำเนาบัตรประชาชน </span> <br></br>
        <span className="text-wrapper"> 2. สำเนาทะเบียนบ้าน </span>
      </h3>
      {/* ImgUpload */}
      <h3>
        <span className="text-wrapper">แนบรูปถ่าย </span>
        <span style={{ color: "#6B6B6B" }} className="span">
          (ไฟล์ .png, .jpg สัดส่วน 3:4 และขนาดไม่เกิน 5MB)
        </span>
      </h3>
    </div>
  );
}

export default DocPage;
