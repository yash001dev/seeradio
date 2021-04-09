export default function validateOrderInfo(values){
    let errors={}

    // if(!values.advertiser){
    //     errors.advertiser="Advertiser is Required";
    // }

    if(!values.title){
        errors.title="Title is Required";
    }

    if(!values.pageUrl){
        errors.pageUrl="Landing URL is Required";
    }

    if(!values.price){
        errors.price="Price is Required";
    }

    if(!values.description){
        errors.description="Description is Required";
    }

    // if(!values.targetMarket){
    //     errors.targetMarket="Target is Required";
    // }

    if(!values.budget){
        errors.budget="Budget is Required";
    }

    return errors;
}