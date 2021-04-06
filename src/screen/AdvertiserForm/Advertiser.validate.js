export default function AdvertiserValidate(values,billing){
    let errors ={}
    console.log("BILLING:",billing)
    if(!values.companyname){
        errors.companyname ='Company Name is required';
    }

    if(!values.companywebsiteaddress){
        errors.companywebsiteaddress ="Company Website Address is required";
    }

    // if(!values.industrycategory){
    //     errors.industrycategory ="Industry Category is required";
    // }

    if(!values.firstname){
        errors.firstname ="First Name is required";
    }

    if(!values.lastname){
        errors.lastname ="Last Name is required";
    }

    if(!values.email){
        errors.email="Email Address required"
    }else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)){
        errors.email="Email address is invalid"
    }

   if(!values.phone){
        errors.phone="Contact phone must be required"
    }else if(!/^\d{10}$/i.test(values.phone)){
        errors.phone="Phone number is invalid"
    }

    if(!values.address){
        errors.address="Address is Required"
    }

    if(!values.address2){
        errors.address2="Address is Required"
    }

    if(!values.city){
        errors.city="City is Required"
    }

    if(!values.country){
        errors.country="Country is Required"
    }

    if(!values.postal){
        errors.postal="Postal is Required"
    }

    if(billing){
        console.log("Billing:",billing)
        if(!values.address1_2){
            errors.address1_2="Address is Required"
         }

        if(!values.address2_2){
            errors.address2_2="Address is Required"
        }

        if(!values.city2){
            errors.city2="City is Required"
        }

        if(!values.country2){
            errors.country2="Country is Required"
        }

        if(!values.postal2){
            errors.postal2="Postal is Required"
        }
    }
    // if(!values.state){
    //     errors.state="State is Required"
    // }

    // if(!values.postal){
    //     errors.postal="Postal is Required"
    // }
    return errors;
}