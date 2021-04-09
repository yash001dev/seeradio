import React from "react";
import { Container, Row } from "react-bootstrap";
import { Button, Form } from "reactstrap";
import InputField from "../../components/UI/Input/Input.index";
import "./AddOrderForm.styles.css";
import DropDown from "./../../components/UI/DropDown/DropDown.index";
import Separator from "./../../components/UI/Seperator/Separator.index";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { connect } from "react-redux";
import {
  getAllClient,
  getAllMarket,
  addCampaign,
} from "./../../redux/wholsale/wholsale.actions";
import OrderFields from "./../../constant/order.constant";
import useOrder from "./useOrder";
import validateOrderInfo from "./AddOrder.validate";

function AddOrderForm(props) {
  const {
    Advertiser,
    Title,
    PageUrl,
    Price,
    Description,
    TargetMarket,
    Budget,
  } = OrderFields;

  const customData = useOrder(
    validateOrderInfo,
    props.forward,
    props.getAllClient,
    props.getAllMarket,
    props.clientInsertData,
    props.addCampaign,
    false
  );

  return (
    <div className="parent__container">
      <Container className="main__container">
        <h5 className="main__container__title">Add New Orders</h5>
        <Container className="main__container__form">
          <Form className="main__form" onSubmit={customData.handleSubmit}>
            <Row form>
              <Separator label="Order" />
            </Row>
            {console.log("CUSTOMDATA:",props.clientInsertData)}
            <Row form>
              <DropDown
                required
                grid={Advertiser.grid}
                name={Advertiser.name}
                label={Advertiser.label}
                placeholder={Advertiser.placeholder}
                disabled={Advertiser.disabled}
                id={true}
                options={props.advertiser ? props.advertiser : null}
                rename={true}
                onChange={customData.handleChange}
              />

              <InputField
                required
                grid={Title.grid}
                name={Title.name}
                label={Title.label}
                placeholder={Title.placeholder}
                type="text"
                invalid={customData.errors.title && true}
                helper={
                  customData.errors.title && customData.errors.title
                }
                onChange={customData.handleChange}
                value={customData.values.title}
              />
            </Row>

            <Row form>
              <InputField
                required
                grid={PageUrl.grid}
                name={PageUrl.name}
                label={PageUrl.label}
                placeholder={PageUrl.placeholder}
                type="text"
                invalid={customData.errors.pageUrl && true}
                helper={
                  customData.errors.pageUrl && customData.errors.pageUrl
                }
                onChange={customData.handleChange}
                value={customData.values.pageUrl}
              />

              <InputField
                required
                grid={Price.grid}
                name={Price.name}
                label={Price.label}
                placeholder={Price.placeholder}
                type="text"
                invalid={customData.errors.price && true}
                helper={
                  customData.errors.price && customData.errors.price
                }
                onChange={customData.handleChange}
                value={customData.values.price}
              />
            </Row>

            <Row form>
              <InputField
                required
                grid={Description.grid}
                name={Description.name}
                label={Description.label}
                placeholder={Description.placeholder}
                type="textarea"
                invalid={customData.errors.description && true}
                helper={
                  customData.errors.description && customData.errors.description
                }
                onChange={customData.handleChange}
                value={customData.values.description}
              />
            </Row>

            <Row form>
              <Separator label="Distribution" />
            </Row>

            <Row form>
              <DropDown
                required
                grid={TargetMarket.grid}
                name={TargetMarket.name}
                value={true}
                label={TargetMarket.label}
                placeholder={TargetMarket.placeholder}
                disabled={TargetMarket.disabled}
                options={props.marketer ? props.marketer : null}
                id={true}
                onChange={customData.handleChange}
              />

              <InputField
                required
                grid={Budget.grid}
                name={Budget.name}
                label={Budget.label}
                placeholder={Budget.placeholder}
                type="text"
                invalid={customData.errors.budget && true}
                helper={
                  customData.errors.budget && customData.errors.budget
                }
                onChange={customData.handleChange}
                value={customData.values.budget}
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
                  onClick={() => props.backward()}
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
                  type="submit"
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

const mapStateToProps = (state) => {
  return {
    marketer: state.wholesale.marketer,
    advertiser: state.wholesale.clientData,
    clientInsertData: state.wholesale.clientInsertData,
  };
};

export default connect(mapStateToProps, { getAllClient, getAllMarket,addCampaign })(
  AddOrderForm
);
