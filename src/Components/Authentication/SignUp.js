import { Avatar, Grid, Link } from "@mui/material";
import React, { useState } from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../Store/Reducers/Snackbar";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "./ValidationSchema";
import { useFormik } from "formik";
import HandleEnter from "../../Utils/FormNavigation";

const SignUp = () => {
  const navigate = useNavigate();
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
  let img = document.getElementById("myImage");
  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    const url = await readURL(file);
    name = e.target.name;
    // let img = document.getElementById("myImage");
    // if (img) {
    //   img.src = url;
    //   document.querySelector("#myImage").setAttribute("srcSet", url);
    // }
    setUser({ ...user, [name]: url });
  };
  const postData = async (e) => {
    // e.preventDefault();
    const { name, email, mobile, dob, password, cnfPassword, image } = user;
    if (name && email && mobile && dob && password && cnfPassword && image) {
      const response = await fetch(
        "https://fitnessclub-386ac-default-rtdb.firebaseio.com/fitnessClubDatabase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            mobile,
            dob,
            password,
            cnfPassword,
            image,
          }),
        }
      );
      if (response) {
        navigate("/UserProfile", {
          state: { ...user },
        });
        dispatch(setSnackbar(true, "success", "Registration Successfully"));
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

  return (
    <Grid container className="signUpContainer">
      <Grid item md={10}>
        <Grid container className="box">
          <Grid item md={12}>
            <Grid
              component="form"
              id="signUpForm"
              method="POST"
              container
              class="form"
              direction="row"
            >
              <Grid item md={12} sx={{ marginTop: -6 }}>
                <h2>Sign Up</h2>
              </Grid>
              <Grid container>
                <Grid item md={9}>
                  <Grid container>
                    <Grid item md={5} className="inputBox" marginRight={2}>
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.name}
                        name="name"
                        autocomplete="off"
                        type="text"
                        required="required"
                      />
                      <span className="label">Username</span>
                      <i></i>
                      <span className="error">{errors.name}</span>
                    </Grid>
                    <Grid item md={5} className="inputBox">
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.email}
                        name="email"
                        autocomplete="off"
                        type="text"
                        required="required"
                      />
                      <span className="label">Email</span>
                      <i></i>
                      <span className="error">{errors.email}</span>
                    </Grid>
                    <Grid
                      item
                      md={5}
                      className="inputBox"
                      marginRight={2}
                      marginTop={2}
                    >
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.mobile}
                        name="mobile"
                        autocomplete="off"
                        type="text"
                        required="required"
                      />
                      <span className="label">Mobile No.</span>
                      <i></i>
                      <span className="error">{errors.mobile}</span>
                    </Grid>
                    <Grid
                      item
                      md={5}
                      className="inputBox"
                      marginTop={2}
                      paddingRight={2}
                    >
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.dob}
                        name="dob"
                        type="date"
                        required="required"
                      />
                      <span>Date of Birth</span>
                      <i></i>
                      <span className="error">{errors.dob}</span>
                    </Grid>
                    <Grid
                      item
                      md={5}
                      className="inputBox"
                      marginTop={2}
                      marginRight={2}
                    >
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.password}
                        name="password"
                        type="password"
                        required="required"
                      />
                      <span>Password</span>
                      <i></i>
                      <span className="error">{errors.password}</span>
                    </Grid>
                    <Grid item md={5} className="inputBox" marginTop={2}>
                      <input
                        onKeyDown={handleEnter}
                        onChange={setValueOfUser}
                        value={user.cnfPassword}
                        name="cnfPassword"
                        type="password"
                        required="required"
                      />
                      <span>Confirm Password</span>
                      <i></i>
                      <span className="error">{errors.cnfPassword}</span>
                    </Grid>
                    <Grid item md={10} className="links" marginTop="29px">
                      <Link underline="none" color="#8f8f8f" fontSize="0.75em">
                        Forgot Password
                      </Link>
                      <Link underline="none" fontSize="0.75em" href="SignIn">
                        SignIn
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3}>
                  <Grid container>
                    <Grid item md={12}>
                      <Avatar
                        id="myImage"
                        sx={{
                          zIndex: 12,
                          width: 290,
                          height: 290,
                          mt: -4,
                          ml: -9,
                        }}
                        srcSet={user.image}
                      ></Avatar>
                    </Grid>
                    <Grid
                      item
                      md={12}
                      className="inputBoxForImage"
                      sx={{ zIndex: 14, ml: -7 }}
                    >
                      <input
                        defaultValue={user.image}
                        name="image"
                        type="file"
                        onChange={(e) => onFileSelected(e)}
                      />
                      <i></i>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12}>
                <input
                  id="signUpButton"
                  type="submit"
                  value="Signup"
                  onClick={handleParameter}
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
