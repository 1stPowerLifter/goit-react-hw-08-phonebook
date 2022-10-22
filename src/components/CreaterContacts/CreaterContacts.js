import { Box } from 'components/Box';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { StyledForm, FormButton } from './CreaterContacts.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';



export const CreaterContacts = ({ title, INITIAL_VALUES, subbmitForm}) => {
    const {  isLoading } = useSelector(selectContacts);
    
    

    const hendleSubbmitForm =  (value ,{ resetForm })=> {
        subbmitForm(value)
        resetForm()
    }
    return (
        <Box px={4}>
            <h2>{title}</h2>

            <Formik initialValues={INITIAL_VALUES}
                onSubmit={hendleSubbmitForm}>
                <StyledForm autoComplete='off'>
                    <Box display="inline-flex"
                        flexDirection="column"
                        gridGap={3} pb={3}>
                        <label htmlFor="name">Name</label>
                        <Field
                            placeholder="Enter name"
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required />
                    </Box>

                    <Box display="inline-flex"
                        flexDirection="column"
                        gridGap={3} pb={3}>
                        <label htmlFor="number">Number</label>
                        <Field
                            placeholder="Enter number"
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </Box>
                            
                    <FormButton type="submit" disabled={isLoading}>
                        {title}
                    </FormButton>
                    
                </StyledForm>
            </Formik>
        </Box>
    )   
}

CreaterContacts.propTypes = {
    title: PropTypes.string.isRequired,
    subbmitForm: PropTypes.func.isRequired
}