import { IUniversityType } from "../global/types/universityTypes";
import axiosClient from "./axiosClient";

export const getAllUniversities: () => Promise<{
  items: IUniversityType[];
}> = async () => {
  const res = await axiosClient.get("/universities");
  return res.data;
};
