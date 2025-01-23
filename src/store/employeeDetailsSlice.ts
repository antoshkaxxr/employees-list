import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {EmployeeInfo} from '../types/EmployeeTypes';

export const fetchEmployeeDetails = createAsyncThunk<EmployeeInfo, string>(
    'employeeDetails/fetchEmployeeDetails',
    async (id: string) => {
        const response = await fetch(`https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`);
        if (!response.ok) {
            throw new Error('Сотрудник не найден');
        }
        return await response.json();
    }
);

interface EmployeeDetailsState {
    employee: EmployeeInfo | null;
    loading: boolean;
    error: string | null;
}

const initialState: EmployeeDetailsState = {
    employee: null,
    loading: false,
    error: null,
};

const employeeDetailsSlice = createSlice({
    name: 'employeeDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployeeDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.employee = action.payload;
            })
            .addCase(fetchEmployeeDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Ошибка при загрузке данных';
            });
    },
});

export default employeeDetailsSlice.reducer;
