import { UserMenuContainer } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/auth/authOperations";
// import { useSelector } from "react-redux";
// import { isLogin } from "redux/auth/authSelectors";

export default function UserMenu() {
    const dispatch = useDispatch()
    // const isLogout = useSelector(isLogin)
    return (
        <UserMenuContainer>
            <p>mango@mail.com</p>
            <button type="button" onClick={() => dispatch(logOutUser())}>LOGOUT</button>
        </UserMenuContainer>
    );
};
