import {
    INCREMENT,
    DECREMENT
} from "../actions/types";
// action - just a javascreipt objects INCREMENt & DECREMENT


// action creators - functions which return action object
export const increment = () => ({type: INCREMENT});

export const decrement = () => ({type: DECREMENT});