import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  if (!auth.loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
