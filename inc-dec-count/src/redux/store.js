import { createStore } from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'Increament':
            return state + 1;
        case 'decreament':
            return state - 1;
        default:
            return state;
    }
}

export const store = createStore(reducer);