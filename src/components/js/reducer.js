export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) => {
    // [1,2 ,3 ,4] 1 + 2 + 3 + 4
    basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
    console.log(state);

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;
