import  store  from "./redux/store";

export const serverCall = ({ url, request, method,header,formMethod }) => {

  let token;
  if(header===true){
    token=store.getState().person.person.token
  }

  const config={
      "Content-type":!formMethod?"application/json":"multipart/form-data"
    
  }
  if(token){
    config["x-token"]=token;
  }

  return new Promise((success, failure) => {
    let axios = require("axios");

    let allKeys = Object.keys(request);
    let allValues = Object.values(request);

    const formData = new FormData();
    allKeys.map((currentKey, index) => {
      formData.append(currentKey, allValues[index]);
    });

    console.log("FORMDATA:",request);
    console.log("CONFIG:",config);
    axios({
      method: method,
      data: method === "post" ? request : null,
      params: method === "get" ? request : null,
      url: url,
      headers:config
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        if (error) {
          failure(error);
        }
        // else{
        //     failure(
        //           error.message === "Network Error"
        //             ? language.InternetConnection
        //             : language.InternetConnection
        //         );
        // }
      });
  });
};
