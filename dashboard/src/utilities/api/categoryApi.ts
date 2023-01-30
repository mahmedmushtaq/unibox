import { ICategoryType, ISubCategoryType } from "../global/types/categoryType";
import axiosClient from "./axiosClient";

export const addCategory = async (data: ICategoryType) => {
  const res = await axiosClient.post("/category", data);
  return res.data;
};

export const getCategories: () => Promise<{
  items: ICategoryType[];
}> = async () => {
  const res = await axiosClient.get("/categories");
  return res.data;
};

export const deleteCategory = async (id: string) => {
  const res = await axiosClient.delete(`/category/${id}`);
  return res.data;
};

export const addSubCategory = async (data: ISubCategoryType) => {
  const res = await axiosClient.post("/subcategory", data);
  return res.data;
};
