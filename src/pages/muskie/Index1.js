import React, { Component } from 'react';
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from './section';
import Service from "../../components/Service/service";
import CTABanner from "../../components/CTA/CTABanner";
import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/footer";
import About from '../../components/About/about';
import GetInTouch from '../../components/Contact/get-in-touch';

class Muskie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                { id: 1, idnm: "home", navheading: "Home" },
                { id: 2, idnm: "about", navheading: "About Us" },
                { id: 3, idnm: "services", navheading: "Services" },
                { id: 4, idnm: "portfolio", navheading: "Portfolio" },
                { id: 5, idnm: "contact", navheading: "Contact Us" }
            ],
            pos: document.documentElement.scrollTop,
            imglight: true,
            navClass: ""
        };

    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
        console.log(process.env.REACT_APP_CONTACT_EMAIL_SERVICE_ID)
        console.log("this is here")

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
        
    }

    scrollToContact = () => {
        const contactComponent = document.getElementById("contact")
        contactComponent.scrollIntoView({ behavior: "smooth" })
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > this.state.pos) {
            this.setState({ navClass: "nav-sticky", imglight: false });
        }
        else {
            this.setState({ navClass: "", imglight: true });
        }
    };

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} imglight={this.state.imglight} />

                {/* Importing section */}
                <Section scrollToContact={this.scrollToContact}/>

                {/* Importing section */}
                <About />

                {/* Importing Service */}
                <Service />

                {/* CTA Banner - Visual break between sections */}
                <CTABanner scrollToContact={this.scrollToContact} />

                {/* Importing Portfolio */}
                <Portfolio />

                {/* Importing Contact */}
                <GetInTouch id="contact" />
                
                {/* Importing Footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Muskie;