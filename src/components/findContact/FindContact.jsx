import React from 'react';
import styles from './Find.module.css';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions/contactsActions';

const FindContact = () => {
    const filter = useSelector(state => state.reducerContacts.filter);
    const dispatch = useDispatch();
    const onHandleChange = e => {
        const { value } = e.target;
        dispatch(setFilter(value));
    };
    return (
        <>
            <input
                type="text"
                className={styles.input}
                placeholder="Find contacts by name"
                value={filter}
                onChange={onHandleChange}
            />
        </>
    );
};

export default FindContact;

// FindContact.propTypes = {
//     filter: PropTypes.string.isRequired,
//     setFilter: PropTypes.func.isRequired,
// };
