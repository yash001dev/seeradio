import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';

import persistReducer from "redux-persist/es/persistReducer";
import personReducer from './person/person.reducer';
import wholesaleReducer from './wholsale/wholsale.reducer';
import publicReducer from './public/public.reducer';




const persistConfig ={
    key:'user',
    storage,
    whitelist:['person']
}


const rootReducer=combineReducers({
    person:personReducer,
    wholesale:wholesaleReducer,
    public:publicReducer
})

export default persistReducer(persistConfig,rootReducer);

