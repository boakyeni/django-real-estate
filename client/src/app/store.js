import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from '../features/properties/propertySlice';

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
  },

});
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()