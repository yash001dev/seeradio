import React from "react";
import { Label, Input, FormGroup, Col } from "reactstrap";
import "./DropDown.styles.css";

function DropDown(props) {
    const getPropsValue=(option)=>{
      if(props.id){
        return option.id
      }
      if(props.value){
        return option.code
      }
      return null;
    }

    const getPropsName=(option)=>{
      console.log("OPTION:",option);
      if(props.rename){
        console.log("RENAME:",props.rename);
        return option.companyName
      }
      return option.name
    }
  return (
      <Col md={props.grid}>
        {console.log("PROPS:",props)}
        <FormGroup
          className={props.required ? "form-group required" : "form-group"}
        >
          <Label className="control-label" for={props.name}>
            {props.label}
          </Label>
          <Input disabled={props.disabled} type="select" name={props.name} id={props.name} onChange={props.onChange}>
            <option value="" selected disabled>
              {props.placeholder}
            </option>
            {props.options
              ? props.options.map((option,index) => {
                  return <option key={option.id} value={getPropsValue(option)}>{getPropsName(option)}</option>;
                })
              : null} 
          </Input>
        </FormGroup>
      </Col>
   
  );
}

export default DropDown;
