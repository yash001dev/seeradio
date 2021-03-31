export const serverCall=({url,request,method})=>{
    
    return new Promise((success,failure)=>{
    let axios=require('axios');
    axios({
        method:method,
        data:method==="post"?formData:null,
        params:method==="get"?request:null,
        url:url,
        timeout:1000*5,
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        if(error.response){
            failure(error.response.data.message);
        }
        // else{
        //     failure(
        //           error.message === "Network Error"
        //             ? language.InternetConnection
        //             : language.InternetConnection
        //         );
        // }
        })    
    })
}
