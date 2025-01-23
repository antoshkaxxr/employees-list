import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import employeesReducer from './employeesSlice';
import employeeDetailsReducer from './employeeDetailsSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        employees: employeesReducer,
        employeeDetails: employeeDetailsReducer,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
