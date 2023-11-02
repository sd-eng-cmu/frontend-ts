export const enum ClientRouteKey {
  Root = "/",
  Login = "/login",
  Home = "/home",
  OAuth = "/callback",
  Wildcard = "*",
  StreamPDF = "/streampdf"
}

export const enum ApiRouteKey {
  OAuth = "/oauth",
  MyData = "/user/me",
  SignOut = "/user/signout"
}

export const enum LocalStorageKey {
  Auth = "auth"
}

export const enum AuthKey {
  UserAuth = "user-auth"
}
