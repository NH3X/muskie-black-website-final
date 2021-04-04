import React from 'react'
import { Col } from 'reactstrap'
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'

const About = () => {
    return (
        <>
            <section className="section bg-light" id="about">
                <Container>
                    <Row className="justify-content-center mb-0">
                        <Col lg={10}>
                            <div className="text-center">
                                <h4 className=" text-primary mb-5">About Us</h4>
                                <p>We are a reputable, 100% female black owned company, providing Consulting, Administrative and Graphic design services. We strive to deliver a seamless customer experience while providing the highest quality out of office services. We provide these services according to each clients’ specific needs, and tailor make solutions which simplifying office management tasks. The outsourcing of these tasks allows our clients to better focus on their core business, while remaining compliant and attractive to their target markets.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default About
