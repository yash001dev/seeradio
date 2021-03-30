export default function validateOrderInfo(values){
    let errors={}

    if(!values.advertiser){
        errors.advertiser="Advertiser is Required";
    }

    if(!values.title){
        errors.title="Title is Required";
    }

    if(!values.landingUrl){
        errors.landingUrl="Landing URL is Required";
    }

    if(!values.Price){
        errors.Price="Price is Required";
    }

    if(!values.Description){
        errors.Description="Description is Required";
    }

    if(!values.targetmarket){
        errors.targetmarket="Target is Required";
    }

    if(!values.budget){
        errors.budget="Budget is Required";
    }
}