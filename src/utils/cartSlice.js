import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const indexToRemove = action.payload;
            if (indexToRemove >= 0 && indexToRemove < state.items.length) {
                state.items.splice(indexToRemove, 1); 
            }
        },
        clearList: (state) => {
            state.items.length = 0;
        },
    }
});

export const { addItem, removeItem, clearList } = cartSlice.actions;

export default cartSlice.reducer;
