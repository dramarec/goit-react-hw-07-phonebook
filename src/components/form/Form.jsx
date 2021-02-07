import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact, setAlert } from '../../redux/actions/contactsActions';

const initialState = {
    name: '',
    number: '',
};

const Form = () => {
    const dispatch = useDispatch();
    const showUsedAlert = useSelector(
        state => state.reducerContacts.showUsedAlert,
    );
    const showEmptyAlert = useSelector(
        state => state.reducerContacts.showEmptyAlert,
    );

    const [state, setState] = useState({ ...initialState });

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
        dispatch(
            addNewContact({
                name: state.name,
                number: state.number,
            }),
        );
        setState({
            name: '',
            number: '',
        });
    };

    return (
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

            <button className={styles.button} type="submit">
                Add contact
            </button>
        </form>
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
