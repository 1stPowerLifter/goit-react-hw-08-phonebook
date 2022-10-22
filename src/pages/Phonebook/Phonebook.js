import { Contacts } from "components/Contacts/Contacts";
import { CreaterContacts } from "components/CreaterContacts/CreaterContacts";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/contactsOperation";
import { selectContacts } from "redux/contacts/contactsSelectors";
import {Conteiner} from "./Phonebook.styled"

const INITIAL_VALUES = { name: "", number: "" }

export default function Phonebook() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  
  const handleAddContact =  (value )=> {
        if (contacts.some(contact => contact.name === value.name)) {
            alert(`${value.name} is alredy in contarts`)
        } else {
            dispatch(addContact(value))
            alert(`${value.name} added to phonebook`)
        }
    }

  return (
    <Conteiner>
      <CreaterContacts title="Add contact"
        INITIAL_VALUES={INITIAL_VALUES}
        subbmitForm={handleAddContact}
      />
          <Contacts title="Contacts"/>
    </Conteiner>
  );
}