import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClientKeyList } from "../../utilities/global/constants";
import { invalidateAndRefetch } from "../../utilities/global/helpers";
import { allCourses, deleteCourse } from "../../utilities/api/courseApi";
const useToManuplateCourse = () => {
  const query = useQuery({
    queryKey: [queryClientKeyList.categories],
    queryFn: allCourses,
  });

  const { mutate, isLoading, error } = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      invalidateAndRefetch(queryClientKeyList.categories);
    },
  });

  const onDelete = async (id: string) => {
    await mutate(id);
  };
  return { query, onDelete, isLoading, error };
};

export default useToManuplateCourse;
