import React from 'react'
import '../css/Borderbox.css'

import symbol from '../images/symbol.png'
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

export default function Borderbox() {
    return (
        <div>
             <Navbar color="inverse" light expand="md" className="sub_navbar">
                    
                    <div className="box" style={{marginLeft: '50%'}}>
                        <NavbarBrand  className="home_text" href="/" >Home</NavbarBrand>
                        <img src={symbol} alt="..................." className="symbol_img"/>
                        <NavbarBrand  className="course_text" href="/" >All Course </NavbarBrand>
                    </div>
                        
               
         </Navbar>
        </div>
    )
}
