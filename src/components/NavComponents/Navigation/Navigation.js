import { useAuth } from 'hooks/useAuth';
import {NavLinkSC} from "../StyledNav/StyledNav.styled"

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkSC to="/goit-react-hw-08-phonebook">
        Home
      </NavLinkSC>
      {isLoggedIn && (
        <NavLinkSC to="/goit-react-hw-08-phonebook/phonebook">
          Contacts
        </NavLinkSC>
      )}
    </nav>
  );
};
