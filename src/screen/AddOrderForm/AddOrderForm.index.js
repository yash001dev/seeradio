import React from "react";
import { Container, Row,} from "react-bootstrap";
import { Button, Form, } from "reactstrap";
import InputField from "../../components/UI/Input/Input.index";
import "./AddOrderForm.styles.css";
import DropDown from "./../../components/UI/DropDown/DropDown.index";
import Separator from "./../../components/UI/Seperator/Separator.index";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
function AddOrderForm() {
  return (
    <div className="parent__container">
      <Container className="main__container">
        <h5 className="main__container__title">Add New Orders</h5>
        <Container className="main__container__form">
          <Form className="main__form">
            <Row form>
              <Separator label="Order" />
            </Row>

            <Row form>
              <DropDown
                required
                grid={6}
                name="advertiser"
                label="Advertiser"
                placeholder="Test Bacancy"
                disabled={true}
              />

              <InputField
                required
                grid={6}
                name="title"
                label="Title"
                placeholder="Title"
                type="text"
              />
            </Row>

            <Row form>
              <InputField
                required
                grid={6}
                name="landingUrl"
                label="Preferred Landing Page URL"
                placeholder="www.testbacancy.com"
                type="text"
              />

              <InputField
                required
                grid={6}
                name="price"
                label="Price"
                placeholder="Price"
                type="text"
              />
            </Row>

            <Row form>
              <InputField
                required
                grid={6}
                name="Description"
                label="Description"
                placeholder="Description"
                type="textarea"
              />
            </Row>

            <Row form>
              <Separator label="Distribution" />
            </Row>

            <Row form>
              <DropDown
                required
                grid={6}
                name="targetmarket"
                label="Target Market"
                placeholder="Calgary"
                disabled={true}
              />
              <InputField
                required
                grid={6}
                name="budget"
                label="Budget"
                placeholder="$0"
                type="text"
              />
            </Row>

            <div className="main__container__maingroup">
              <div className="main__container__btngroup1">
                <Button
                  style={{
                    borderBottom: "double",
                    marginBottom: "4%",
                    width: "150px",
                  }}
                  color="primary"
                >
                  <AiFillBackward />
                  Back
                </Button>{" "}
              </div>
              <div className="main__container__btngroup2">
                <Button
                  style={{
                    borderBottom: "double",
                    marginBottom: "4%",
                    width: "150px",
                  }}
                  color="secondary"
                >
                  Cancel
                </Button>{" "}
                <Button
                  style={{
                    borderBottom: "double",
                    marginBottom: "4%",
                    width: "150px",
                  }}
                  color="primary"
                >
                  Create Order
                  <AiFillForward />
                </Button>{" "}
              </div>
            </div>
          </Form>
        </Container>
      </Container>
    </div>
  );
}

export default AddOrderForm;
