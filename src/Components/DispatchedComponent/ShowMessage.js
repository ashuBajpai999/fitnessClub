import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../../Store/Reducers/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ShowMessage = () => {
  const dispatch = useDispatch();
  const { snackbarOpen, snackbarType, snackbarTime, snackbarMessage } =
    useSelector((state) => state.snackbar);
  const handleClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   return;
    // }
    dispatch(setSnackbar(false, snackbarType, snackbarMessage));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={snackbarOpen}
      autoHideDuration={snackbarTime}
      onClose={handleClose}
      sx={{ whiteSpace: "pre-wrap" }}
    >
      <Alert
        onClose={handleClose}
        severity={snackbarType}
        sx={
          snackbarType === "success"
            ? {
                width: "100%",

                //   backgroundColor: "#ebccd1 !important",
                //  color: " #a94442 !important",

                boxShadow: "none !important",
                marginTop: "40px !important",
              }
            : {
                width: "100%",

                backgroundColor: "#ebccd1 !important",
                color: " #a94442 !important",

                boxShadow: "none !important",
                marginTop: "40px !important",
              }
        }
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default ShowMessage;
