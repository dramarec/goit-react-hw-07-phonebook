import { createReducer } from '@reduxjs/toolkit';

import {
    addNewContact,
    deleteContact,
    editContact,
    setFilter,
    setAlert,
    getAllContacts,
    setLoading,
    setError,
} from '../actions/contactsActions';

const initialState = {
    contacts: [],
    filter: '',
    showEmptyAlert: false,
    showUsedAlert: false,
    loading: false,
    setError: '',
};

const contactsReducer = createReducer(
    { ...initialState },
    {
        [addNewContact]: (state, action) => {
            if (
                state.contacts.some(
                    contact => contact.name === action.payload.name,
                )
            ) {
                return { ...state, showUsedAlert: !state.showUsedAlert };
            } else if (!action.payload.name.length) {
                return { ...state, showEmptyAlert: !state.showEmptyAlert };
            } else
                return {
                    ...state,
                    contacts: [...state.contacts, action.payload],
                };
        },

        [getAllContacts]: (state, action) => ({
            ...state,
            contacts: [...action.payload],
        }),

        [deleteContact]: (state, action) => ({
            ...state,
            contacts: [
                ...state.contacts.filter(
                    contact => contact.id !== action.payload,
                ),
            ],
        }),
        [editContact]: (state, action) => ({
            ...state,
            contacts: [
                ...state.contacts.map(contact =>
                    contact.id === action.payload.id
                        ? { ...action.payload }
                        : contact,
                ),
            ],
        }),
        [setFilter]: (state, action) => ({
            ...state,
            filter: action.payload,
        }),
        [setAlert]: state => ({
            ...state,
            showEmptyAlert: false,
            showUsedAlert: false,
        }),

        [setLoading]: state => ({
            ...state,
            loading: !state.loading,
        }),
        [setError]: state => ({
            ...state,
            setError: state.payload,
        }),
    },
);

export default contactsReducer;
//----------------------------
// import {
//     ADDNEWCONTACT,
//     DELETECONTACT,
//     SETFILTER,
//     SETALERT,
//     GETALLCONTACTS,
// } from '../constants/contactsConstants';

// const initialState = {
//     contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     showEmptyAlert: false,
//     showUsedAlert: false,
// };

// const contactsReducer = (state = { ...initialState }, action) => {
//     switch (action.type) {
//         case ADDNEWCONTACT:
//             // localStorage.setItem(
//             //     'contacts',
//             //     JSON.stringify([...state.contacts, action.payload]),
//             // );
//             if (
//                 state.contacts.some(
//                     contact => contact.name === action.payload.name,
//                 )
//             ) {
//                 return { ...state, showUsedAlert: !state.showUsedAlert };
//             } else if (!action.payload.name.length) {
//                 return { ...state, showEmptyAlert: !state.showEmptyAlert };
//             } else
//                 return {
//                     ...state,
//                     contacts: [...state.contacts, action.payload],
//                 };

//         case DELETECONTACT:
//             // localStorage.setItem(
//             //     'contacts',
//             //     JSON.stringify([...state.contacts, action.payload]),
//             // );
//             return {
//                 ...state,
//                 contacts: [
//                     ...state.contacts.filter(
//                         contact => contact.id !== action.payload,
//                     ),
//                 ],
//             };

//         case SETFILTER:
//             return {
//                 ...state,
//                 filter: action.payload,
//             };

//         case SETALERT:
//             return {
//                 ...state,
//                 showEmptyAlert: false,
//                 showUsedAlert: false,
//             };
//         case GETALLCONTACTS:
//             return {
//                 ...state,
//                 contacts: [...action.payload],
//             };

//         default:
//             return state;
//     }
// };

// export default contactsReducer;
