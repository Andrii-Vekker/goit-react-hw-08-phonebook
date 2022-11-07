import { UserMenuContainer } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/auth/authOperations";


export default function UserMenu() {
const dispatch = useDispatch()
    return (
        <UserMenuContainer>
            <p>mango@mail.com</p>
            <button type="button" onClick={() => dispatch(logOutUser())}>LOGOUT</button>
        </UserMenuContainer>
    );
};
