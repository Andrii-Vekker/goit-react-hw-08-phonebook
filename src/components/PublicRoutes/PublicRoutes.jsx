import { Outlet } from "react-router";
import { isLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";


export default function PublicRoutes() {
  const isUserLogin = useSelector(isLogin);
  console.log(isUserLogin)
if (isUserLogin) {
  <Navigate to="/contacts"/>  
    };
    return( <Outlet/>)
};
