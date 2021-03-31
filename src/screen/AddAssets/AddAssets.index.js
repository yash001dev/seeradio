import React from "react";
import "./AddAssets.styles.css";
import { Container } from "reactstrap";
import { Form } from "reactstrap";
import { Row } from "reactstrap";
import Separator from "./../../components/UI/Seperator/Separator.index";
import { Button } from "reactstrap";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiFillBackward } from "react-icons/ai";
import { AiFillForward } from "react-icons/ai";
function AddAsset() {
  return (
    <div className="parent__container">
      <Container className="main__container">
        <h5 className="main__container__title">Test</h5>
        <Container className="main__container__form">
          <Form className="main__form">
            <Row form>
              <Separator label="Script File" />
            </Row>

            <div className="main__container__file">
              <div className="main__text">
                <div style={{ margin: "5%" }}>
                  <IoDocumentTextSharp
                    style={{ fontSize: "3em", color: "#00bfff" }}
                  />
                  Drag & Drop Your Script File Here
                </div>
              </div>
              <div className="main__text__middle">
                <h3>OR</h3>
              </div>
              <div className="main__text__button">
                <Button
                  style={{
                    borderBottom: "double",
                    marginBottom: "20%",
                    color: "black",
                    backgroundColor: "white",
                    width: "140%",
                  }}
                >
                  UPLOAD
                </Button>{" "}
              </div>
            </div>

            <Row form>
              <Separator label="Voice File" />
            </Row>

            <div className="main__container__file">
              <div className="main__text">
                <div style={{ margin: "5%" }}>
                  <IoDocumentTextSharp
                    style={{ fontSize: "3em", color: "#00bfff" }}
                  />
                  Drag & Drop Your Audio File Here
                </div>
              </div>
              <div className="main__text__middle">
                <h3>OR</h3>
              </div>
              <div className="main__text__button">
                <Button
                  style={{
                    borderBottom: "double",
                    marginBottom: "20%",
                    color: "black",
                    backgroundColor: "white",
                    width: "140%",
                  }}
                >
                  UPLOAD
                </Button>{" "}
              </div>
            </div>

            <Row form>
              <Separator label="Advertiser Assets" />
            </Row>

            <div className="main__container__file">
              <div className="main__text">
                <div style={{ margin: "5%" }}>
                  <IoDocumentTextSharp
                    style={{ fontSize: "3em", color: "#00bfff" }}
                  />
                  Drag & Drop Your File Here
                </div>
              </div>
              <div className="main__text__middle">
                <h3>OR</h3>
              </div>
              <div className="main__text__button">
                <Button
                  style={{
                    borderBottom: "double",
                    marginBottom: "20%",
                    color: "black",
                    backgroundColor: "white",
                    width: "140%",
                  }}
                >
                  UPLOAD
                </Button>{" "}
              </div>
            </div>

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
                  Done
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

export default AddAsset;
