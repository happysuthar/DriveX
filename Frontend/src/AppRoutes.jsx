import { Route, Routes } from "react-router-dom";
import Layout from "./scenes/Layout";
import Car from "./scenes/car";
import FeaturedCars from "./scenes/morecarsss/morecars";
import Suv from "./scenes/suv";
import LoginPage from "./scenes/login";
import SignupPage from "./scenes/signup";
import CarBookingForm from "./scenes/rentpage";



function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/car" element={<Car />} />
        <Route path="/morecar" element={<FeaturedCars />} />
        <Route path="/suvcar" element={<Suv />} />
        <Route path="/loginn" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/rent" element={<CarBookingForm />} />


      </Routes>
    </div>
  );
}

export default AppRoutes;
