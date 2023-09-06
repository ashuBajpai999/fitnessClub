import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductCard from "./Components/Core/Card/ProductCard";
import VideoCard from "./Components/Core/Card/VideoCard";
import MainDashboard from "./Modules/Dashboard/MainDashboard";
import Home from "./Modules/Home/Home";
import TreadmillDescription from "./Modules/Treadmill/TreadmillDescription";
import Profile from "./Modules/UserProfile/Profile";
import SignUp from "./Components/Authentication/SignUp";
import SignIn from "./Components/Authentication/SignIn";
import Excercise from "./Modules/Excercise/Excercise";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainDashboard />}>
          <Route path="fitnessClub" element={<Home />} />
          <Route path="AllProducts" element={<ProductCard />} />
          <Route path="Excercises" element={<VideoCard />} />
          <Route
            path="AllProducts/TreadmillDescription"
            element={<TreadmillDescription />}
          />
          <Route path="UserProfile" element={<Profile />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="EXCERCISES/Excercise" element={<Excercise />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
