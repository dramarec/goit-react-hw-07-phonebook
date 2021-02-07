import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styles from './Phonebook.module.css';
import { Empty, Used } from '../natification/Natification';

import Form from '../form/Form';
import Header from '../header/Header';
import Section from '../section/Section';
import ContactsList from '../contacts/ContactsList';
import FindContact from '../findContact/FindContact';

const Phonebook = () => {
    const contacts = useSelector(state => state.reducerContacts.contacts);
    const showUsedAlert = useSelector(
        state => state.reducerContacts.showUsedAlert,
    );
    const showEmptyAlert = useSelector(
        state => state.reducerContacts.showEmptyAlert,
    );
    return (
        <>
            <CSSTransition
                in={true}
                appear={true}
                classNames={styles}
                timeout={500}
                unmountOnExit
            >
                <Header title="Home Work #2 Phonebook" />
            </CSSTransition>

            <Section title="Phonebook">
                <Form />
            </Section>

            {contacts.length > 1 && (
                <Section title="Finder contacts">
                    <FindContact />
                </Section>
            )}

            {contacts.length > 0 && (
                <Section title="My Contacts">
                    <ContactsList />
                </Section>
            )}

            <CSSTransition
                in={showEmptyAlert}
                timeout={250}
                classNames={styles}
                unmountOnExit
            >
                <Empty />
            </CSSTransition>

            <CSSTransition
                in={showUsedAlert}
                timeout={250}
                classNames={styles}
                unmountOnExit
            >
                <Used />
            </CSSTransition>
        </>
    );
};

export default Phonebook;
