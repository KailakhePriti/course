import React from 'react'
import '../css/Nbar.css'
import call from '../images/call.png'
import email from '../images/email.png'
import location from '../images/location.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

export default function Nbar() {
    return (
        <div>
            
            <Navbar color="inverse" light expand="md" className="header_nav">
                    <NavbarBrand href="/"  style={{color: 'white'}}>
                            <img src={call} alt="..................."/>1800-419-8902 &nbsp;   | 
                    </NavbarBrand>
                    
                    <NavbarBrand href="/" style={{marginLeft: '3rem',color: 'white'}}>
                        <img src={email} alt="..................."/>info@speedlabs.in     
                    </NavbarBrand>
                    
                    
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/" style={{color: 'white'}}> <img src={location} alt="..................."/> Address: 9015 Sunset Boulevard United Kingdom </NavLink>
                            </NavItem>
                            
                        </Nav>
                    
                </Navbar>

            
        </div>
    )
}
