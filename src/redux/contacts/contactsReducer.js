import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
    deleteContact,
    setFilter,
    setAlert,
    addContactSuccess,
    fetchContactsRequest,
    fetchContactsSuccess,
    removeContactsSuccess,
} from './contactsActions';

const initialState = {
    contacts: [],
    filter: '',
    showEmptyAlert: false,
    showUsedAlert: false,
    loading: false,
};

const reducerContacts = createReducer(
    { ...initialState },
    {
        [addContactSuccess]: (state, action) => {
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

        [fetchContactsSuccess]: (state, action) => ({
            ...state,
            contacts: [...action.payload],
        }),

        [fetchContactsRequest]: state => ({
            ...state,
            loading: !state.loading,
        }),

        [deleteContact]: (state, action) => ({
            ...state,
            contacts: [
                ...state.contacts.filter(
                    contact => contact.id !== action.payload,
                ),
            ],
        }),
        [removeContactsSuccess]: (state, action) => ({
            ...state,
            contacts: [
                ...state.contacts.filter(
                    contact => contact.id.toString() !== action.payload,
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
    },
);

export default combineReducers({ reducerContacts });
