// import React, { Component } from 'react';
// import styles from './Form.module.css';
// import { connect } from 'react-redux';
// import {
//     // addNewContact,
//     getAllContacts,
//     setAlert,
// } from '../../redux/contacts/contactsActions';

// import { addNewContact } from '../../redux/contacts/contactsOperations';

// class Form extends Component {
//     state = {
//         name: '',
//         number: '',
//     };

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
//     // onAddContact: addNewContact,
//     onAddContact: addNewContact,
//     setAlert,
//     getAllContacts,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Form);

// =====================================================db
import React, { Component } from 'react';
import styles from './Form.module.css';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/contacts/contactsActions';

import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    componentDidUpdate() {
        if (this.props.showUsedAlert || this.props.showEmptyAlert) {
            setTimeout(() => this.props.setAlert(), 2500);
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddContact({
            name: this.state.name,
            number: this.state.number,
        });
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>

                <label>
                    Number
                    <input
                        type="text"
                        name="number"
                        className={styles.input}
                        placeholder="Number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                    />
                </label>

                <button className={styles.button} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    showUsedAlert: contactsSelectors.getShowUsedAlert,
    showEmptyAlert: contactsSelectors.getShowEmptyAlert,
});

const mapDispatchToProps = {
    onAddContact: contactsOperations.addNewContact,
    setAlert,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
