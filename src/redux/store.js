import rootReducer from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer,
});

export default store;
//----------------------
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers/rootReducer';

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
