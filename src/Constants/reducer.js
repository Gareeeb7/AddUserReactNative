import { ADD_TO_CART, REMOVE_TO_CART } from "./constants";
const initialState = [{id:0,Name:"Select"}]

export const reducer=(state=initialState,action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.data]
        break;
        case REMOVE_TO_CART:
            let items = state.filter(x => x.id != action.data)
            return [...items]
        break;
    
        default:
            return state
    }

}