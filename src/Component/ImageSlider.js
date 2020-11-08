import React, { Component } from 'react'
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import Pica from '../Res/Pica.jpg'
import Picb from '../Res/Picb.jpg'
import Picc from '../Res/Picc.jpg'


export class ImageSlider extends Component {

    render() {
        return (

            <Carousel>

                <Carousel.Item interval={3000} onClick={() => {
                    alert("click")
                }}>
                    <img
                        className="d-block w-100"
                        src={Pica}
                        alt="First slide"
                        height="500"
                    />
                    <Carousel.Caption>
                        <h3>Welcome 1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={Picb}
                        alt="First slide"
                        height="500"
                    />
                    <Carousel.Caption>
                        <h3>Welcome 2</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={Picc}
                        alt="First slide"
                        height="500"
                    />
                    <Carousel.Caption>
                        <h3>Welcome 3</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        )
    }
}

export default ImageSlider
