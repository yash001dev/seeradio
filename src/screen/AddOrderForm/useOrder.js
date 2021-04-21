import { useState, useEffect } from "react";

const useOrder = (validateInfo, forward,getAllClient,getAllMarket,previousResponse,formHandle,billingState) => {
 
  console.log("BILLING STATE:",billingState);
 
  const [values, setValue] = useState({
    advertiser: "",
    title: "",
    pageUrl: "",
    price: "",
    description: "",
    targetMarket: "",
    budget: "",
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



  useEffect(() => {
    async function DataInsert(){
      if (btnClick) {
      console.log("btnClick called");
      console.log(errors);
      if (Object.keys(errors).length === 0 && isSubmitting) {
        console.log("dsds");
        console.log("previousResponse:",previousResponse);
        formHandle({
            clientCompanyID:values.advertiser,
            title: values.title,
            description: values.description,
            landingpageURL: values.pageUrl,
            targetMarket: values.targetMarket,
            distributionBudget: values.budget,
            startDate: "04/22/2021",
            price: values.price,
            soaID: previousResponse.salesOrgCompany.soaID,
            sosID: previousResponse.salesOrgCompany.sosID,
            salesOrgCompanyID: previousResponse.salesOrgCompany.parentSalesOrgCompanyID,
            statusByPersonID: previousResponse.person.createdByPerson,
            statusWithPersonID: previousResponse.salesOrgCompany.clientPersonID

        });

        setTimeout(() => {
          formSubmitHandle();  
        }, 7000);

        
        
      }
      setBtnClick(false);
    }
    }

    DataInsert();
  }, [errors, btnClick]);

  useEffect(() => {
    if (isSubmitting) {
      setErrors(validateInfo(values));
    }
  }, [values]);


  useEffect(()=>{
    getAllClient()
    getAllMarket()
  },[])

  return { handleSubmit, handleChange, errors, values };
};

export default useOrder;