import {NavLinkSC} from "../StyledNav/StyledNav.styled"

export const AuthNav = () => {
  return (
    <div>
      <NavLinkSC to="/goit-react-hw-08-phonebook/register">
        Register
      </NavLinkSC>
      <NavLinkSC to="/goit-react-hw-08-phonebook/login">
        Log In
      </NavLinkSC>
    </div>
  );
};
