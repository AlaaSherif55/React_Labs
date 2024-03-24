import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], 
};

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addItemToCard: (state, action) => {
            const { product } = action.payload;
            const existingItem = state.items.find(item => item.product.id === product.id);
            if (existingItem) {
                console.log("secondly here")
                existingItem.quantity += 1;
            } else {
                console.log("first here ")
                state.items.push({ product, quantity: 1 });
            }
        },
        removeItemFromCard: (state, action) => {
            const { id } = action.payload;
            console.log(action.payload)
            const index = state.items.findIndex(item => item.id === id);
            console.log(index)
            if (index !== -1) {
                console.log("index not equeal -1")
                if (state.items[index].quantity > 1) {
                    console.log("index not equeal -1")
                    state.items[index].quantity -= 1;
                } else {
                    state.items = state.items.filter(item =>  item.product.id !== action.payload);
                }
            }
        },
        clearCard: (state) => {
            state.items = [];
        },
    },
});

export const { addItemToCard, removeItemFromCard, clearCard } = cardSlice.actions;

export default cardSlice.reducer;