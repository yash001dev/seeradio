import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import personReducer from './person/person.reducer';
// import {persistReducer } from 'redux/persist';
import storage from 'redux-persist/lib/storage';

const persistConfig ={
    key:'user',
    storage,
    whitelist:['person']
}


const rootReducer=combineReducers({
    person:personReducer
})

export default persistReducer(persistConfig,rootReducer);

