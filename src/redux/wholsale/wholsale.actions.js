import {GETINDUSTRIES_URL} from '../../constant/apit.constant';
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


const returnToDispatch=(dispatch,type,payload)=>{
    dispatch({type: type, payload: payload});
}