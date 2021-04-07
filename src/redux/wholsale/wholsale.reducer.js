import WholeSalesTypes from './wholsale.types';

const INITIAL_STATE={
    industry:[],
    error:{},
    loading:false,
    clientInsertData:[],
    clientData:[],
};

const wholesaleReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case WholeSalesTypes.GETALL_CLIENT_START:
        case WholeSalesTypes.GETINDUSTRIES_START:
            return{
                ...state,
                loading:true,
            };
        
        case WholeSalesTypes.GETINDUSTRIES_SUCCESS:
            return{
                ...state,
                industry:action.payload,
                loading:false,
            }

        case WholeSalesTypes.GETALL_CLIENT_SUCCESS:
            return{
                ...state,
                clientData:action.payload,
                loading:false,
            }
        
        case WholeSalesTypes.GETALL_CLIENT_FAILURE:
        case WholeSalesTypes.GETINDUSTRIES_FAILURE:
            return{
                ...state,
                error:{error:action.payload}
            }

        case WholeSalesTypes.GETINDUSTRIES_FAILURE:
            return{
                ...state,
                error:{error:action.payload}
            }
        
        case WholeSalesTypes.SALE_START:
            return{
                ...state,
            }

        case WholeSalesTypes.SALE_SUCCESS:
            return{
                ...state,
                clientInsertData:action.payload,
                loading:false,
            }
        
        case WholeSalesTypes.SALE_STOP:
            return{
                ...state,
                error:{error:action.payload}
            }

        default:return state;
    }
}

export default wholesaleReducer;