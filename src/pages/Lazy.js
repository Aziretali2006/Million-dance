import React from "react";

const Instructor = React.lazy(() => import("../apps/layout/instructor/Instructor"));
const Schedule = React.lazy(() => import("../apps/layout/schedule/Schedule"));
const Home = React.lazy(() => import("../apps/layout/home/Home"));
const Faq = React.lazy(() => import("../apps/layout/faq/Faq"));

const Register = React.lazy(() => import("../apps/auth/register/Register"));
const Login = React.lazy(() => import("../apps/auth/login/Login"));

export const LayoutPages = {
  Instructor,
  Schedule,
  Home,
  Faq
}

export const AuthPages = {
  Register,
  Login
}