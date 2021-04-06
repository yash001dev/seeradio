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


export const getState = (request,options)=>(dispatch)=>{
    let second;
    console.log("GETSTATEOptions:",options);
    if(options){
        second = options.second;
    }
    console.log("Second:",second);
    returnToDispatch(dispatch,second?PublicTypes.GETSTATE2_START:PublicTypes.GETSTATE_START);
    const url = GETSTATE_URL+`/${request}`;
    console.log("REQUEST:",request);
    serverCall({url:url,request:'',method:'get'})
    .then((response)=>{
        returnToDispatch(dispatch,!second?PublicTypes.GETSTATE_SUCCESS:PublicTypes.GETSTATE2_SUCCESS,response.data.data);
    })
    .catch((error)=>{
        returnToDispatch(dispatch,!second?PublicTypes.GETSTATE_FAILURE:PublicTypes.GETSTATE2_FAILURE,error);
        setTimeout(()=>{
            alert(error);
        },100)
    });
};


const returnToDispatch=(dispatch,type,payload)=>{
    dispatch({type: type, payload: payload});
}