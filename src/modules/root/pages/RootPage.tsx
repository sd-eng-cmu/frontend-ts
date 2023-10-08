import { ClientRouteKey } from "common/constants/keys";
import { Navigate } from "react-router-dom";

function RootPage() {
  return <Navigate to={ClientRouteKey.Login} replace={true} />;
}

export default RootPage;
