export default function LoginValidation(value){
    let errors={}
    if(!value.email){
        errors.email="Email Address required"
    }else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value.email)){
        errors.email="Email address is invalid"
    }

    if(!value.password){
        errors.password="Password required"
    }

    return errors;
}