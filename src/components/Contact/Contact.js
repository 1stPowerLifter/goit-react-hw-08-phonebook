import { Box } from "components/Box"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/contactsOperation"
import { DeleteContact } from "./Contact.styled";
import { RiDeleteBack2Line } from 'react-icons/ri';
import {  FiEdit} from 'react-icons/fi';
import { selectContacts } from "redux/contacts/contactsSelectors";
import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import PropTypes from 'prop-types'


export const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(selectContacts)
    const [showModal, setShowModal] = useState(false)
    
    const { id, name, number } = contact

    const modalChanger = () => setShowModal(showModal => !showModal)

    return (
        <Box display="flex" mb={3} p={2} width="250px" borderRadius="16px"
            justifyContent="space-between" border="1px dashed black"
            key={id}><div>{name}: {number}</div>
            <div>
                <DeleteContact onClick={modalChanger} disabled={isLoading}><FiEdit size={15} /></DeleteContact>
                <DeleteContact onClick={() => dispatch(deleteContact(id))} disabled={isLoading}><RiDeleteBack2Line size={15} /></DeleteContact>
            </div>
            {showModal &&
                <Modal modalChanger={modalChanger} contact={contact}/>
            }
        </Box>
    )
}

Contact.propTypes = {
    contact: PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
   })
}