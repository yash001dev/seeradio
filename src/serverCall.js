export const serverCall = ({ url, request, method }) => {
  return new Promise((success, failure) => {
    let axios = require("axios");

    let allKeys = Object.keys(request);
    let allValues = Object.values(request);

    const formData = new FormData();
    allKeys.map((currentKey, index) => {
      formData.append(currentKey, allValues[index]);
    });

    console.log("FORMDATA:",request);

    axios({
      method: method,
      data: method === "post" ? request : null,
      params: method === "get" ? request : null,
      url: url,
      timeout: 1000 * 5,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        if (error.response) {
          failure(error.response.data.message);
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
