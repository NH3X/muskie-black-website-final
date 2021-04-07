import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Animated } from "react-animated-css";
import emailjs from 'emailjs-com'

//Import Section Title
import SectionTitle from "../common/section-title";
import Spinner from "reactstrap/lib/Spinner";

class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      email: "",
      subject: "",
      message: "",
      msgSendSuccess: false,
      msgSending: false,
      hideForm: false
    };
  }

  handleSubmit = async () => {
    let emailPattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

    if (
      this.state.firstname !== "" &&
      this.state.email !== "" &&
      emailPattern.test(this.state.email) &&
      this.state.subject !== "" &&
      this.state.message !== ""
    ) {
      this.setState({ msgSending: true })
      try {
        const templateParams = {
          name: this.state.firstname,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message
        }

        await emailjs.send(
          "service_py8a7tr",
          "template_cnd9aog",
          templateParams,
          "user_6WGLR1NzOxFCpLcgE0Ag8"
        ).then(response => {
          this.setState({ msgSendSuccess: true, msgSending: false });
          console.log("Success!", response.status, response.text)
          this.myFormRef.reset();
        })
      } catch (e) {
        this.setState({ msgSendSuccess: false, msgSending: false });
        console.log("Failed!", e)
      }
    }
  };

  onInputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="contact">
          <Container>
            
            <SectionTitle
              subtitle="Contact Us"
              title="Get In Touch"
            />
            <div className="custom-form pt-4 mt-4">
              

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
                        <h3 className="text-primary">Email Sent Successfully.</h3>
                        <p>
                          Thank you <strong>{this.state.firstname}</strong>,
                          your message has been submitted to us. Someone will be in touch with you shortly.
                        </p>
                      </div>
                    </fieldset>
                  </Animated>
                ) : null}
              </div>

              {
                this.state.msgSending ?
                  (
                    <div className="d-flex justify-content-center float">
                      <Spinner
                        style={{ width: '3rem', height: '3rem' }} />
                    </div>
                  ) : (
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
                              disabled={this.state.msgSending}
                              errorMessage="Enter First Name"
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="validationCustom01"
                              onChange={(e) => this.onInputChangeHandler(e)}
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
                              disabled={this.state.msgSending}
                              errorMessage="Enter Valid Email Adress"
                              className="form-control"
                              validate={{
                                required: { value: true },
                                email: { value: true },
                              }}
                              onChange={(e) => this.onInputChangeHandler(e)}
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
                              disabled={this.state.msgSending}
                              errorMessage="Enter Subject Name"
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="validationCustom01"
                              onChange={(e) => this.onInputChangeHandler(e)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <Label for="message">Message</Label>
                            <AvField
                              type="textarea"
                              name="message"
                              id="message"
                              disabled={this.state.msgSending}
                              rows="4"
                              className="form-control"
                              errorMessage="Enter your message."
                              placeholder="Your message..."
                              validate={{ required: { value: true } }}
                              onChange={(e) => this.onInputChangeHandler(e)}
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
                            className="submitBnt btn btn-dark btn-custom"
                            value="Send Message"
                          />
                          <div id="simple-msg"></div>
                        </Col>
                      </Row>
                    </AvForm>
                )
              }

            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetInTouch;
