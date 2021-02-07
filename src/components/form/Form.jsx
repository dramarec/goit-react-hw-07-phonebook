import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAlert } from '../../redux/actions/contactsActions';
import {
    addNewContactOperations,
    editContactOperations,
} from '../../redux/operations/contactOperations';

const initialState = {
    name: '',
    number: '',
};

const Form = ({ data = { ...initialState }, isEdit = false, closeForm }) => {
    const [state, setState] = useState({ ...data });
    const dispatch = useDispatch();

    const setLoading = useSelector(state => state.reducerContacts.loading);
    const showUsedAlert = useSelector(
        state => state.reducerContacts.showUsedAlert,
    );
    const showEmptyAlert = useSelector(
        state => state.reducerContacts.showEmptyAlert,
    );

    useEffect(() => {
        if (showUsedAlert || showEmptyAlert) {
            setTimeout(() => dispatch(setAlert(), 2500));
        }
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (isEdit) {
            closeForm(false);
            dispatch(editContactOperations(state));
        } else dispatch(addNewContactOperations(state));
        setState({ ...initialState });
    };
    const onClose = () => {
        closeForm(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Name"
                        value={state.name}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Number
                    <input
                        type="text"
                        name="number"
                        className={styles.input}
                        placeholder="Number"
                        value={state.number}
                        onChange={handleInputChange}
                    />
                </label>

                {setLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    <button className={styles.button} type="submit">
                        {isEdit ? 'Edit Contact' : ' Add contact'}
                    </button>
                )}
                {isEdit && (
                    <button
                        className={styles.button}
                        type="button"
                        onClick={onClose}
                    >
                        Close
                    </button>
                )}
            </form>
        </>
    );
};

export default Form;

//class
// import React, { Component } from 'react';
// import styles from './Form.module.css';
// import { connect } from 'react-redux';
// import {
//     addNewContact,
//     getAllContacts,
//     setAlert,
// } from '../../redux/actions/contactsActions';

// class Form extends Component {
//     state = {
//         name: '',
//         number: '',
//     };

//     // componentDidMount() {
//     //     if (localStorage.getItem('contacts')) {
//     //         this.props.getAllContacts(
//     //             JSON.parse(localStorage.getItem('contacts')),
//     //         );
//     //     }
//     // }

//     componentDidUpdate() {
//         if (this.props.showUsedAlert || this.props.showEmptyAlert) {
//             setTimeout(() => this.props.setAlert(), 2500);
//         }
//     }

//     handleInputChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onAddContact({
//             name: this.state.name,
//             number: this.state.number,
//         });
//         this.setState({
//             name: '',
//             number: '',
//         });
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name
//                     <input
//                         type="text"
//                         name="name"
//                         className={styles.input}
//                         placeholder="Name"
//                         value={this.state.name}
//                         onChange={this.handleInputChange}
//                     />
//                 </label>

//                 <label>
//                     Number
//                     <input
//                         type="text"
//                         name="number"
//                         className={styles.input}
//                         placeholder="Number"
//                         value={this.state.number}
//                         onChange={this.handleInputChange}
//                     />
//                 </label>

//                 <button className={styles.button} type="submit">
//                     Add contact
//                 </button>
//             </form>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     showUsedAlert: state.reducerContacts.showUsedAlert,
//     showEmptyAlert: state.reducerContacts.showEmptyAlert,
// });

// const mapDispatchToProps = {
//     onAddContact: addNewContact,
//     setAlert,
//     getAllContacts,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Form);
