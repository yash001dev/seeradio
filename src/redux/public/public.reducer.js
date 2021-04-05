import PublicTypes from './public.types';

const INITIAL_STATE={
    country:[],
    loading:false,
    error:false,
    state:[],
};

const publicReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case PublicTypes.GETCOUNTRY_START:
            return{
                ...state,
                loading:true
            }
        
        case PublicTypes.GETCOUNTRY_SUCCESS:
            return{
                ...state,
                loading:true,
                country:action.payload,
            }
        
        case PublicTypes.GETCOUNTRY_FAILURE:
            return{
                ...state,
                error:{error:action.payload},
                loading:false,
            }

        case PublicTypes.GETSTATE_START:
            return{
                ...state,
                loading:true,
            }
        
        case PublicTypes.GETSTATE_SUCCESS:
            return{
                ...state,
                state:action.payload,
                loading:false,
            }
        
        case PublicTypes.GETSTATE_FAILURE:
            return{
                ...state,
                error:{error:action.payload},
            }

        default:return state;
    }
}

export default publicReducer;