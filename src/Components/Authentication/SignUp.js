import { Avatar, Grid, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../Store/Reducers/Snackbar";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "./ValidationSchema";
import { useFormik } from "formik";
import HandleEnter from "../../Utils/FormNavigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Database/Firebase";
import Loader from "../Core/Loaders/Loader";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    cnfPassword: "",
    image: "",
  });
  const dispatch = useDispatch();
  let name, value;
  const setValueOfUser = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const readURL = (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e) => res(e.target?.result);
      reader.onerror = (e) => rej(e);
      reader.readAsDataURL(file);
    });
  };
  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    const url = await readURL(file);
    name = e.target.name;
    setUser({ ...user, [name]: url });
  };

  useEffect(() => {
    document.getElementById("userName").focus();
  }, []);

  const postData = async (e) => {
    const { name, email, mobile, dob, password, cnfPassword, image } = user;
    if (name && email && mobile && dob && password && cnfPassword && image) {
      try {
        setIsLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, { displayName: name });
        const response = await fetch(
          `https://fitnessclub-386ac-default-rtdb.firebaseio.com/fitnessClubDatabase/${userCredential.user.uid}.json`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              mobile,
              dob,
              password,
              image,
            }),
          }
        );
        if (response) {
          setIsLoading(false);
          navigate("/SignIn");
          dispatch(setSnackbar(true, "success", "Registration Successfully"));
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
    initialValues: user,
    validationSchema: signupSchema,
    enableReinitialize: true,
    onSubmit: postData,
  });

  const handleParameter = (e) => {
    handleSubmit(e);
  };
  const handleEnter = (e) => {
    HandleEnter(e);
  };

  const handleNavigationClick = () => {
    navigate("/SignIn");
  };

  return (
    <Grid
      container
      className="signUpContainer"
      sx={{ pt: { md: 0, xs: 13 }, pb: { md: 0, xs: 7 } }}
    >
      {isLoading && <Loader props={isLoading} />}
      <Grid item md={10} xs={11}>
        <Grid container className="box">
          <Grid item md={12} xs={12}>
            <Grid
              component="form"
              id="signUpForm"
              method="POST"
              container
              className="form"
              onSubmit={handleParameter}
              direction="row"
            >
              <Grid item md={12} xs={12} sx={{ marginTop: -6 }}>
                <h2>Sign Up</h2>
              </Grid>
              <Grid container>
                <Grid item md={9} xs={12}>
                  <Grid container columnGap={2}>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      sm={5}
                      marginTop={2}
                      className="inputBox"
                    >
                      <input
                        id="userName"
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.name}
                        name="name"
                        autocomplete="off"
                        type="text"
                        required
                      />
                      <span className="label">Username</span>
                      <i></i>
                      <span className="error">{errors.name}</span>
                    </Grid>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      marginTop={2}
                      className="inputBox"
                    >
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.email}
                        name="email"
                        autocomplete="off"
                        type="text"
                        required
                      />
                      <span className="label">Email</span>
                      <i></i>
                      <span className="error">{errors.email}</span>
                    </Grid>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      className="inputBox"
                      marginTop={2}
                    >
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.mobile}
                        name="mobile"
                        autocomplete="off"
                        type="tel"
                        required
                      />
                      <span className="label">Mobile No.</span>
                      <i></i>
                      <span className="error">{errors.mobile}</span>
                    </Grid>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      className="inputBox"
                      marginTop={2}
                    >
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.dob}
                        name="dob"
                        type="date"
                        required
                      />
                      <span className="label">Date of Birth</span>
                      <i></i>
                      <span className="error">{errors.dob}</span>
                    </Grid>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      className="inputBox"
                      marginTop={2}
                    >
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.password}
                        name="password"
                        type="password"
                        required
                      />
                      <span className="label">Password</span>
                      <i></i>
                      <span className="error">{errors.password}</span>
                    </Grid>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      className="inputBox"
                      marginTop={2}
                    >
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.cnfPassword}
                        name="cnfPassword"
                        type="password"
                        required
                      />
                      <span className="label">Confirm Password</span>
                      <i></i>
                      <span className="error">{errors.cnfPassword}</span>
                    </Grid>
                    <Grid
                      item
                      md={10.2}
                      xs={12}
                      className="links"
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                    >
                      <Link underline="none" onClick={handleNavigationClick}>
                        SignIn
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Grid container>
                    <Grid item md={12} xs={12} className="myImage">
                      <Avatar
                        id="myImage"
                        sx={{
                          zIndex: 12,
                          width: { md: 290, xs: 200 },
                          height: { md: 290, xs: 200 },
                        }}
                        srcSet={user.image}
                      ></Avatar>
                    </Grid>
                    <Grid
                      item
                      md={12}
                      xs={12}
                      className="inputBoxForImage"
                      sx={{ zIndex: 14 }}
                    >
                      <input
                        defaultValue={user.image}
                        name="image"
                        type="file"
                        onChange={(e) => onFileSelected(e)}
                      />
                      <i></i>
                    </Grid>
                    <Grid
                      item
                      md={10}
                      xs={12}
                      className="links"
                      sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                    >
                      <Link underline="none" onClick={handleNavigationClick}>
                        SignIn
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} xs={12}>
                <input
                  id="signUpButton"
                  className="signUpButton"
                  type="submit"
                  value="Signup"
                  onKeyDown={handleEnter}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
