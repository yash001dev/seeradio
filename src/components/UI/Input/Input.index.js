import React from "react";
import { Label,Input,FormGroup,Row,Col,FormFeedback } from 'reactstrap';
import './Input.styles.css';

function InputField(props) {
  return (
    
      <Col md={props.grid}>
        <FormGroup className={props.required?'form-group required':'form-group'}>
          <Label className="control-label" for={props.name}>
            {props.label}
          </Label>
          <Input
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            invalid={props.invalid}
            onChange={props.onChange}
          />
          <FormFeedback>{props.helper}</FormFeedback>
        </FormGroup>
      </Col>
    
  );
}

export default InputField;
