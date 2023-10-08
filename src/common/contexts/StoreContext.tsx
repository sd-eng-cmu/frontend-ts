import { noop, pickBy } from "lodash-es";
import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Nullable } from "tsdef";
import { User } from "types/user";

type GlboalStore = {
  userData: Nullable<User>;
};

export const INITIAL_STATE: Readonly<GlboalStore> = {
  userData: null
};

export const StoreContext = createContext<
  [get: Readonly<GlboalStore>, set: Dispatch<SetStateAction<GlboalStore>>]
>([INITIAL_STATE, noop]);

export function writePartialStore(data: Partial<typeof INITIAL_STATE>) {
  const tmp = pickBy(data, (d) => typeof d !== "undefined");

  return (prev: typeof INITIAL_STATE) => ({
    ...prev,
    ...tmp
  });
}
