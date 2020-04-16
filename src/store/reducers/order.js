import {
    FETCH_ORDERS_FAIL,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    PURCHASE_BURGER_FAIL,
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_INIT
} from "../actions/actionTypes";
import {updateObject} from "../../shared/utility";

const initialState = {
    orders: [],
    purchasing: false,
    purchased: false,
};

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased: false});
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true,
    });
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});

};

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: true});

};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false,
    });
};

const fetchOrdersFail = (state, action) => {
    return updateObject(state, {loading: false});

};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE_INIT:
            return purchaseInit(state, action);
        case PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case PURCHASE_BURGER_FAIL:
            return purchaseBurgerFail(state, action);
        case FETCH_ORDERS_START:
            return purchaseBurgerStart(state, action);
        case FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);
        case FETCH_ORDERS_FAIL:
            return fetchOrdersFail(state, action);
        default:
            return state;
    }
};

export default reducer;