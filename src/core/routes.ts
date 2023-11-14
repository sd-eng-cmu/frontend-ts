import NotFound from "common/components/middleware/NotFound";
import { AuthKey, ClientRouteKey } from "common/constants/keys";
import withAuth from "common/hoc/withAuth";
import OAuthPage from "modules/callback/pages/OAuthPage";
import HomePage from "modules/home/pages/HomePage";
import LoginPage from "modules/login/pages/LoginPage";
import RootPage from "modules/root/pages/RootPage";
import StreamPage from "modules/genpdf/pages/StreamPage";
import FormPage from "modules/form/pages/formPage";

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
    path: ClientRouteKey.Home,
    component: withAuth(AuthKey.UserAuth)(HomePage),
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
  },
  {
    path: ClientRouteKey.StreamPDF,
    component: StreamPage,
    loading: true
  },
  {
    path: ClientRouteKey.FormPage,
    component: FormPage,
    loading: true
  }
];

export default routes;
