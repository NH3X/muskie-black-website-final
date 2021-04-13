import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : "edit", title : "Company Registration & Compliance", desc : "We provide services to help your company stay legal by ensuring that all your business documents and procedures comply with the Companies Act ( i.e rules and regulations, processes and policies etc) \n .-Company Registration Certificate, Income Tax Number, B-BBEE Certificate, Business Account (optional)" },
                { icon: "dollar-sign", title: "Bookkeeping", desc: "Your accounts in safe hands. We offer credible, precise and diligent bookkeeping services making it easy for you to keep track of your financial transactions." },
                { icon: "book-open", title: "Report Writing", desc: "We create surveys and analyse information compiled by clients for reports such as yearly, quarterly, annual, investors and projects etc" },
                { icon: "image", title: "Graphic Design", desc: "We make use of optic compositions to communicate and solve problems in the form of Visual designing, User Interface, Publication designs and Marketing & Advertising for your business." }
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
        <section className="section bg-light pb-0" id="services">
            <Container>
            <SectionTitle
                subtitle="Services"
                title="What we do"
            />

                <Row>
                    <ServiceBox services={this.state.services} />
                </Row>
                
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Process;