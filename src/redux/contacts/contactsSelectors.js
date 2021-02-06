const getShowUsedAlert = state => state.reducerContacts.showUsedAlert;
const getShowEmptyAlert = state => state.reducerContacts.showEmptyAlert;
const getContacts = state =>
    state.reducerContacts.contacts.filter(contact =>
        contact.name
            .toLowerCase()
            .includes(state.reducerContacts.filter.toLowerCase()),
    );
const getFilter = state => state.reducerContacts.filter;
const getLoading = state => state.reducerContacts.loading;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getShowUsedAlert,
    getShowEmptyAlert,
    getContacts,
    getFilter,
    getLoading,
};
