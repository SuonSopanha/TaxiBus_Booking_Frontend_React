import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusList from "./pages/bus/busListPage";
import UserProfile from "./pages/user/userProfile";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ForgetPassword from "./pages/auth/forgetPassword";
import BusDetail from "./pages/bus/busDetail";
import BookingForm from "./pages/booking/bookingForm";
import BookingReciept from "./pages/booking/bookingReciept";
import BookingRequest from "./pages/booking/bookingRequest";
import TaxiProfile from "./pages/taxi/taxiProfile";
import ResetPassword from "./pages/user/resetPassword";
import DriveRegister from "./pages/user/driveRegister";
import Terms from "./pages/auth/terms";
import Compare from "./pages/user/compare";
import HomePage from "./pages/homePage";
import TaxiList from "./pages/taxi/taxiListPage";

const Content = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bus-list" element={<BusList />} />
        <Route path="/taxi-list" element={<TaxiList/>}/>
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/bus-detail" element={<BusDetail />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/booking-reciept" element={<BookingReciept />} />
        <Route path="/booking-request" element={<BookingRequest />} />
        <Route path="/taxi-profile" element={<TaxiProfile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/drive-register" element={<DriveRegister />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </Router>
  );
};

export default Content;

