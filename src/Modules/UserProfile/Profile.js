import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import { profileSchema } from "../../Components/Authentication/ValidationSchema";
import { setSnackbar } from "../../Store/Reducers/Snackbar";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Core/Loaders/Loader";
import { auth } from "../../Components/Database/Firebase";

const Profile = (props) => {
  const storedData = sessionStorage.getItem("userData");
  const data = JSON.parse(storedData);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(data);
  const readURL = (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e) => res(e.target?.result);
      reader.onerror = (e) => rej(e);
      reader.readAsDataURL(file);
    });
  };
  let imageUrl = "";
  let fieldName, value;

  const handleChange = (event) => {
    fieldName = event.target.name;
    value = event.target.value;
    setFormData((prevData) => {
      return { ...prevData, [fieldName]: value };
    });
  };
  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    imageUrl = await readURL(file);
    fieldName = e.target.name;
    setFormData({ ...formData, [fieldName]: imageUrl });
  };

  const updateData = async (e) => {
    const { name, email, mobile, dob, weight, height, image } = formData;
    if (name && email && mobile && dob && image) {
      try {
        setIsLoading(true);
        const currentUser = auth.currentUser;
        const response = await fetch(
          `https://fitnessclub-386ac-default-rtdb.firebaseio.com/fitnessClubDatabase/${currentUser.uid}.json`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              mobile,
              dob,
              weight,
              height,
              image,
            }),
          }
        );
        if (response) {
          const data = await response.json();
          sessionStorage.setItem("userData", JSON.stringify(data));
          setIsLoading(false);
          dispatch(setSnackbar(true, "success", "Update Successfully"));
        }
      } catch (error) {
        setIsLoading(false);
        dispatch(setSnackbar(true, "error", error.message));
      }
    } else {
      dispatch(setSnackbar(true, "error", "Please fill all details"));
    }
  };

  const { handleSubmit, errors } = useFormik({
    initialValues: formData,
    validationSchema: profileSchema,
    enableReinitialize: true,
    onSubmit: updateData,
  });

  const handleParameter = (e) => {
    handleSubmit(e);
  };

  return (
    <Fragment>
      <Grid
        component="form"
        container
        columnSpacing={3}
        padding={10}
        rowSpacing={2}
        method="POST"
      >
        {isLoading && <Loader />}
        <Grid item md={5} xs={12} sm={12} marginTop="auto" marginBottom="auto">
          <Avatar
            sx={{
              width: { md: 400, xs: 200 },
              height: { md: 400, xs: 200 },
              fontSize: "300px",
              m: { xs: "auto" },
            }}
            alt={props.name}
            srcSet={formData.image}
          ></Avatar>
          <TextField
            type="file"
            onChange={(e) => onFileSelected(e)}
            variant="filled"
            name="image"
            fullWidth
            sx={{ pt: { md: 2 } }}
          />
        </Grid>
        <Grid item md={7} xs={12} sm={12} marginTop={4}>
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>Name</Typography>
          <TextField
            // label="Name"
            variant="filled"
            helperText={errors.name}
            error={errors.name ? true : false}
            onChange={handleChange}
            fullWidth
            name="name"
            value={formData.name}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>E-Mail</Typography>
          <TextField
            // label="Email"
            type="email"
            variant="filled"
            onChange={handleChange}
            fullWidth
            disabled
            name="email"
            value={formData.email}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>
            Date of Birth
          </Typography>
          <TextField
            type="date"
            variant="filled"
            helperText={errors.dob}
            error={errors.dob ? true : false}
            onChange={handleChange}
            fullWidth
            name="dob"
            value={formData.dob}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>Mobile no.</Typography>
          <TextField
            type="number"
            // label="Mobile no."
            variant="filled"
            onChange={handleChange}
            fullWidth
            name="mobile"
            helperText={errors.mobile}
            error={errors.mobile ? true : false}
            value={formData.mobile}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>Weight</Typography>
          <TextField
            // label="Weight"
            variant="filled"
            onChange={handleChange}
            fullWidth
            name="weight"
            value={formData.weight}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>Height</Typography>
          <TextField
            // label="Name"
            variant="filled"
            onChange={handleChange}
            fullWidth
            name="height"
            value={formData.height}
            sx={{ paddingBottom: 2 }}
          />
          <Button variant="contained" onClick={handleParameter}>
            Update
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Profile;
