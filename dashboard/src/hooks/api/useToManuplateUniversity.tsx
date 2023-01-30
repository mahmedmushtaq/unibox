import { useQuery, useMutation } from "@tanstack/react-query";
import {
  queryClient,
  queryClientKeyList,
} from "../../utilities/global/constants";
import { invalidateAndRefetch } from "../../utilities/global/helpers";
import {
  deleteUniversity,
  getUniversitiesList,
} from "../../utilities/api/universityApi";

const useToManuplateUniversity = () => {
  const query = useQuery({
    queryKey: [queryClientKeyList.universities],
    queryFn: getUniversitiesList,
  });

  const { mutate, isLoading, error } = useMutation({
    mutationFn: deleteUniversity,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [queryClientKeyList.universities],
      });
    },
  });

  const onClickDeleteBtn = async (id: string) => {
    await mutate(id);
  };

  return { query, onClickDeleteBtn, isLoading, error };
};

export default useToManuplateUniversity;
