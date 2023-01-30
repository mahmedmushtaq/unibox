import { IUniversityType } from "../global/types/universityTypes";
import axiosClient from "./axiosClient";
 

export const addUniversity = async (body: IUniversityType) => {
  const res = await axiosClient.post("/university", body);
  return res.data;
};

export const getUniversitiesList: () => Promise<{
  items: IUniversityType[];
}> = async () => {
  const res = await axiosClient.get("/universities");
  return res.data;
};

export const deleteUniversity = async (id: string) => {
  const res = await axiosClient.delete(`/university/${id}`);
  return res.data;
};
