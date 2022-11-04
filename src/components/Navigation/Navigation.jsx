import UserMenu from "./UserMenu/UserMenu";
import UserAuth from "./UserAuth/UserAuth";
import { NavBar } from "./Navigation.styled";


export default function Navigation() {
    return (
        <NavBar>
            <UserAuth />
            <UserMenu />
        </NavBar>
    );
};
