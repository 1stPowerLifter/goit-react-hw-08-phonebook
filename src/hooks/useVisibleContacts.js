import { useSelector } from "react-redux"
import { selectContacts } from "redux/contacts/contactsSelectors"
import { selectFilter } from "redux/filter/filterSelectors"

export const useVisibleContacts = () => { 
    const {contacts} = useSelector(selectContacts)
    const filter = useSelector(selectFilter)
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
}