import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from "reactstrap";
import "./AdvertiserForm.styles.css";
import { AiFillForward } from "react-icons/ai";
import Separator from "../../components/UI/Seperator/Separator.index";
import InputField from "../../components/UI/Input/Input.index";
import DropDown from "../../components/UI/DropDown/DropDown.index";
import InputFields from "./../../constant/form.constant";

const AdvertiserForm = (props) => {
  const {
    CompanyName,
    CompanyWeb,
    IndustryCategory,
    FirstName,
    LastName,
    Email,
    Phone,
    Address,
    Address2,
    City,
    State,
    Country,
    Postal,
  } = InputFields;


  const [billing,setBilling]=useState(false);
  const [secondary,setSecondary]=useState(false);
  
  function formSubmitHandle(e){
      e.preventDefault();
      props.forward();
  }

  return (
    <div className="parent__container">
      <Container className="main__container">
        <h5 className="main__container__title">Add New Advertiser</h5>
        <Container className="main__container__form">
          <Form className="main__form" onSubmit={formSubmitHandle}>
            <Row form>
              <InputField
                required
                grid={CompanyName.grid}
                name={CompanyName.name}
                label={CompanyName.label}
                placeholder={CompanyName.placeholder}
                type="text"
              />

              <InputField
                required
                grid={CompanyWeb.grid}
                name={CompanyWeb.name}
                label={CompanyWeb.label}
                placeholder={CompanyWeb.placeholder}
                type="text"
              />
            </Row>

            <Row form>
              <DropDown
                required
                grid={IndustryCategory.grid}
                name={IndustryCategory.name}
                label={IndustryCategory.label}
                placeholder={IndustryCategory.placeholder}
                disabled={IndustryCategory.disabled}
              />
            </Row>

            <Row form>
              <Separator label="Primary Contact" />
            </Row>

            <Row form>
              <InputField
                required
                grid={FirstName.grid}
                name={FirstName.name}
                label={FirstName.label}
                placeholder={FirstName.placeholder}
                type="text"
              />
              <InputField
                required
                grid={LastName.grid}
                name={LastName.name}
                label={LastName.label}
                placeholder={LastName.placeholder}
                type="text"
              />
            </Row>

            <Row form>
              <InputField
                required
                grid={Email.grid}
                name={Email.name}
                label={Email.label}
                placeholder={Email.placeholder}
                type="text"
              />
              <InputField
                required
                grid={Phone.grid}
                name={Phone.name}
                label={Phone.label}
                placeholder={Phone.placeholder}
                type="text"
              />
            </Row>

            <FormGroup className="form-group separate__label  " check>
            <Input onChange={()=>setSecondary(!secondary)} type="checkbox" name="check" id="exampleCheck" />
            <Label className="control-label" for="exampleCheck" check>
              Secondary Contact(Billing-Optional)
            </Label>
          </FormGroup>


          {secondary?(<>
              <Row form>
              <InputField
                
                grid={FirstName.grid}
                name={FirstName.name}
                label={FirstName.label}
                placeholder={FirstName.placeholder}
                type="text"
              />
              <InputField
                
                grid={LastName.grid}
                name={LastName.name}
                label={LastName.label}
                placeholder={LastName.placeholder}
                type="text"
              />
            </Row>

            <Row form>
              <InputField
                
                grid={Email.grid}
                name={Email.name}
                label={Email.label}
                placeholder={Email.placeholder}
                type="text"
              />
              <InputField
                
                grid={Phone.grid}
                name={Phone.name}
                label={Phone.label}
                placeholder={Phone.placeholder}
                type="text"
              />
            </Row>

          </>):null}

            <Row form>
              <Separator label="Business Address" />
            </Row>

            <Row form>
              <InputField
                required
                grid={Address.grid}
                name={Address.name}
                label={Address.label}
                placeholder={Address.placeholder}
                type="text"
              />
              <InputField
                required
                grid={Address2.grid}
                name={Address2.name}
                label={Address2.label}
                placeholder={Address2.placeholder}
                type="text"
              />
            </Row>

            <Row form>
              <InputField
                required
                grid={City.grid}
                name={City.name}
                label={City.label}
                placeholder={City.placeholder}
                type="text"
              />
              <InputField
                required
                grid={Country.grid}
                name={Country.name}
                label={Country.label}
                placeholder={Country.placeholder}
              />
            </Row>


            {billing?(<>
            <Row form>
              <Separator label="Business Address" />
            </Row>

            <Row form>
              <InputField
                
                grid={Address.grid}
                name={Address.name}
                label={Address.label}
                placeholder={Address.placeholder}
                type="text"
              />
              <InputField
                
                grid={Address2.grid}
                name={Address2.name}
                label={Address2.label}
                placeholder={Address2.placeholder}
                type="text"
              />
            </Row>

            <Row form>
              <InputField
                
                grid={City.grid}
                name={City.name}
                label={City.label}
                placeholder={City.placeholder}
                type="text"
              />
              <InputField
                
                grid={Country.grid}
                name={Country.name}
                label={Country.label}
                placeholder={Country.placeholder}
              />
            </Row>
              
            </>):null}

            <FormGroup className="form-group separate__label  " check>
            <Input onChange={()=>setBilling(!billing)} type="checkbox" name="check" id="exampleCheck" />
            <Label className="control-label" for="exampleCheck" check>
              Billing Address(Optional)
            </Label>
          </FormGroup>

            <Row form>
              <DropDown
                required
                grid={State.grid}
                name={State.name}
                label={State.label}
                placeholder={State.placeholder}
                disabled={State.disabled}
              />

              <InputField
                required
                grid={Postal.grid}
                name={Postal.name}
                label={Postal.label}
                placeholder={Postal.placeholder}
                type="text"
              />
            </Row>


          
            <div className="button__group">
              <Button type="submit" onClick={props.forward} style={{margin:'2%',borderBottom:"double",}} color="secondary">Cancel</Button>
              <Button style={{ margin:'2%',borderBottom:"double"}} color="primary">Create Advertiser<AiFillForward/></Button>
            </div>
        


          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default AdvertiserForm;
