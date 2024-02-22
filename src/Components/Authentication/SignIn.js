import { Grid, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../Store/Reducers/Snackbar";
import "../../App.css";
import HandleEnter from "../../Utils/FormNavigation";
import { signInSchema } from "./ValidationSchema";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Database/Firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../Core/Loaders/Loader";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  let name, value;
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });

  const setValueOfUser = (event) => {
    name = event.target.name;
    value = event.target.value;
    setSignInUser({ ...signInUser, [name]: value });
  };

  useEffect(() => {
    document.getElementById("userEmail").focus();
  }, []);

  const handleClick = async () => {
    try {
      const { email, password } = signInUser;
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const response = await fetch(
        `https://fitnessclub-386ac-default-rtdb.firebaseio.com/fitnessClubDatabase/${userCredential.user.uid}.json`
      );

      if (response.ok) {
        const data = await response.json();
        const { dob, email, name, mobile, image, height, weight } = data;
        const obj = { dob, email, name, mobile, image, height, weight };
        sessionStorage.setItem("userData", JSON.stringify(obj));
        setIsLoading(false);
        navigate("/UserProfile");

        dispatch(setSnackbar(true, "success", "Sign In Successfully "));
      } else {
        dispatch(
          setSnackbar(true, "error", "Failed to fetch data from the server")
        );
      }
    } catch (error) {
      setIsLoading(false);
      dispatch(setSnackbar(true, "error", { error }));
    }
  };

  const { handleSubmit, errors } = useFormik({
    initialValues: signInUser,
    validationSchema: signInSchema,
    enableReinitialize: true,
    onSubmit: handleClick,
  });

  const handleParameter = (e) => {
    handleSubmit(e);
  };
  const handleEnter = (e) => {
    HandleEnter(e);
  };

  return (
    <Grid container className="signInContainer">
      {isLoading && <Loader />}
      <Grid item md={3}>
        <Grid container class="signInBox">
          <Grid item md={12}>
            <Grid
              container
              component="form"
              class="signInForm"
              method="POST"
              onSubmit={handleParameter}
            >
              <Grid item md={12}>
                <h2>Sign In</h2>
              </Grid>
              <Grid item md={12} className="signInInputBox" marginTop={2}>
                <input
                  id="userEmail"
                  type="text"
                  name="email"
                  onKeyDown={handleEnter}
                  onChange={setValueOfUser}
                  value={signInUser.email}
                  autoComplete="off"
                  required="required"
                />
                <span className="label">Email</span>
                <i></i>
                <span className="error">{errors.email}</span>
              </Grid>
              <Grid item md={12} className="signInInputBox" marginTop={2}>
                <input
                  type="password"
                  name="password"
                  onKeyDown={handleEnter}
                  onChange={setValueOfUser}
                  value={signInUser.password}
                  required="required"
                />
                <span className="label">Password</span>
                <i></i>
                <span className="error">{errors.password}</span>
              </Grid>
              <Grid item md={12} className="signInLinks">
                <Link underline="none" color="#8f8f8f" fontSize="0.75em">
                  Forgot Password
                </Link>
                <Link underline="none" fontSize="0.75em" href="SignUp">
                  SignUp
                </Link>
              </Grid>
              <Grid item md={12}>
                <input type="submit" value="Login" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
