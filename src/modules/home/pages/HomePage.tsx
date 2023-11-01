import { getLogout } from "common/apis/logout";
import { ClientRouteKey, LocalStorageKey } from "common/constants/keys";
import { StoreContext, writePartialStore } from "common/contexts/StoreContext";
import { noop } from "lodash-es";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useLoadingContext } from "react-router-loading";

function HomePage() {
  const [, setStore] = useContext(StoreContext);
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
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}

export default HomePage;
