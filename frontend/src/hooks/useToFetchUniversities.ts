import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../api/course";
import { getAllUniversities } from "../api/university";

const useToFetchUniversities = () => {
  const query = useQuery({
    queryKey: ["universitiesList"],
    queryFn: getAllUniversities,
  });
  return { query };
};

export default useToFetchUniversities;
