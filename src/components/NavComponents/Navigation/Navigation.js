import { useAuth } from 'hooks/useAuth';
import {NavLinkSC} from "../StyledNav/StyledNav.styled"

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkSC to="/">
        Home
      </NavLinkSC>
      {isLoggedIn && (
        <NavLinkSC to="/phonebook">
          Contacts
        </NavLinkSC>
      )}
    </nav>
  );
};
