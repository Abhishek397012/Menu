import React, { Component } from 'react'
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import Navbartop from './Navbartop'
import ImageSlider from './ImageSlider'
import ScrollDown from './Scrolldown'
import MainMenu from './MainMenu'

export class Homepage extends Component {

    render() {
        return (
            <>
                <Navbartop />
                <ImageSlider />
                <ScrollDown />
                <MainMenu />
            </>

        )
    }
}

export default Homepage
