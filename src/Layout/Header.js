import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, alpha, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { signOut } from "firebase/auth";
import { auth } from "../Components/Database/Firebase";
import { setSnackbar } from "../Store/Reducers/Snackbar";
import { useDispatch } from "react-redux";
let pages = ["HOME", "PRODUCTS", "EXCERCISES", "SIGNUP", "SIGNIN"];
const excercises = [
  "Leg",
  "Biceps",
  "Tricep",
  "Shoulder",
  "Back",
  "Chest",
  "ABS",
];
let settings = ["SignUp", "SignIn"];

const Header = (props) => {
  const storedUserData = sessionStorage.getItem("userData");
  const data = JSON.parse(storedUserData);
  if (storedUserData) {
    pages = ["HOME", "PRODUCTS", "EXCERCISES", "SIGNOUT"];
    settings = ["Profile", "SignOut"];
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    switch (event.currentTarget.innerText) {
      case "Leg":
        navigate("Excercises?E=Leg");
        setAnchorEl(null);
        break;
      case "Biceps":
        navigate("Excercises?E=Biceps");
        setAnchorEl(null);
        break;
      case "Tricep":
        navigate("Excercises?E=Tricep");
        setAnchorEl(null);
        break;
      case "Shoulder":
        navigate("Excercises?E=Shoulder");
        setAnchorEl(null);
        break;
      case "Back":
        navigate("Excercises?E=Back");
        setAnchorEl(null);
        break;
      case "Chest":
        navigate("Excercises?E=Chest");
        setAnchorEl(null);
        break;
      case "ABS":
        navigate("Excercises?E=ABS");
        setAnchorEl(null);
        break;
      default:
        setAnchorEl(null);
        break;
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const signOutUser = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem("userData");
      pages = ["HOME", "PRODUCTS", "EXCERCISES", "SIGNUP", "SIGNIN"];
      settings = ["SignUp", "SignIn"];
      navigate("/");
    } catch (error) {
      dispatch(setSnackbar(true, "error", { error }));
    }
  };

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "12ch",
        },
      },
    },
  }));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event, text) => {
    switch (text) {
      case "HOME":
        navigate("/");
        break;
      case "PRODUCTS":
        navigate("AllProducts");
        break;
      case "EXCERCISES":
        if (storedUserData) {
          setAnchorEl(event.currentTarget);
        } else {
          dispatch(
            setSnackbar(true, "info", "You are not Logged In. First LogIn!!!")
          );
          navigate("/SignIn");
        }
        break;
      case "SIGNUP":
        navigate("SignUp");
        break;
      case "SIGNIN":
        navigate("SignIn");
        break;
      case "SIGNOUT":
        signOutUser();
        break;
      default:
        break;
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (text) => {
    switch (text) {
      case "Profile":
        navigate(`UserProfile`, {
          state: { ...props },
        });
        break;
      case "SignUp":
        navigate("SignUp");
        break;
      case "SignIn":
        navigate("SignIn");
        break;
      case "SignOut":
        signOutUser();
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon
            sx={{ display: { xs: "none", sm: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", sm: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "default",
            }}
          >
            FiTnEsScLuB
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={(e) => {
                    handleCloseNavMenu(e, e.currentTarget.innerText);
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {excercises.map((value) => (
                <MenuItem dense onClick={handleClick} key={value}>
                  {value}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FitnessCenterIcon
            sx={{ display: { xs: "flex", sm: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FiTnEsScLuB
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                key={page}
                onClick={(e) => {
                  handleCloseNavMenu(e, e.currentTarget.innerText);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Search
            sx={{
              marginRight: { md: "3em", sm: 3 },
              display: { xs: "none", sm: "flex" },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: { md: "14rem" } }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  // sx={{ backgroundImage: `url(${Banner})` }}
                  srcSet={data ? data.image : ""}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={(e) => {
                    handleCloseUserMenu(e.currentTarget.innerText);
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
