import { ApiRouteKey } from "common/constants/keys";
import { coreApi } from "core/connections";
import { nil } from "tsdef";

export function getClearCookies(): Promise<nil> {
  return new Promise((resolve, reject) => {
    coreApi
      .get(ApiRouteKey.ClearCookies)
      .then(() => resolve(null))
      .catch(reject);
  });
}
