import { configureStore } from '@reduxjs/toolkit';
import reducerContacts from './contacts/contactsReducer';

const store = configureStore({
    reducer: reducerContacts,
});

export default store;

// old
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './contacts/rootReducer';

// const store = configureStore({
//     reducer: rootReducer,
// });

// export default store;
