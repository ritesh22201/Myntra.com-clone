import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer as authReducer} from './AuthReducer/reducer';
import {reducer as productReducer} from './ProductReducer/reducer';
import {reducer as cartReducer} from './CartReducer/reducer';
import {reducer as addressReducer} from './addressReducer/reducer';
import {reducer as paymentReducer} from './paymentReducer/reducer';
import {reducer as profileReducer} from './profileReducer/reducer';

const rootReducer = combineReducers({
    authReducer,
    productReducer,
    cartReducer,
    addressReducer,
    paymentReducer,
    profileReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));