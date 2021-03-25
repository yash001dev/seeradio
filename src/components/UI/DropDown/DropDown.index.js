import React from "react";
import { Label, Input, FormGroup, Row, Col } from "reactstrap";
import "./DropDown.styles.css";

function DropDown(props) {
  return (
    
      <Col md={props.grid}>
        <FormGroup
          className={props.required ? "form-group required" : "form-group"}
        >
          <Label className="control-label" for={props.name}>
            {props.label}
          </Label>
          <Input disabled={props.disabled} type="select" name={props.name} id={props.name}>
            <option value="" selected disabled>
              {props.placeholder}
            </option>
            {props.options
              ? props.options.map((option) => {
                  return <option>{option}</option>;
                })
              : null}
          </Input>
        </FormGroup>
      </Col>
   
  );
}

export default DropDown;
