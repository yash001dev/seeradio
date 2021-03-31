import { LOGIN_URL } from '../../constant/apit.constant';
import UserActionTypes from './person.types';


export const loginUser=(request)=>(dispatch)=>{
    returnToDispatch(dispatch,UserActionTypes.SIGN_IN_START);
    const url = LOGIN_URL;
    serverCall({url:url,request:request,method:'post'})
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

returnToDispatch=(dispatch,type,payload)=>{
    dispatch({type:type, payload:payload});
}