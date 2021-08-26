import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Media } from "reactstrap";
import FeatherIcon from 'feather-icons-react';

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
    state = {
        links1 : [
            { link : "#", title : "About Us" },
            { link : "#", title : "Media & Press" },
            { link : "#", title : "Career" },
            { link : "#", title : "Blog" },
        ],
        links2 : [
            { link : "#", title : "Pricing" },
            { link : "#", title : "For Marketing" },
            { link : "#", title : "For CEOs" },
            { link : "#", title : "For Agencies" },
            { link : "#", title : "Our Apps" },
        ],
    }
    render() {
        return (
			<React.Fragment>
				<footer className="footer">
					<Container>
						<Row>
							<Col lg={4} sm={6}>
								<div>
									<h5 className="mb-4 footer-list-title">
										About Muskie Black
									</h5>
									<p>
										We are skilled, independent
										professionals who remotely provide
										administrative, consulting and creative
										business support services{" "}
									</p>
									<Link
										to="/privacy"
                                        class="text-white"
									>
										View our Privacy Policy
									</Link>
								</div>
							</Col>

							<Col></Col>

							<Col lg={4} sm={6}>
								<div>
									<h5 className="mb-4 footer-list-title">
										Contact
									</h5>

									<div>
										<Media>
											<i>
												<FeatherIcon
													icon="mail"
													className="icon-dual-light icons-sm mt-1 mr-2"
												/>
											</i>
											<Media body>
												<p>info@muskieblack.co.za</p>
											</Media>
										</Media>
										<Media>
											<i>
												<FeatherIcon
													icon="phone"
													className="icon-dual-light icons-sm mt-1 mr-2"
												/>
											</i>
											<Media body>
												<p>+27 73 224 7068</p>
											</Media>
										</Media>
										<Media>
											<i>
												<FeatherIcon
													icon="facebook"
													className="icon-dual-light icons-sm mt-1 mr-2"
												/>
											</i>
											<Media body>
												<p
													style={{
														position: "relative",
													}}
												>
													Muskie Black Management &
													Consulting
													<a
														className="stretched-link"
														target="_blank"
														href="https://www.facebook.com/MuskieBlack"
													></a>
												</p>
											</Media>
										</Media>
										<Media>
											<i>
												<FeatherIcon
													icon="instagram"
													className="icon-dual-light icons-sm mt-1 mr-2"
												/>
											</i>
											<Media body>
												<p
													style={{
														position: "relative",
													}}
												>
													@muskie_black
													<a
														className="stretched-link"
														target="_blank"
														href="http://www.instagram.com/muskie_black"
													></a>
												</p>
											</Media>
										</Media>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</footer>
				{/* Render footer links */}
				<FooterLinks />
			</React.Fragment>
		)
    }
}

export default Footer;