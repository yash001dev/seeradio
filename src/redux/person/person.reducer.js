import UserActionTypes from "./person.types";

const INITIAL_STATE={
    person:[],
    error:{},
    loading:false,
};

const personReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case UserActionTypes.SIGN_IN_START:
            return{
                ...state,
                loading:true,
            };
        
        case UserActionTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                person:action.payload,
                loading:false,
            }
        case UserActionTypes.SIGN_IN_FAILURE:
            return{
                ...state,
                error:{error:action.payload}
            }
        default:return state;
    }
}

export default personReducer;