import React from 'react'
import { Col } from 'reactstrap'
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import SectionTitle from '../common/section-title'
import Mission from '../Mission/Mission'

const About = () => {
    return (
        <>
            <section className="section bg-light pb-8"  id="about">
                <Container>
                    <Row className="justify-content-center mb-0">
                        <Col lg={10}>
                            <SectionTitle
                                subtitle="About Us"
                                title="Who we are"
                            />
                            <div className="text-center">
                                <p>We are a reputable, 100% female black owned company, providing Consulting, Administrative and Graphic design services. We strive to deliver a seamless customer experience while providing the highest quality out-of-office services. We provide these services according to each clients’ specific needs, and tailor make solutions; simplifying office management tasks. The outsourcing of these tasks allows our clients to better focus on their core business, while remaining compliant and attractive to their target markets.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
            <Mission />
        </>
    )
}

export default About
