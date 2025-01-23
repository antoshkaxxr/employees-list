import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
    searchQuery: string;
    selectedFilters: {
        gender: string[];
        position: string[];
        stack: string[];
    };
}

const initialState: FiltersState = {
    searchQuery: '',
    selectedFilters: {
        position: [],
        gender: [],
        stack: [],
    },
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setSelectedFilters: (
            state,
            action: PayloadAction<{ type: 'gender' | 'position' | 'stack'; values: string[] }>
        ) => {
            const { type, values } = action.payload;
            state.selectedFilters[type] = values;
        },
    },
});

export const { setSearchQuery, setSelectedFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
