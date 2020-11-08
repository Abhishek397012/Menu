import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import ArrowDown from '../Res/Arrowdown.png'
import BgStrip from '../Res/BgStrip.jpg'

export class Scrolldown extends Component {

    divStyle = {
        padding: 4,
        textAlign: 'center',
        backgroundImage: "url(" + BgStrip + ")"
    }

    paraStyle = {
        fontSize: 30,
        color: 'black'
    }


    render() {
        return (

            <div style={this.divStyle}>
                <b> <p style={this.paraStyle}>Menu Below</p></b>
                <Image style={{ opacity: 0.6 }} src={ArrowDown} rounded width="35px" />
            </div>
        )
    }
}

export default Scrolldown
