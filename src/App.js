import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExcerciseDescriptionRoute from "./Components/AppRoutes/ExcerciseDescriptionRoute";
import ExcerciseRoute from "./Components/AppRoutes/ExcerciseRoute";
import HomeRoute from "./Components/AppRoutes/HomeRoute";
import ProductDescriptionRoute from "./Components/AppRoutes/ProductDescriptionRoute";
import ProductRoute from "./Components/AppRoutes/ProductRoute";
import SignInRoute from "./Components/AppRoutes/SignInRoute";
import SignUpRoute from "./Components/AppRoutes/SignUpRoute";
import UserProfileRoute from "./Components/AppRoutes/UserProfileRoute";
import MainDashboard from "./Modules/Dashboard/MainDashboard";

const App = () => {
  const getRoute = (path, component) => {
    return {
      path: path,
      element: component,
    };
  };
  return (
    <Routes>
      <Route {...getRoute("/", <MainDashboard />)}>
        {HomeRoute()}
        {ProductRoute()}
        {ExcerciseRoute()}
        {ProductDescriptionRoute()}
        {SignInRoute()}
        {SignUpRoute()}
        {UserProfileRoute()}
        {ExcerciseDescriptionRoute()}
      </Route>
    </Routes>
  );
};

export default App;
