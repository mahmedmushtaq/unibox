import { ICourseType } from "../global/types/courseTypes";
import axiosClient from "./axiosClient";

export const allCourses: () => Promise<{ items: ICourseType[] }> = async () => {
  const res = await axiosClient.get("/courses");
  return res.data;
};

export const addNewcourse = async (data: ICourseType) => {
  const res = await axiosClient.post("/course", data);
  return res.data;
};

export const deleteCourse = async (id: string) => {
  const res = await axiosClient.delete(`/course/${id}`);
  return res.data;
};
