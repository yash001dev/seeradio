import React from "react";
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
import {AiFillForward} from "react-icons/ai";
const AdvertiserForm = (props) => {
  return (
    <div className="main">
      <h5 className="typo__title">Add New Advertiser</h5>
      <Container className="main__container">
        <Form className="main__form">
          <Row form>
            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="companyName">
                  Company Name
                </Label>
                <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Company Name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="companyWebsite">
                  Company Website Address
                </Label>
                <Input
                  type="text"
                  name="companyWebsite"
                  id="companyWebsite"
                  placeholder="e.g www.abc.com"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="industryCategory">
                  Industry Category
                </Label>
                <Input
                  type="select"
                  name="industryCategory"
                  id="industryCategory"
                  placeholder="Industry Category"
                >
                  <option value="" selected disabled>
                    Select...
                  </option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col className="separate__label" md={12}>
              <Label>Primary Contact</Label>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="firstName">
                  First Name
                </Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="lastName">
                  Last Name
                </Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="email">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="phone">
                  Phone
                </Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Contact Number"
                />
              </FormGroup>
            </Col>
          </Row>

            <FormGroup className="form-group separate__label  " check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label className="control-label" for="exampleCheck" check>
              Secondary Contact(Billing-Optional)
            </Label>
          </FormGroup>


          <Row form>
            <Col className="separate__label" md={12}>
              <Label>Business Address</Label>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="address">
                  Address
                </Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Address"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="address2">
                  Address line 2
                </Label>
                <Input
                  type="text"
                  name="address2"
                  id="address2"
                  placeholder="Enter Address"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="city">
                  City
                </Label>
                <Input type="text" name="city" id="city" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="country">
                  Country
                </Label>
                <Input type="select" name="country" id="exampleState">
                  <option value="" selected disabled>
                    Select...
                  </option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="state">
                  State/Province
                </Label>
                <Input disabled type="select" name="state" id="state">
                  <option value="" selected disabled>
                    Select...
                  </option>
                </Input>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup className="form-group required">
                <Label className="control-label" for="state">
                  Postal
                </Label>
                <Input type="text" name="postal" id="postal" />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="form-group separate__label  " check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label className="control-label" for="exampleCheck" check>
              Billing Address(Optional)
            </Label>
          </FormGroup>

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom:'2%' }}>
            <Button style={{width:'15%',borderBottom:'double'}} outline color="secondary">
              Cancel
            </Button>
            <Button style={{ marginLeft: "5px",borderBottom:'double' }} color="primary">
              Create Advertiser<span><AiFillForward/></span>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AdvertiserForm;
