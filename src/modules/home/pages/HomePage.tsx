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

function HomePage() {
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
    <div className="flex ml-64 p-12 flex-col bg-slate-600 h-full w-full">
      {/* {store.userData?.type === "MISEmpAcc" ? <StaffHome /> : <StudentHome />} */}
      <StudentHome />
      {/* <StaffHome /> */}
      <button className=" mt-52" onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  );
}

export default HomePage;
