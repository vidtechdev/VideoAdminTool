import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import { NavLink as RSNavLink } from 'reactstrap'; 
// import { Link, NavLink } from 'react-router-dom';

class AppNavBar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }  
    render() {
        return(
                <Navbar color="dark" dark expand="sm" className="mb-5" sticky="top">
                    <Container>
                        <NavbarBrand href="/">Video Admin Tool</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <RSNavLink href="/add">Add New Videos</RSNavLink>
                                    {/* <RSNavLink href="/update">Update A Video</RSNavLink>
                                    <RSNavLink href="/find">Find A Video</RSNavLink> */} 
                                    <RSNavLink href="/showall">All Videos</RSNavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
        );
    }
}

export default AppNavBar;