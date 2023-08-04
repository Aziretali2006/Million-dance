
const mainPath = {
  auth: "/auth/*",
  layout: "/*"
}

const authPath = {
  register: "/register",
  login: "/login"
}

const layoutPath = {
  instructor: "/instructor",
  schedule: "/schedule",
  home: "/",
  faq: "/faq"
};

const Auth = {
  register: "/auth/register",
  login: "/auth/login"
}

export const PATH = {
  mainPath,
  layoutPath,
  authPath,
  Auth
};