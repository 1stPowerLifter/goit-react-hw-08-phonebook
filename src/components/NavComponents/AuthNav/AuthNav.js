import {NavLinkSC} from "../StyledNav/StyledNav.styled"

export const AuthNav = () => {
  return (
    <div>
      <NavLinkSC to="/register">
        Register
      </NavLinkSC>
      <NavLinkSC to="/login">
        Log In
      </NavLinkSC>
    </div>
  );
};
