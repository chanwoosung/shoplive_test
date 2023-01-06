import { createSlice } from "@reduxjs/toolkit";

export const itemInitialSlice = {
    item:[]
}

export const itemSlice = createSlice({
    name: 'item',
    initialState: itemInitialSlice,
    reducers: {
        addItem(state, action) {
            state.item.push(action.payload);
        },
        removeItem(state, action) {
            state.item = state.item.filter(item => item.id !== action.payload.id)
        },
        editItem(state, action) {
            state.item = state.item.reduce((acc, cur) => {
                if(cur.id === action.payload.id) {
                    cur = action.payload    
                }
                acc.push(cur)
                return acc
            },[]);
        }
    }
});

export const {addItem, removeItem, editItem} = itemSlice.actions;

export default itemSlice