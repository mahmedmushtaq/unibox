import { ChangeEvent, useState } from "react";
import {
  Box,
  Unstable_Grid2 as Grid,
  TextField,
  TextareaAutosize,
  Alert,
} from "@mui/material";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { useMutation } from "@tanstack/react-query";
import {
  queryClient,
  queryClientKeyList,
} from "../../utilities/global/constants";

import { addUniversity } from "../../utilities/api/universityApi";
import { findUndefinedKeyInObj } from "../../utilities/global/helpers";
import LoadingButton from "../../components/shared/LoadingButton";
import { useNavigate } from "react-router-dom";
import { IUniversityType } from "../../utilities/global/types/universityTypes";

const AddUniversity = () => {
  const [formState, setFormState] = useState<IUniversityType>({
    name: "",
    location: "",
    ranking: 0,
    rating: 0,
    websiteLink: "",
    iconLink: "",
    description: "",
  });

  const [err, setErr] = useState("");
  const navigate = useNavigate();

  // Mutations
  const { mutate, isLoading, error } = useMutation({
    mutationFn: addUniversity,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [queryClientKeyList.universities],
      });
      navigate("/university");
    },
  });

  const submitRecord = async () => {
    if (!!findUndefinedKeyInObj(formState)) {
      return setErr("All fields are required");
    }
    setErr("");
    await mutate(formState);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const requestError = String(err);

  return (
    <DashboardLayout childrenCardBg heading="Add University">
      <Box py={3} px={1}>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              value={formState.name}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Location"
              variant="outlined"
              name="location"
              value={formState.location}
              onChange={onChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Ranking"
              type="number"
              variant="outlined"
              name="ranking"
              value={formState.ranking}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Rating"
              type="number"
              variant="outlined"
              name="rating"
              value={formState.rating}
              onChange={onChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Original Website Link"
              variant="outlined"
              name="websiteLink"
              value={formState.websiteLink}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Hosted Icon Link"
              variant="outlined"
              name="iconLink"
              value={formState.iconLink}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <TextareaAutosize
          style={{
            width: "100%",
            borderRadius: 10,
            padding: 10,
            marginTop: 32,
          }}
          name="description"
          value={formState.description}
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
          minRows={4}
          id="outlined-basic"
          placeholder="Detailed description"
        />
        <LoadingButton loading={isLoading} onClick={submitRecord}>
          Submit
        </LoadingButton>
        {(err || !!requestError) && (
          <Alert severity="error" sx={{ mt: 1 }}>
            {err || requestError}
          </Alert>
        )}
      </Box>
    </DashboardLayout>
  );
};

export default AddUniversity;
