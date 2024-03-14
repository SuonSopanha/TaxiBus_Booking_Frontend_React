import React from "react";
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

const Content = () => {
  return (
    <>
        <TaxiProfile />
    </>
  );
};

export default Content;
