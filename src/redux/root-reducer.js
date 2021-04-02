import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import personReducer from './person/person.reducer';
import wholesaleReducer from './wholsale/wholsale.reducer';
// import {persistReducer } from 'redux/persist';
import storage from 'redux-persist/lib/storage';

const persistConfig ={
    key:'user',
    storage,
    whitelist:['person']
}


const rootReducer=combineReducers({
    person:personReducer,
    wholesale:wholesaleReducer,
})

export default persistReducer(persistConfig,rootReducer);

