import * as SC from './Modal.styled'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CreaterContacts } from 'components/CreaterContacts/CreaterContacts'
import { editContact } from 'redux/contacts/contactsOperation'
import { useDispatch } from 'react-redux'

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ contact, modalChanger }) => {
    const dispatch = useDispatch()

    const {id, name, number} = contact

    const INITIAL_VALUES = {name, number} 

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === "Escape") modalChanger()
        }
        window.addEventListener("keydown", handleKeyDown)
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [modalChanger])

    const closeModal = (e) => {
        if (e.target === e.currentTarget) modalChanger()
    }

    const handleEditContact = (value) => {
        dispatch(editContact({value , id}))
        modalChanger()
        alert(`${value.name} was corrected`)
    }

    return createPortal(
        <SC.Overlay onClick={(e) => closeModal(e)}>
            <SC.Modal>
                <CreaterContacts title="Edit contact"
                    INITIAL_VALUES={INITIAL_VALUES}
                    subbmitForm={handleEditContact}
                />
            </SC.Modal>
        </SC.Overlay>,
        modalRoot
    )
}

Modal.propTypes = {
    modalChanger: PropTypes.func.isRequired,
    contact: PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
   })
}