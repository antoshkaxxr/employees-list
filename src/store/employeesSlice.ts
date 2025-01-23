import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EmployeeInfo } from '../types/EmployeeTypes';

export const fetchEmployees = createAsyncThunk<
    EmployeeInfo[],
    { page: number; limit: number; name?: string; gender?: string[]; position?: string[]; stack?: string[] }
>('employees/fetchEmployees', async ({ page, limit, name, gender, position, stack }) => {
    const params = new URLSearchParams({
        page: page.toString(),
        count: limit.toString(),
    });

    if (name) params.append('name', name);
    if (gender) gender.forEach((g) => params.append('gender', g));
    if (position) position.forEach((p) => params.append('position', p));
    if (stack) stack.forEach((s) => params.append('stack', s));

    const response = await fetch(`https://frontend-test-api.stk8s.66bit.ru/api/Employee?${params.toString()}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
    }
    return await response.json();
});

interface EmployeesState {
    employees: EmployeeInfo[];
    loading: boolean;
    error: string | null;
    page: number;
    hasMore: boolean;
}

const initialState: EmployeesState = {
    employees: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
};

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        resetEmployees: (state) => {
            state.employees = [];
            state.page = 1;
            state.hasMore = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.loading = false;
                state.employees = [...state.employees, ...action.payload];
                state.page += 1;
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Ошибка при загрузке данных';
            });
    },
});

export const { resetEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
