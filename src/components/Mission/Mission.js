import React from 'react'
import { Container } from 'reactstrap'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'

const Mission = () => {
    return (
		<>
			<section className="small-section bg-primary">
				<Container>
					<Row>
						<Col lg={4}>
							<div className="hero-wrapper">
								<Row className="pt-4">
									<Col lg={4}>
										<h1
											className="hero-title text-white"
											style={{
												fontFamily: "Amsterdam",
												fontSize: "3em",
											}}
										>
											Our
										</h1>
									</Col>
									<Col lg={4}>
										<h1
											className="hero-title text-white"
											style={{
												fontFamily: "Amsterdam",
												fontSize: "3em",
											}}
										>
											Mission
										</h1>
									</Col>
								</Row>
							</div>
						</Col>
						<Col>
							<div>
								<p className="text-white font-20 pl-5">
									"To virtually provide clients with the
									highest quality office administration and
									graphic design services; allowing them to
									focus entirely on their core passion"
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}

export default Mission
