import { Link } from "react-router-dom";
import { NavItem, NavItems } from "./Navigation.Styled";
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { bubbles } from 'react-icons-kit/icomoon/bubbles'



const Navigation = () => 
    <NavItems>
        <NavItem>
            <Link to="/">
                <Icon icon={bubbles}></Icon>
            </Link>
        </NavItem>
        <NavItem>
            <Link to="/dashboard">
                <Icon icon={home}></Icon>
            </Link>
        </NavItem>
        <NavItem>item</NavItem>
    </NavItems>
;

export default Navigation;