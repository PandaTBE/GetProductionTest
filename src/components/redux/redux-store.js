import { authReducer } from "./authReducer";

const { createStore, combineReducers } = require("redux");

const reducer = combineReducers({
    auth: authReducer
})

export const store = createStore(reducer); 