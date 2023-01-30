import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClientKeyList } from "../../utilities/global/constants";
import { deleteCategory, getCategories } from "../../utilities/api/categoryApi";
import { invalidateAndRefetch } from "../../utilities/global/helpers";
const useToManuplateCategory = () => {
  const query = useQuery({
    queryKey: [queryClientKeyList.categories],
    queryFn: getCategories,
  });

  const { mutate, isLoading, error } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      invalidateAndRefetch(queryClientKeyList.categories);
    },
  });

  const onClickDeleteBtn = async (id: string) => {
    await mutate(id);
  };

  return { query, onClickDeleteBtn, isLoading, error };
};

export default useToManuplateCategory;
