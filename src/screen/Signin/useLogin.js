
import { useState } from 'react';
import { useEffect } from 'react';

const useLogin=(validateInfo,loginAuth,history,loginStatus) => {
    const [values,setValue] =useState({
        email:"",
        password:"",
    })
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

  useEffect(() => {
      if(Object.keys(errors).length===0 && isSubmitting && btnClick) {
        loginAuth(
            values
        )
        console.log("useEffect is called...")
        setBtnClick(false);
      }
  },[errors,btnClick]);

  useEffect(() => {
    if(loginStatus){
        history.push('/dashboard/');
    }
  },[loginStatus])

  useEffect(() => {
    if (isSubmitting) {
      setErrors(validateInfo(values));
    }
  }, [values]);


  return {handleSubmit, handleChange, errors, values};
};

export default useLogin;