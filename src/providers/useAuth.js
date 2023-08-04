import React from "react";
import { AuthContexts } from "../contexts/AuthContexts"

const useAuth = () => {
  const context = React.useContext(AuthContexts);
  return context;
}

export default useAuth;