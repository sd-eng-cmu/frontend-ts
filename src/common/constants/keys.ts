export const enum ClientRouteKey {
  Root = "/",
  Login = "/login",
  Home = "/home",
  OAuth = "/callback",
  Wildcard = "*",
  Doc = "/doc",
  StaffHome = "/staffhome",
  StudentList = "/studentList"
}

export const enum ApiRouteKey {
  OAuth = "/oauth",
  MyData = "/oauth/me",
  SignOut = "/oauth/signout",
  Certificate = "/certs"
}

export const enum LocalStorageKey {
  Auth = "auth"
}

export const enum AuthKey {
  UserAuth = "user-auth"
}
