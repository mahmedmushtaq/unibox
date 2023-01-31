import {
  Box,
  Unstable_Grid2 as Grid,
  TextField,
  TextareaAutosize,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Stack,
  Chip,
  Alert,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClientKeyList } from "../../utilities/global/constants";
import { getUniversitiesList } from "../../utilities/api/universityApi";
import { ICourseType } from "../../utilities/global/types/courseTypes";
import { useNavigate } from "react-router-dom";
import { addNewcourse } from "../../utilities/api/courseApi";
import { invalidateAndRefetch } from "../../utilities/global/helpers";
import LoadingButton from "../../components/shared/LoadingButton";

const AddCourse = () => {
  const [formState, setFormState] = useState<ICourseType>({
    name: "",
    description: "",
    websiteLink: "",
    universityId: "",
    startDate: "",
    location: "",
    discipline: "",
    degreeType: "",
    fee: "",
    duration: "",
  });

  const universityQuery = useQuery({
    queryKey: [queryClientKeyList.universities],
    queryFn: getUniversitiesList,
  });

  const navigate = useNavigate();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: addNewcourse,
    onSuccess: () => {
      invalidateAndRefetch(queryClientKeyList.courses);
      navigate("/course");
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("submit ", formState);
    await mutate(formState);
  };

  return (
    <DashboardLayout childrenCardBg heading="Add Course">
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
              label="Start Date"
              variant="outlined"
              name="startDate"
              value={formState.startDate}
              onChange={onChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Website Link"
              variant="outlined"
              name="websiteLink"
              value={formState.websiteLink}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select University
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select University"
                name="universityId"
                onChange={onChangeSelect}
              >
                {universityQuery.data?.items.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="location"
              variant="outlined"
              name="location"
              value={formState.location}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Degree type"
              variant="outlined"
              placeholder="MS/BS/PHD"
              name="degreeType"
              value={formState.degreeType}
              onChange={onChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Discipline"
              variant="outlined"
              placeholder="Law / IT / Arts and forestory"
              name="discipline"
              value={formState.discipline}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Fee"
              variant="outlined"
              name="fee"
              value={formState.fee}
              onChange={onChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Duration"
              variant="outlined"
              name="duration"
              value={formState.duration}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} md={6} />
        </Grid>

        <TextareaAutosize
          style={{
            width: "100%",
            borderRadius: 10,
            padding: 10,
            marginTop: 32,
          }}
          minRows={4}
          name="description"
          value={formState.description}
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
          id="outlined-basic"
          placeholder="Detailed description"
        />
        <LoadingButton
          loading={isLoading}
          text="Submit"
          onClick={handleSubmit}
        />

        {!!error && <Alert severity="error">{String(error)}</Alert>}
      </Box>
    </DashboardLayout>
  );
};

export default AddCourse;
