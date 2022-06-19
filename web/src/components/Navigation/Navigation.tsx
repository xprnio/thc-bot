import { FC } from 'react';
import { Icon } from 'react-icons-kit';
import { statsDots } from 'react-icons-kit/icomoon/statsDots';
import { grid_1 } from 'react-icons-kit/ikons/grid_1';
import { useNavigate } from 'react-router-dom';
import { NavItem, NavItems } from './Navigation.Styled';


const Navigation: FC = () => {
  const navigate = useNavigate();

  const changeRoute = (route: string) => {
    navigate(route);
  };

  return (
    <NavItems>
      <NavItem onClick={() => changeRoute('/dashboard')}>
        <Icon size={24} icon={grid_1}></Icon>
      </NavItem>
      <NavItem onClick={() => changeRoute('/strategies')}>
        <Icon size={24} icon={statsDots}></Icon>
      </NavItem>
    </NavItems>
  );
};

export default Navigation;
