import React from "react";
import { Container } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from "reactstrap";
import './AdvertiserForm.styles.css';
const AdvertiserForm = (props) => {
  return (
    <div className="main">
      <h5 className="typo__title">Add New Advertiser</h5>
    <Container className="main__container">
      <Form className="main__form">
      <Row form>
        <Col md={6}>
          <FormGroup className="form-group required">
            <Label className="control-label" for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup className="form-group required">
            <Label className="control-label" for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup className="form-group required">
        <Label className="control-label" for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup className="form-group required">
        <Label className="control-label" for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup className="form-group required">
            <Label className="control-label" for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className="form-group required">
            <Label className="control-label" for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup className="form-group required">
            <Label className="control-label" for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup className="form-group required" check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label className="control-label" for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button>Sign in</Button>
    </Form>
    </Container>
    </div>
  );
};

export default AdvertiserForm;
