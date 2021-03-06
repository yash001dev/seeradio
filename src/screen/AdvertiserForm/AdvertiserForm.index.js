import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import "./AdvertiserForm.styles.css";
import { AiFillForward } from "react-icons/ai";
import Separator from "../../components/UI/Seperator/Separator.index";
import InputField from "../../components/UI/Input/Input.index";
import DropDown from "../../components/UI/DropDown/DropDown.index";
import InputFields from "./../../constant/form.constant";
import useAdvertiser from "./useAdvertiser";
import AdvertiserValidate from "./Advertiser.validate";
import { connect } from "react-redux";
import {
  addClient,
  getIndustries,
} from "../../redux/wholsale/wholsale.actions";
import { getCountry, getState } from "./../../redux/public/public.actions";

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
  const [billing, setBilling] = useState(false);
  const customData = useAdvertiser(
    AdvertiserValidate,
    props.forward,
    props.getIndustries,
    props.getCountry,
    props.getState,
    props.personId,
    props.addClient,
    props.stateError,
    billing?true:false
  );

  const [secondary, setSecondary] = useState(false);

  // function formSubmitHandle(e){
  //     e.preventDefault();
  //     props.forward();
  // }

  return (
    <div className="parent__container">
      <Container className="main__container">
        <h5 className="main__container__title">Add New Advertiser</h5>
        <Container className="main__container__form">
          <Form className="main__form" onSubmit={customData.handleSubmit}>
            <Row form>
              <InputField
                required
                grid={CompanyName.grid}
                name={CompanyName.name}
                label={CompanyName.label}
                placeholder={CompanyName.placeholder}
                type="text"
                invalid={customData.errors.companyname && true}
                helper={
                  customData.errors.companyname && customData.errors.companyname
                }
                onChange={customData.handleChange}
                value={customData.values.companyname}
              />

              <InputField
                required
                grid={CompanyWeb.grid}
                name={CompanyWeb.name}
                label={CompanyWeb.label}
                placeholder={CompanyWeb.placeholder}
                type="text"
                invalid={customData.errors.companywebsiteaddress && true}
                helper={
                  customData.errors.companywebsiteaddress &&
                  customData.errors.companyName
                }
                onChange={customData.handleChange}
                value={customData.values.companywebsiteaddress}
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
                options={props.industry ? props.industry : null}
                // invalid={customData.errors.industrycategory && true}
                // helper={customData.errors.industrycategory && customData.errors.industrycategory}
                onChange={customData.handleChange}
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
                invalid={customData.errors.firstname && true}
                helper={
                  customData.errors.firstname && customData.errors.firstname
                }
                onChange={customData.handleChange}
                value={customData.values.firstname}
              />
              <InputField
                required
                grid={LastName.grid}
                name={LastName.name}
                label={LastName.label}
                placeholder={LastName.placeholder}
                type="text"
                invalid={customData.errors.lastname && true}
                helper={
                  customData.errors.lastname && customData.errors.lastname
                }
                onChange={customData.handleChange}
                value={customData.values.lastname}
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
                invalid={customData.errors.email && true}
                helper={customData.errors.email && customData.errors.email}
                onChange={customData.handleChange}
                value={customData.values.email}
              />
              <InputField
                required
                grid={Phone.grid}
                name={Phone.name}
                label={Phone.label}
                placeholder={Phone.placeholder}
                type="text"
                invalid={customData.errors.phone && true}
                helper={customData.errors.phone && customData.errors.phone}
                onChange={customData.handleChange}
                value={customData.values.phone}
              />
            </Row>

            <FormGroup className="form-group separate__label  " check>
              <Input
                onChange={() => setSecondary(!secondary)}
                type="checkbox"
                name="check"
                id="exampleCheck"
              />
              <Label className="control-label" for="exampleCheck" check>
                Secondary Contact(Billing-Optional)
              </Label>
            </FormGroup>

            {secondary ? (
              <>
                <Row form>
                  <InputField
                    grid={FirstName.grid}
                    name="firstname2"
                    label={FirstName.label}
                    placeholder={FirstName.placeholder}
                    type="text"
                    onChange={customData.handleChange}
                    value={customData.values.firstname2}
                  />
                  <InputField
                    grid={LastName.grid}
                    name="lastname2"
                    label={LastName.label}
                    placeholder={LastName.placeholder}
                    type="text"
                    onChange={customData.handleChange}
                    value={customData.values.lastname2}
                  />
                </Row>

                <Row form>
                  <InputField
                    grid={Email.grid}
                    name="email2"
                    label={Email.label}
                    placeholder={Email.placeholder}
                    type="text"
                    onChange={customData.handleChange}
                    value={customData.values.email2}
                  />
                  <InputField
                    grid={Phone.grid}
                    name="phone2"
                    label={Phone.label}
                    placeholder={Phone.placeholder}
                    type="text"
                    onChange={customData.handleChange}
                    value={customData.values.phone2}
                  />
                </Row>
              </>
            ) : null}

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
                invalid={customData.errors.address && true}
                helper={customData.errors.address && customData.errors.address}
                onChange={customData.handleChange}
                value={customData.values.address}
              />
              <InputField
                required
                grid={Address2.grid}
                name={Address2.name}
                label={Address2.label}
                placeholder={Address2.placeholder}
                type="text"
                invalid={customData.errors.address2 && true}
                helper={
                  customData.errors.address2 && customData.errors.address2
                }
                onChange={customData.handleChange}
                // value={customData.values.address2}
                value={customData.values.address2}
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
                invalid={customData.errors.city && true}
                helper={customData.errors.city && customData.errors.city}
                onChange={customData.handleChange}
                value={customData.values.city}
              />

              <DropDown
                required
                grid={Country.grid}
                name={Country.name}
                value={true}
                label={Country.label}
                placeholder={Country.placeholder}
                disabled={Country.disabled}
                options={props.country ? props.country : null}
                // invalid={customData.errors.industrycategory && true}
                // helper={customData.errors.industrycategory && customData.errors.industrycategory}
                onChange={customData.handleChange}
              />
            </Row>

            <Row form>
              <DropDown
                required
                grid={State.grid}
                name={State.name}
                label={State.label}
                value={true}
                placeholder={State.placeholder}
                options={props.state ? props.state : null}
                // invalid={customData.errors.industrycategory && true}
                // helper={customData.errors.industrycategory && customData.errors.industrycategory}
                onChange={customData.handleChange}
              />

              <InputField
                required
                grid={Postal.grid}
                name={Postal.name}
                label={Postal.label}
                placeholder={Postal.placeholder}
                type="text"
                invalid={customData.errors.postal && true}
                helper={customData.errors.postal && customData.errors.postal}
                onChange={customData.handleChange}
                value={customData.values.postal}
              />
            </Row>

            <FormGroup className="form-group separate__label  " check>
              <Input
                onChange={() => setBilling(!billing)}
                type="checkbox"
                name="check"
                id="exampleCheck"
              />
              <Label className="control-label" for="exampleCheck" check>
                Billing Address(Optional)
              </Label>
            </FormGroup>

            {billing ? (
              <>
                <Row form>
                  <Separator label="Billing Address" />
                </Row>

                <Row form>
                  <InputField
                    required
                    grid={Address.grid}
                    name="address1_2"
                    label={Address.label}
                    placeholder={Address.placeholder}
                    type="text"
                    onChange={customData.handleChange}
                    value={customData.values.address1_2}
                    invalid={customData.errors.address1_2 && true}
                    helper={
                      customData.errors.address1_2 &&
                      customData.errors.address1_2
                    }
                  />
                  <InputField
                    required
                    grid={Address2.grid}
                    name="address2_2"
                    label={Address2.label}
                    placeholder={Address2.placeholder}
                    type="text"
                    onChange={customData.handleChange}
                    value={customData.values.address2_2}
                    invalid={customData.errors.address2_2 && true}
                    helper={
                      customData.errors.address2_2 &&
                      customData.errors.address2_2
                    }
                  />
                </Row>

                <Row form>
                  <InputField
                    required
                    grid={City.grid}
                    name="city2"
                    label={City.label}
                    placeholder={City.placeholder}
                    type="text"
                    onChange={customData.handleChange}
                    value={customData.values.city2}
                    invalid={customData.errors.city2 && true}
                    helper={customData.errors.city2 && customData.errors.city2}
                  />
                  <DropDown
                    required
                    grid={Country.grid}
                    name="country2"
                    label={Country.label}
                    value={true}
                    placeholder={Country.placeholder}
                    disabled={Country.disabled}
                    options={props.country ? props.country : null}
                    // invalid={customData.errors.industrycategory && true}
                    // helper={customData.errors.industrycategory && customData.errors.industrycategory}
                    onChange={customData.handleChange}
                    invalid={customData.errors.country2 && true}
                    helper={
                      customData.errors.country2 && customData.errors.country2
                    }
                  />
                </Row>

                <Row form>
                  <DropDown
                    required
                    grid={State.grid}
                    name="state2"
                    label={State.label}
                    value={true}
                    placeholder={State.placeholder}
                    options={props.state2 ? props.state2 : null}
                    // invalid={customData.errors.industrycategory && true}
                    // helper={customData.errors.industrycategory && customData.errors.industrycategory}
                    onChange={customData.handleChange}
                  />

                  <InputField
                    required
                    grid={Postal.grid}
                    name="postal2"
                    label={Postal.label}
                    placeholder={Postal.placeholder}
                    type="text"
                    invalid={customData.errors.postal && true}
                    helper={
                      customData.errors.postal && customData.errors.postal
                    }
                    onChange={customData.handleChange}
                    value={customData.values.postal}
                    invalid={customData.errors.postal2 && true}
                    helper={
                      customData.errors.postal2 && customData.errors.postal2
                    }
                  />
                </Row>
              </>
            ) : null}

            <div className="button__group">
              <Button
                type="submit"
                onClick={props.forward}
                style={{ margin: "2%", borderBottom: "double" }}
                color="secondary"
              >
                Cancel
              </Button>
              <Button
                style={{ margin: "2%", borderBottom: "double" }}
                color="primary"
              >
                Create Advertiser
                <AiFillForward />
              </Button>
            </div>
          </Form>
        </Container>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    industry: state.wholesale.industry,
    country: state.public.country,
    state: state.public.state,
    personId: state.person.person.personData.id,
    state2:state.public.state2,
    stateError:state.public.errors,
  };
};
export default connect(mapStateToProps, {
  getIndustries,
  getCountry,
  getState,
  addClient,
})(AdvertiserForm);

