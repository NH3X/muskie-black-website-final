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
                { icon : "edit", title : "Company Registration & Compliance", desc : "If several languages coalesce, the grammar of the language." },
                { icon : "dollar-sign", title : "Bookkeeping & Tax Compliance", desc : "To an English person, it will seem like English as skeptical." },
                { icon : "book-open", title : "Report writing & Compilation", desc : "The languages only differ in their grammar their pronunciation" },
                { icon : "image", title : "Graphic Design", desc : "Everyone realizes why a new common would be desirable." }
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
        <section className="section bg-light" id="services">
            <Container>
            <SectionTitle
                subtitle="Services"
                title="Services We Provide"
                desc="It will be as simple as occidental in fact, it will be Occidental."
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