import {ADD_INGREDIENT, FETCH_INGREDIENTS_FAILED, REMOVE_INGREDIENT, SET_INGREDIENTS} from "../actions/actionTypes";
import axios from '../../axios.orders';


export const addIngredient = (name) => {
    return {
        type: ADD_INGREDIENT,
        ingredientName: name,
    }
};

export const removeIngredient = (name) => {
    return {
        type: REMOVE_INGREDIENT,
        ingredientName: name,
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: SET_INGREDIENTS,
        ingredients: ingredients,
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-assignment-650d3.firebaseio.com/ingredients.json')
            .then(resp => {
                dispatch(setIngredients(resp.data))
            })
            .catch(error => dispatch(fetchIngredientsFailed()));
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: FETCH_INGREDIENTS_FAILED
    }
};