import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NavItem, NavItems } from "./Navigation.Styled";
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { bubbles } from 'react-icons-kit/icomoon/bubbles'



const Navigation: FC = () => {
    const navigate = useNavigate()

    const changeRoute = (route: string) => {
        navigate(route)
    }

    return (
        <NavItems>
            <NavItem onClick={() => changeRoute('/')}>
                <Icon icon={bubbles}></Icon>
            </NavItem>
            <NavItem onClick={() => changeRoute('/dashboard')}>
                <Icon icon={home}></Icon>
            </NavItem>
            <NavItem onClick={() => changeRoute('/dashboard')}>
                <Icon icon={home}></Icon>
            </NavItem>
        </NavItems>
    )
};

export default Navigation;