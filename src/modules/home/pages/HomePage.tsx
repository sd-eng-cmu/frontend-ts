import { noop } from "lodash-es";
import { useQuery } from "react-query";
import { useLoadingContext } from "react-router-loading";
import StudentHome from "modules/callback/pages/studentHome";

function HomePage() {
  const loadingContext = useLoadingContext();
  useQuery("home-init", noop, {
    onSettled() {
      loadingContext.done();
    }
  });

  return (
    <div className="flex ml-52 pr-12 pt-7 flex-col  h-full w-full pb-10">
      {/* {store.userData?.type === "MISEmpAcc" ? <StaffHome /> : <StudentHome />} */}
      <StudentHome />
      {/* <StaffHome /> */}
      {/* <button className=" mt-52" onClick={() => handleLogout()}>
        Logout
      </button> */}
    </div>
  );
}

export default HomePage;
