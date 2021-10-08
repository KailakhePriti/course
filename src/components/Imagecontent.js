import React from 'react'
import '../css/Imagecontent.css'
import girl from '../images/girl.png'
import hr from '../images/hr.png'
import people from '../images/people.png'
import  course from '../images/course.png'
import heart from '../images/heart.png'
import  cart from '../images/cart.png'
import  star from '../images/star.png'
import  setting from '../images/setting.png'
import  logout from '../images/logout.png'

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
    DropdownItem,
    DropdownToggle,
    Dropdown,
    Button
} from 'reactstrap';

export default function Imagecontent() {
    return (
        <div>
            <div className="container main_block" >
                <div className="img_block">
                    <img src={girl} alt=""/>
                </div>
                <div className="text_content">
                    <h4 className="girl_text">Hello, Priya</h4>

                </div>
            </div>
            {/* */}
            <p className="hr_line" align="center" >
                <img src={hr} alt="" width="80%"/> 
            </p>
            
            <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                               
                                <div className="main_section">
                                    <div className="section1" align="left">
                                                <Navbar bg="dark" variant="dark">
                                                <Container>
                                                    <Nav>
                                                        <ul className="list_items">
                                                            <li><img src={people} alt=""  className="list_img"/> &nbsp;My Profile</li>
                                                            <li><img src={course} alt="" className="list_img"/>Enrolled Course</li>
                                                            <li><img src={heart} alt="" className="list_img"/>&nbsp;Wishlist</li>
                                                            <li><img src={star} alt="" className="list_img"/>Review</li>
                                                            <li><img src={cart} alt="" className="list_img"/>&nbsp;Purchase History</li>
                                                            
                                                            <li><img src={setting} alt="" className="list_img"/>&nbsp;Setting</li>
                                                            <li><img src={logout} alt="" className="list_img"/>&nbsp;Logout</li>
                                                        </ul>
                                                    </Nav>
                                                </Container>
                                            </Navbar>
                                            
                                           
                                    </div>
                                    <div className="section2">
                                         <div className="content">
                                            <div className="content1">
                                                <h6>Enrolled course</h6>
                                            </div>
                                            <div className="content2">
                                                <div style={{color: '#FA8B37',textDecoration: 'underline',paddingRight: '10px'}}>All Courses</div>

                                                <div style={{textDecoration: 'underline',paddingLeft: '10px'}}>Active course</div>

                                                <div style={{textDecoration: 'underline',paddingLeft: '10px'}}>Completed course</div>

                                            </div>
                                        </div> 

                                    </div>
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
        </div>
    )
}
