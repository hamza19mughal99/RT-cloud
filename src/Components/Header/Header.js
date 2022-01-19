import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <React.Fragment>
            <Navbar expand="lg" className="Navbar-header">
                <Container>
                <NavLink to="/"><img src={Logo} alt={'logo'}/></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <div className="navbar-nav">
                            <NavLink className="nav_link"  to={'/'}>Home </NavLink>
                            <NavLink className="nav_link"  to={'/about-us'}>About Us</NavLink>
                            <NavLink className="nav_link"  to={'/service'}>Service</NavLink>
                            <NavLink className="nav_link" to={'/contact-us'}>Contact us</NavLink>
                        </div>
                    </Nav>
                    <NavLink to={'/contact-us'}> <button className={'get_started_btn'}>Get Started</button> </NavLink>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};
export default Header;
