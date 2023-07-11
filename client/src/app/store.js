import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from '../features/properties/propertySlice';
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    auth: authReducer,
  },

});
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()