import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const HeaderNavLink = styled(NavLink)`
  position: relative;
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0px;
    display: block;

    width: 100%;
    height: 2px;
    border-radius: 2px;

    background-color: #ffd76d;
    opacity: 0;
    transform: translateX(-50%) scaleX(0.3);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active::after,
  &:hover::after,
  &:focus::after {
    transform: translateX(-50%) scaleX(1);
    opacity: 1;
  }
`;
