import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./contex";


export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const user = useContext(UserContext);
  const isAllowed = Boolean(user.userName);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};