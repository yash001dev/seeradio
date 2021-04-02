import { LOGIN_URL } from '../../constant/apit.constant';
import UserActionTypes from './person.types';
import { serverCall } from './../../serverCall';

export const loginUser=(request)=>(dispatch)=>{
    returnToDispatch(dispatch,UserActionTypes.SIGN_IN_START);
    const url = LOGIN_URL;
    console.log("REQUEST:",request);
    serverCall({url:url,request:request,method:'post',header:false})
    .then((response)=>{
        returnToDispatch(dispatch,UserActionTypes.SIGN_IN_SUCCESS,response.data.data);
    })
    .catch((error)=>{
        returnToDispatch(dispatch,UserActionTypes.SIGN_IN_FAILURE,error);
        setTimeout(()=>{
            alert(error);
        },100)
    });
};

const returnToDispatch=(dispatch,type,payload)=>{
    dispatch({type:type, payload:payload});
}