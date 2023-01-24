import { SAVE_PRIVATE_PATH_FOR_REDIRECT } from "./constants";

export const getPreviousVisitedPrivatePath = () => {
  const savePrivatePath =
    localStorage.getItem(SAVE_PRIVATE_PATH_FOR_REDIRECT) || "/";
  localStorage.removeItem(SAVE_PRIVATE_PATH_FOR_REDIRECT);
  return savePrivatePath; // === "/" ? "/dashboard" : savePrivatePath;
};
