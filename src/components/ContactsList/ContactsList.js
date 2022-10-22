import { Box } from 'components/Box';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { useEffect } from 'react';
import { useVisibleContacts } from 'hooks/useVisibleContacts';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    const contacts = useVisibleContacts()

    return (
        <Box as="ul" mt={4}>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            ))}
        </Box>
    )
}