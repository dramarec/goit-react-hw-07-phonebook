import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './contactsItem/ContactsItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactOperations } from '../../redux/operations/contactOperations';
import Form from '../form/Form';

const ContactsList = () => {
    const [isEditeFormOpen, setEditFormOpen] = useState(false);
    const [data, setData] = useState({});
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
        dispatch(deleteContactOperations(id));
    };
    const onHandleEditContact = e => {
        setEditFormOpen(true);
        const id = e.target.id;
        setData({ ...contacts.find(contact => contact.id === id) });
    };

    return (
        <>
            {isEditeFormOpen && (
                <Form data={data} isEdit={true} closeForm={setEditFormOpen} />
            )}
            <TransitionGroup component="ul" className={styles.ul}>
                {contacts.map(({ name, number, id }) => (
                    <CSSTransition key={id} timeout={250} classNames={styles}>
                        <ContactsItem
                            key={id}
                            name={name}
                            number={number}
                            id={id}
                            onRemove={onHandleDeleteContact}
                            onEdit={onHandleEditContact}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    );
};

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
    // deleteContact: PropTypes.func.isRequired,
};
