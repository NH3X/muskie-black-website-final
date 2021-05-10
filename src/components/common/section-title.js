import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="text-center mb-4">
                            <h4 className="mb-3 text-dark" style={{fontFamily: "Amsterdam", fontSize: "4em"}}>{this.props.title}</h4>
                            <h5 className="text-primary text-uppercase small-title">{this.props.subtitle}</h5>
                            <p>{this.props.desc}</p>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default SectionTitle;