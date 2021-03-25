import React from "react";
import { Label,Input,FormGroup,Row,Col } from 'reactstrap';
import './Input.styles.css';

function InputField(props) {
  return (
    <Row form>
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
          />
        </FormGroup>
      </Col>
    </Row>
  );
}

export default InputField;
