import { Outlet, Navigate } from "react-router";
import { isLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";



export default function PrivateRoute() {
    const isUserLogin = useSelector(isLogin);
    console.log(isUserLogin)
if (!isUserLogin) {
  <Navigate to="/"/>  
}
    return(<Outlet/>)
};
