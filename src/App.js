import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import ProductCard from "./Components/Core/Card/ProductCard";
import VideoCard from "./Components/Core/Card/VideoCard";
import MainDashboard from "./Modules/Dashboard/MainDashboard";
import Excercise from "./Modules/Excercise/Excercise";
import Home from "./Modules/Home/Home";
import TreadmillDescription from "./Modules/Treadmill/TreadmillDescription";
import Profile from "./Modules/UserProfile/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />}>
        <Route path="/" element={<Home />} />
        <Route path="AllProducts/" element={<ProductCard />} />
        <Route path="Excercises/" element={<VideoCard />} />
        <Route
          path="AllProducts/TreadmillDescription/"
          element={<TreadmillDescription />}
        />
        <Route path="UserProfile/" element={<Profile />} />
        <Route path="SignUp/" element={<SignUp />} />
        <Route path="SignIn/" element={<SignIn />} />
        <Route path="EXCERCISES/Excercise/" element={<Excercise />} />
      </Route>
    </Routes>
  );
};

export default App;
