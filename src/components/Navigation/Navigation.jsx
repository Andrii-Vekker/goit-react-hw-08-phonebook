import UserMenu from "./UserMenu/UserMenu";
import UserAuth from "./UserAuth/UserAuth";



export default function Navigation() {
    return (
        <nav>
            <UserMenu />
            <UserAuth />
        </nav>
    );
};
