import React from 'react';
import styles from './Find.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const FindContact = ({ filter, setFilter }) => {
    const onHandleChange = e => {
        const { value } = e.target;
        setFilter(value);
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

const mapStateToProps = state => ({
    filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => {
    return {
        setFilter: id => {
            dispatch(setFilter(id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FindContact);

FindContact.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};
