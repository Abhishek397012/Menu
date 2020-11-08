import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';


export class Navbartop extends Component {

    handleSignin = () => {
        alert("You are going to Log in")
    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">XYZ Company</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link>Order Now</Nav.Link>
                            <Nav.Link>Contact Us!</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button onClick={this.handleSignin}>
                        Log In
                    </Button>
                </Navbar>

            </>
        )
    }
}

export default Navbartop
