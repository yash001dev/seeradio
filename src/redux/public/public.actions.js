import {GETCOUNTRY_URL,GETSTATE_URL} from '../../constant/apit.constant';
import { serverCall } from './../../serverCall';
import PublicTypes from './public.types';


export const getCountry = (request)=>(dispatch)=>{
    returnToDispatch(dispatch,PublicTypes.GETCOUNTRY_START);
    const url = GETCOUNTRY_URL;
    console.log("REQUEST:",request);
    serverCall({url:url,request:'',method:'get'})
    .then((response)=>{
        returnToDispatch(dispatch,PublicTypes.GETCOUNTRY_SUCCESS,response.data.data);
    })
    .catch((error)=>{
        returnToDispatch(dispatch,PublicTypes.GETCOUNTRY_FAILURE,error);
        setTimeout(()=>{
            alert(error);
        },100)
    });
};


export const getState = (request)=>(dispatch)=>{
    returnToDispatch(dispatch,PublicTypes.GETSTATE_START);
    const url = GETSTATE_URL+`/${request}`;
    console.log("REQUEST:",request);
    serverCall({url:url,request:'',method:'get'})
    .then((response)=>{
        returnToDispatch(dispatch,PublicTypes.GETSTATE_SUCCESS,response.data.data);
    })
    .catch((error)=>{
        returnToDispatch(dispatch,PublicTypes.GETSTATE_FAILURE,error);
        setTimeout(()=>{
            alert(error);
        },100)
    });
};


const returnToDispatch=(dispatch,type,payload)=>{
    dispatch({type: type, payload: payload});
}