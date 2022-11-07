import { signup } from "API/ApiAuth";
import RegisterForm from "components/RegisterForm/RegisterForm"
import { useSelector } from "react-redux";
import { isLogin } from "redux/auth/authSelectors";
import { Navigate } from "react-router";


export default function RegisterPage() {
  const isUserLogin = useSelector(isLogin)
  
  if (isUserLogin) {
   return  <Navigate to="/contacts"/>
  }
  return (
    <RegisterForm  />
    
  )
}
