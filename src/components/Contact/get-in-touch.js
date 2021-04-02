import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Animated } from "react-animated-css";

//Import Section Title
import SectionTitle from "../common/section-title";

class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      email: "",
      subject: "",
      comments: "",
      msgSendSuccess: false,
    };
  }

  handleSubmit = () => {
    let emailPattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

    if (
      this.state.firstname !== "" &&
      this.state.email !== "" &&
      emailPattern.test(this.state.email) &&
      this.state.subject !== "" &&
      this.state.comments !== ""
    ) {
      this.setState({ msgSendSuccess: true });
      this.myFormRef.reset();

      setTimeout(() => {
        this.setState({ msgSendSuccess: false });
      }, 5000);
    }
  };

  onInputChangeHandlar = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <section className="section " id="contact">
          <Container>
            <SectionTitle title1="Get In" title2="Touch" />
            <div className="custom-form mt-4 pt-4">
              <div id="message">
                {this.state.msgSendSuccess ? (
                  <Animated
                    animationIn="bounceIn"
                    animationOut="flash"
                    animationInDuration={1000}
                    animationOutDuration={1000}
                    isVisible={true}
                  >
                    <fieldset>
                      <div id="success_page">
                        <h3>Email Sent Successfully.</h3>
                        <p>
                          Thank you <strong>{this.state.firstname}</strong>,
                          your message has been submitted to us.
                        </p>
                      </div>
                    </fieldset>
                  </Animated>
                ) : null}
              </div>
              <AvForm
                name="contact-form"
                id="contact-form"
                ref={(el) => (this.myFormRef = el)}
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <AvField
                        name="firstname"
                        placeholder="Your name..."
                        type="text"
                        errorMessage="Enter First Name"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom01"
                        onChange={(e) => this.onInputChangeHandlar(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label for="email">Email address</Label>
                      <AvField
                        name="email"
                        placeholder="Your email..."
                        type="email"
                        errorMessage="Enter Valid Email Adress"
                        className="form-control"
                        validate={{
                          required: { value: true },
                          email: { value: true },
                        }}
                        onChange={(e) => this.onInputChangeHandlar(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label for="subject">Subject</Label>
                      <AvField
                        name="subject"
                        placeholder="Your Subject.."
                        type="text"
                        errorMessage="Enter Subject Name"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom01"
                        onChange={(e) => this.onInputChangeHandlar(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label for="comments">Message</Label>
                      <AvField
                        type="textarea"
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control"
                        errorMessage="Enter your message."
                        placeholder="Your message..."
                        validate={{ required: { value: true } }}
                        onChange={(e) => this.onInputChangeHandlar(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="text-right">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="submitBnt btn btn-primary btn-custom"
                      value="Send Message"
                    />
                    <div id="simple-msg"></div>
                  </Col>
                </Row>
              </AvForm>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetInTouch;
