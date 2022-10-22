import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';


export const Contacts = ({ title }) => {
    


    return (
        <Box px={4} borderLeft="1px dashed black">
            <h2>{title}</h2>
            <Filter/>
            <ContactsList/>
        </Box>
    )
}

Contacts.propType = {
    title: PropTypes.string.isRequired,
}