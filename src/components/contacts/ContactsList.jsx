import React from 'react';
import ContactsItem from './contactsItem/ContactsItem';
// import styles from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/contactsActions';
import contactsOperations from '../../redux/contacts/contactsOperations';

const ContactsList = ({ contacts, deleteContact }) => {
    const onHandleDeleteContact = e => {
        const { id } = e.target;
        deleteContact(id);
    };
    return (
        <div>
            {contacts.map(({ name, number, id }) => (
                <ContactsItem
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                    onRemove={onHandleDeleteContact}
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    contacts: state.reducerContacts.contacts.filter(contact =>
        contact.name
            .toLowerCase()
            .includes(state.reducerContacts.filter.toLowerCase()),
    ),
});

const mapDispatchToProps = {
    // deleteContact: deleteContact,
    deleteContact: contactsOperations.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
    deleteContact: PropTypes.func.isRequired,
};
