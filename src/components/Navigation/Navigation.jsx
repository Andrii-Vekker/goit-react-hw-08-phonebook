import UserMenu from "./UserMenu/UserMenu";
import UserAuth from "./UserAuth/UserAuth";
import { NavBar } from "./Navigation.styled";
import HomePage from "components/pages/HomePage/HomePage";


export default function Navigation() {
    return (
        <NavBar>
            <HomePage/>
            <UserAuth />
            <UserMenu />
        </NavBar>
    );
};
