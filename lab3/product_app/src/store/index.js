import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice/counter";
import cardReducer from "./slice/cardSlice";
import formReducer from "./slice/formSlice";

export default configureStore({
    reducer: {
        counter,
        card:cardReducer,
        form: formReducer
    }
})
