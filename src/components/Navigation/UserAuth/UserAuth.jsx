import { NavLink } from "react-router-dom";
import { AuthContainer } from "./UserAuth.stylrd";
import { AuthLink } from "./UserAuth.stylrd";


export default function UserAuth() {
  return (
      <AuthContainer>
          <AuthLink to="/register">Register</AuthLink>
          <AuthLink to="/login">Login</AuthLink>
    </AuthContainer>
  )
}
