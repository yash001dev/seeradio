import {GETINDUSTRIES_URL,CLIENT_INSERT} from '../../constant/apit.constant';
import { serverCall } from './../../serverCall';
import WholeSalesTypes from './wholsale.types';


export const getIndustries=(request)=>(dispatch)=>{
    returnToDispatch(dispatch,WholeSalesTypes.GETINDUSTRIES_START);
    const url = GETINDUSTRIES_URL;
    console.log("REQUEST:",request);
    serverCall({url:url,request:'',method:'get',header:true})
    .then((response)=>{
        returnToDispatch(dispatch,WholeSalesTypes.GETINDUSTRIES_SUCCESS,response.data.data);
    })
    .catch((error)=>{
        returnToDispatch(dispatch,WholeSalesTypes.GETINDUSTRIES_FAILURE,error);
        setTimeout(()=>{
            alert(error);
        },100)
    });
};


export const addClient=(request)=>(dispatch)=>{
    returnToDispatch(dispatch,WholeSalesTypes.SALE_START);
    const url = CLIENT_INSERT;
    console.log("REQUEST:",request);
    serverCall({url:url,request:request,method:'post',header:true})
    .then((response)=>{
        returnToDispatch(dispatch,WholeSalesTypes.SALE_SUCCESS,response.data.data);
    })
    .catch((error)=>{
        returnToDispatch(dispatch,WholeSalesTypes.SALE_SUCCESS,error);
        setTimeout(()=>{
            alert(error);
        },100)
    });
};


export const getAllClient=(request)=>(dispatch)=>{
    returnToDispatch(dispatch,WholeSalesTypes.GETALL_CLIENT_START);
    const url = CLIENT_INSERT;
    console.log("REQUEST:",request);
    serverCall({url:url,request:request,method:'get',header:true})
    .then((response)=>{
        returnToDispatch(dispatch,WholeSalesTypes.GETALL_CLIENT_SUCCESS,response.data.data);
    })
    .catch((error)=>{
        returnToDispatch(dispatch,WholeSalesTypes.GETALL_CLIENT_FAILURE,error);
        setTimeout(()=>{
            alert(error);
        },100)
    });
};




const returnToDispatch=(dispatch,type,payload)=>{
    dispatch({type: type, payload: payload});
}