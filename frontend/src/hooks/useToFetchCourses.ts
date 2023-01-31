import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../api/course";

const useToFetchCourses = () => {
  const query = useQuery({ queryKey: ["coursesList"], queryFn: getAllCourses });
  return { query };
};

export default useToFetchCourses;
