import { useState, useEffect } from "react";

const useAdvertiser = (validateInfo, forward) => {
  const [values, setValue] = useState({
    companyname: "",
    companywebsiteaddress: "",
    industrycategory: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
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
  });

  const [errors, setErrors] = useState({});

  const [btnClick,setBtnClick] =useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;

    setValue({
      ...values,
      [name]: value,
    });

    if (isSubmitting) {
      setErrors(validateInfo(values));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setErrors(validateInfo(values));
    setIsSubmitting(true);
    setBtnClick(true);
  };

  function formSubmitHandle() {
    forward();
  }

  useEffect(() => {
    if(btnClick){
      console.log("btnClick called");
      console.log(errors);
      if (Object.keys(errors).length === 0 && isSubmitting ) {
        console.log("dsds");
        formSubmitHandle();
      }
      setBtnClick(false);
    }
    

  }, [errors,btnClick]);

  useEffect(() => {
    if (isSubmitting) {
      setErrors(validateInfo(values));
    }
  }, [values]);

  return { handleSubmit, handleChange, errors, values };
};

export default useAdvertiser;
