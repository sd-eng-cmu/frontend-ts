import { getClearCookies } from "common/apis/cookies";
import { getUserDataQuerySelector } from "common/apis/selectors";

export async function validateLocalToken() {
  try {
    const data = await getUserDataQuerySelector();
    return data;
  } catch (err) {
    await getClearCookies();
  }

  return null;
}
