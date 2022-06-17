import { Link } from "react-router-dom";
import { NavItem, NavItems } from "./Navigation.Styled";

const Navigation = () => 
    <NavItems>
        <NavItem>
            <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
            <Link to="/dashboard">Dash</Link>
        </NavItem>
        <NavItem>item</NavItem>
    </NavItems>
;

export default Navigation;