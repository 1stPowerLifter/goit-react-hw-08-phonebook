import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavLinkSC = styled(NavLink)`
display: inline-block;
  text-decoration: none;
  padding: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black };
  &.active {
  color: ${p => p.theme.colors.primary };
  }
`