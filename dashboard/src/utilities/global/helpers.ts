import {
  SAVE_PRIVATE_PATH_FOR_REDIRECT,
  queryClient,
  queryClientKeyList,
} from "./constants";
import { TGenericObj } from "./types";

export const getPreviousVisitedPrivatePath = () => {
  const savePrivatePath =
    localStorage.getItem(SAVE_PRIVATE_PATH_FOR_REDIRECT) || "/";
  localStorage.removeItem(SAVE_PRIVATE_PATH_FOR_REDIRECT);

  return savePrivatePath;
};

export const findUndefinedKeyInObj = (obj: TGenericObj) => {
  return Object.keys(obj).find((key) => !obj[key]);
};

export const invalidateAndRefetch = (type: queryClientKeyList) => {
  // Invalidate and refetch
  queryClient.invalidateQueries({
    queryKey: [type],
  });
};
