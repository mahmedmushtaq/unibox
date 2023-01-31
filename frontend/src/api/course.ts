import { ICourseType } from "../global/types/courseTypes";
import axiosClient from "./axiosClient";

export const getAllCourses: () => Promise<{
  items: ICourseType[];
}> = async () => {
  const res = await axiosClient.get("/courses");
  return res.data;
};

export const getCourseBySlug: (slug: string) => Promise<ICourseType> = async (
  slug: string
) => {
  const res = await axiosClient.get(`/course/${slug}`);
  return res.data.item;
};
