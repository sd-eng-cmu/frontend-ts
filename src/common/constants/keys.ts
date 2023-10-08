export const enum ClientRouteKey {
  Root = "/",
  Login = "/login",
  Home = "/home",
  OAuth = "/callback",
  Wildcard = "*"
}

export const enum ApiRouteKey {
  OAuth = "/cmuOAuth",
  MyData = "/user/me",
  ClearCookies = "/cookie/clear"
}

export const enum LocalStorageKey {
  Auth = "auth"
}

export const enum AuthKey {
  UserAuth = "user-auth"
}
