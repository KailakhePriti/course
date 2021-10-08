import React from 'react'
import '../css/Subnav.css'
import logo from '../images/logo.png'
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


export default function Subnav() {
    return (
        <div>

<Navbar color="inverse" light expand="md" className="sub_navbar">
                    <NavbarBrand href="/">
                        <img src={logo} alt="..................." className="logo_img"/>
                       
                    </NavbarBrand>

                    <NavbarBrand href="/">
                            {/* <img src={call} alt="..................."/> */}
                    </NavbarBrand>
                    <NavbarBrand href="/" style={{color: '#6A2F85'}} >Home</NavbarBrand>
                    <NavbarBrand href="/" className="all_courses" style={{color: '#161616'}}>All courses</NavbarBrand>

                    <img   className="cart" src="https://img.icons8.com/ios/30/000000/bag-front-view.png"/>
                    <NavbarBrand className="cart_text" href="/" style={{color: '#161616'}}>Cart</NavbarBrand>

                    
                    
                </Navbar>
                
            
        </div>
    )
}
