import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    counter_val : 0,
    counter_max_limit: 200
}

const counter = createSlice({
    name :"counter",
    initialState:INITIAL_STATE,
    reducers: {
        incrementCounter : (state) => {
           state.counter_val = state.counter_val + 1
        },
        decrementCounter: (state) => {
            state.counter_val = state.counter_val - 1
        },
        decreaceCounterByValue: (state,action) => {
            state.counter_val -= action.payload
        }
    }
})

export const { incrementCounter ,  decrementCounter, decreaceCounterByValue } = counter.actions;

export default counter.reducer;