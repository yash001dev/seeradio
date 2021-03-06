import { useState, useEffect } from "react";
import { getCountry } from "../../redux/public/public.actions";

const useAdvertiser = (validateInfo, forward, getIndustries,getCountry, getState,personId,addClient,stateError,billingState) => {
 
  console.log("BILLING STATE:",billingState);
 
  const [values, setValue] = useState({
    companyname: "",
    companywebsiteaddress: "",
    industrycategory: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    address2: "",
    city: "",
    state: "",
    postal: "",
    firstname2: "",
    lastname2: "",
    email2: "",
    phone2: "",
    address1_2: "",
    address2_2: "",
    city2: "",
    country2: "",
    state2:"",
    postal2:"",
  });

  const [errors, setErrors] = useState({});

  const [btnClick, setBtnClick] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;

    setValue({
      ...values,
      [name]: value,
    });

    if (isSubmitting) {
      setErrors(validateInfo(values,billingState));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setErrors(validateInfo(values,billingState));
    setIsSubmitting(true);
    setBtnClick(true);
   
  };

  function formSubmitHandle() {
    forward();
  }

  function cleanObject(obj){
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName]=='') {
        delete obj[propName];
      }
    }
  return obj
  }



  useEffect(() => {
    if (btnClick) {
      console.log("btnClick called");
      console.log(errors);
      if (Object.keys(errors).length === 0 && isSubmitting) {
        console.log("dsds");
        let addData={
          companyName: values.companyname,
          industryID:'047b2594-d399-4cf9-97cc-b985bd530339',
          companyWebsite: values.companywebsiteaddress,
          companyType: "Client",
          contactAddress: {
            business: {
              address: values.address,
              address2: values.address2,
              city: values.city,
              postal: values.postal,
              country: values.country,
              state: values.state,
              provinceID: 2,
            },
            billing: {
              address: values.address1_2,
              address2: values.address2_2,
              city: values.city2,
              state: values.state2,
              postal: values.postal2,
              country: values.country2,
              provinceID: 2,
            },
            useSame: !billingState,
          },
          addressType: "Billing",
          firstName: values.firstname,
          lastName: values.lastname,
          email: values.email,
          phone: values.phone,
          secondaryContact: {
            firstName: values.firstname2,
            lastName: values.lastname2,
            email: values.email2,
            phone: values.phone2,
          },
          roleCode: "CLIENT",
          createdByPerson: personId,
        }
        addData=cleanObject(addData);
        addClient(addData);
        console.log("STATE ERROR:",stateError)
        if(!stateError){
        formSubmitHandle();
        }
        else{
          alert(stateError);
        }
      }
      setBtnClick(false);
    }
  }, [errors, btnClick]);

  useEffect(() => {
    if (isSubmitting) {
      setErrors(validateInfo(values));
    }
  }, [values]);

  useEffect(() => {
    getIndustries();
    getCountry();
  }, []);

  useEffect(() =>{
    if(values.country){
      getState(values.country)
    }
  },[values.country])
  
  useEffect(()=>{
    console.log("COUNTRY2:",values.country2);
    if(values.country2){
      getState(values.country2,{second:true})
    }
  },[values.country2])

  return { handleSubmit, handleChange, errors, values };
};

export default useAdvertiser;
