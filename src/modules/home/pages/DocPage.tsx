import { getLogout } from "common/apis/logout";
import { ClientRouteKey, LocalStorageKey } from "common/constants/keys";
import { StoreContext, writePartialStore } from "common/contexts/StoreContext";
import { noop } from "lodash-es";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useLoadingContext } from "react-router-loading";
import StudentHome from "modules/callback/pages/studentHome";
import StaffHome from "modules/callback/pages/staffHome";

function DocPage() {
  const [store, setStore] = useContext(StoreContext);
  const navigate = useNavigate();
  const loadingContext = useLoadingContext();
  useQuery("home-init", noop, {
    onSettled() {
      loadingContext.done();
    }
  });
  async function handleLogout() {
    await getLogout();
    setStore(writePartialStore({ userData: null }));
    localStorage.removeItem(LocalStorageKey.Auth);
    navigate(ClientRouteKey.Login);
  }
  return (
    <div>
      {store.userData?.type === "MISEmpAcc" ? <StaffHome /> : <StudentHome />}
      <h4 style={{ marginTop: "40px"}}>
        แก้ไขข้อมูลในเอกสาร
        <span style={{ color: "red" }}>*</span>
      </h4>
      <button className=" mt-52" onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  );
}

export default DocPage;