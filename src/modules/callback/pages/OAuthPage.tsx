import { useMutation } from "react-query";
import { getLoginValidationQuery } from "../apis/queries";
import { StoreContext, writePartialStore } from "common/contexts/StoreContext";
import { useContext, useEffect } from "react";
import { useLoadingContext } from "react-router-loading";
import { Navigate, useNavigate } from "react-router-dom";
import { ClientRouteKey, LocalStorageKey } from "common/constants/keys";
import { getUserDataQuerySelector } from "common/apis/selectors";
import toast from "react-hot-toast";
import AppPageLoader from "common/components/middleware/AppPageLoader";

function OAuthPage() {
  const queryParameters = new URLSearchParams(window.location.search);
  const code = queryParameters.get("code");
  const navigate = useNavigate();
  const loadingContext = useLoadingContext();
  const [, setStore] = useContext(StoreContext);

  const {
    status: statusLoginValidation,
    isLoading: isLoadingLoginValidation,
    mutateAsync: mutateAsyncLoginValidation
  } = useMutation(getLoginValidationQuery, {
    onError() {
      toast.error("รหัสผ่านหรือชื่อผู้ใช้ไม่ถูกต้อง");
    }
  });

  const {
    status: statusUserData,
    isLoading: isLoadingUserData,
    mutateAsync: mutateAsyncUserData
  } = useMutation(getUserDataQuerySelector, {
    onSuccess() {
      toast.success("เข้าสู่ระบบสำเร็จ");
    },
    onError() {
      toast.error("รหัสผ่านหรือชื่อผู้ใช้ไม่ถูกต้อง");
    }
  });

  const isLoading: boolean = isLoadingLoginValidation || isLoadingUserData;
  const isError: boolean =
    statusLoginValidation === "error" || statusUserData === "error";

  useEffect(() => {
    async function callbackHandler() {
      if (!code) {
        console.error("Callback 'code' missing");
        loadingContext.done();
        setTimeout(() => navigate(ClientRouteKey.Login), 1);
      } else {
        const res = (await mutateAsyncLoginValidation(code)) as unknown as {
          payload: string;
        };

        
        const data = await mutateAsyncUserData();
        
        
        localStorage.setItem(LocalStorageKey.Auth, res.payload);
        setStore(writePartialStore({ userData: data.userData }));
        
        loadingContext.done();
        navigate(ClientRouteKey.Home);
      }
    }

    callbackHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isError && <Navigate to={ClientRouteKey.Login} replace />}
      <AppPageLoader isLoading={isLoading} />
    </>
  );
}

export default OAuthPage;
