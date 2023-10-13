import { ApiRouteKey } from "common/constants/keys";
import { coreApi } from "core/connections";
import { nil } from "tsdef";

export function getLoginValidationQuery(code: string): Promise<nil> {
  return new Promise((resolve, reject) => {
    coreApi
      .post(ApiRouteKey.OAuth, null, {
        params: new URLSearchParams({ code })
      })
      .then((res) => resolve(res.data))
      .catch(reject);
  });
}
