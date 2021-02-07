import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './contactsItem/ContactsItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions/contactsActions';

const ContactsList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(state =>
        state.reducerContacts.contacts.filter(contact =>
            contact.name
                .toLowerCase()
                .includes(state.reducerContacts.filter.toLowerCase()),
        ),
    );

    const onHandleDeleteContact = e => {
        const { id } = e.target;
        dispatch(deleteContact(id));
    };

    return (
        <TransitionGroup component="ul" className={styles}>
            {contacts.map(({ name, number, id }) => (
                <CSSTransition key={id} timeout={250} classNames={styles}>
                    <ContactsItem
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                        onRemove={onHandleDeleteContact}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
    // deleteContact: PropTypes.func.isRequired,
};
