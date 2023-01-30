import { ChangeEvent, useState } from "react";
import {
  Box,
  Unstable_Grid2 as Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import { useQuery, useMutation } from "@tanstack/react-query";
import DashboardLayout from "../../Layouts/DashboardLayout";
import {
  addCategory,
  addSubCategory,
  getCategories,
} from "../../utilities/api/categoryApi";
import {
  queryClient,
  queryClientKeyList,
} from "../../utilities/global/constants";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../components/shared/LoadingButton";
import { ICategoryType } from "../../utilities/global/types/categoryType";
import { invalidateAndRefetch } from "../../utilities/global/helpers";

const AddCategory = () => {
  const [formState, setFormState] = useState({
    name: "",
    iconLink: undefined,
    parentCategoryId: "",
  });
  const [isSubcategory, setIsSubcategory] = useState(false);
  const navigate = useNavigate();
  const {
    mutate,
    isLoading: categoryLoading,
    error,
  } = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      invalidateAndRefetch(queryClientKeyList.categories);
      navigate("/category");
    },
  });

  const {
    mutate: mutateSubcategory,
    isLoading: isSubcategoryLoading,
    error: subcategoryError,
  } = useMutation({
    mutationFn: addSubCategory,
    onSuccess: () => {
      invalidateAndRefetch(queryClientKeyList.categories);
      navigate("/category");
    },
  });

  const query = useQuery({
    queryKey: [queryClientKeyList.categories],
    queryFn: getCategories,
  });

  const handleNewCategory = async () => {
    if (!isSubcategory)
      return await mutate({
        name: formState.name,
        iconLink: formState.iconLink,
      });

    await mutateSubcategory({
      name: formState.name,
      iconLink: formState.iconLink,
      parentCategoryId: formState.parentCategoryId,
    });
  };

  const isLoading = categoryLoading || isSubcategoryLoading;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <DashboardLayout
      childrenCardBg
      heading={!isSubcategory ? "Add Category" : "Add SubCategory"}
    >
      <Box py={3} px={1}>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              name="name"
              value={formState.name}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Hosted Icon Link (optional)"
              variant="outlined"
              name="iconLink"
              value={formState.iconLink}
              onChange={onChange}
            />
          </Grid>
        </Grid>

        <FormGroup sx={{ my: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSubcategory}
                onChange={(e) => setIsSubcategory(e.target.checked)}
              />
            }
            label="Is it a sub category?"
          />
        </FormGroup>

        {isSubcategory && (
          <Grid container spacing={5}>
            <Grid md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Parent Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  name="parentCategoryId"
                  value={formState.parentCategoryId}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      parentCategoryId: e.target.value,
                    })
                  }
                >
                  {query.data?.items.map((item) => (
                    <MenuItem id={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}

        <LoadingButton
          sx={{ my: 2 }}
          loading={isLoading}
          onClick={handleNewCategory}
        >
          submit
        </LoadingButton>
        {(!!error || !!subcategoryError) && (
          <Alert severity="error">
            {!!error ? String(error) : String(subcategoryError)}
          </Alert>
        )}
      </Box>
    </DashboardLayout>
  );
};

export default AddCategory;
