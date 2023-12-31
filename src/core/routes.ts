import NotFound from "common/components/middleware/NotFound";
import { AuthKey, ClientRouteKey } from "common/constants/keys";
import withAuth from "common/hoc/withAuth";
import OAuthPage from "modules/callback/pages/OAuthPage";
import HomePage from "modules/home/pages/HomePage";
import LoginPage from "modules/login/pages/LoginPage";
import RootPage from "modules/root/pages/RootPage";
import DocPage from "modules/home/pages/DocPage";
import StaffHomePage from "modules/callback/pages/staffHome";

const routes = [
  {
    path: ClientRouteKey.Root,
    component: RootPage
  },
  {
    path: ClientRouteKey.Login,
    component: LoginPage
  },
  {
    path: ClientRouteKey.StaffHome,
    component: withAuth(AuthKey.UserAuth)(StaffHomePage),
    loading: true
  },
  {
    path: ClientRouteKey.Home,
    component: withAuth(AuthKey.UserAuth)(HomePage),
    loading: true
  },
  {
    path: ClientRouteKey.Doc,
    component: withAuth(AuthKey.UserAuth)(DocPage),
    loading: true
  },
  {
    path: ClientRouteKey.OAuth,
    component: OAuthPage,
    loading: true
  },
  {
    path: ClientRouteKey.Wildcard,
    component: NotFound
  }

];

export default routes;
