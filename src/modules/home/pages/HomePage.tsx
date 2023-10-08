import { getClearCookies } from "common/apis/cookies";
import { ClientRouteKey } from "common/constants/keys";
import { StoreContext, writePartialStore } from "common/contexts/StoreContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLoadingContext } from "react-router-loading";

function HomePage() {
  const [, setStore] = useContext(StoreContext);
  const navigate = useNavigate();
  const loadingContext = useLoadingContext();
  loadingContext.done();
  async function handleLogout() {
    await getClearCookies();
    setStore(writePartialStore({ userData: null }));

    navigate(ClientRouteKey.Login);
  }
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}

export default HomePage;
