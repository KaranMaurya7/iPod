import React from "react";
import "../css/wheel.css"
import ZingTouch from 'zingtouch';

export default class Wheel extends React.Component {
    constructor() {
        super();

        this.angle = 0;
        this.cur  = 0 ;
        this.cur_prev = 0;
        this.play = false;
    }

    // function for the capture the rotation of wheel and updating active state in App.js with the help of zing touch
    wheelRotate = (e) => {
        const {updateMenu} = this.props
        
        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
           
            if (e.detail.distanceFromLast === 0) {
                return;
            } 
            this.cur_prev = this.cur;

            if (e.detail.distanceFromLast < 0) {
                this.cur -=1;
            } else {
                this.cur +=1;
            }
            updateMenu(this.cur_prev, this.cur);
            
            
        } else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            
            this.cur_prev = this.cur;
            if (e.detail.distanceFromLast < 0) {
                
                this.cur -=1;
            } else {
                this.cur +=1;
            }

            updateMenu(this.cur_prev, this.cur);

        }
    }

  
  
   
    // here with the help of zingTouch we are maintaining the rotation and button clicking functions with the help of zingtouch
    componentDidMount() {
        const region = new ZingTouch.Region(document.body);
        const myElement = document.getElementById('wheel');
        const menu = document.getElementById('menu');
        const middle = document.getElementById('middle');
        const play = document.getElementById('play');
        const forward = document.getElementById('forward');
        const backward = document.getElementById('backward');
        region.bind(myElement, 'rotate', (e) => {
            this.wheelRotate(e)
        });

        region.bind(menu, 'tap',(e) => {
            this.props.menuButton();
        } );

        region.bind(middle, 'tap',(e) => {
           this.props.middletap();
        } );
        region.bind(play, 'tap',(e) => {
           this.props.playPause();
        } );
        region.bind(forward, 'tap',(e) => {
           this.props.forward(e);
        } );
        region.bind(backward, 'tap',(e) => {
           this.props.backward(e);
        } );

    }

    // rendering the bottom of ipod that is the wheel section
    render() {

        return (
            <div className="wheel-container">
                <div id="wheel" className="wheel">
                    <button id="menu" className="menu">Menu</button>

                    <button id="forward" className="right"><img className="icon" src="https://cdn-icons-png.flaticon.com/128/3318/3318722.png" alt="icon" /></button>

                    <button id="play"  className="bottom"><img className="icon" src="https://cdn-icons-png.flaticon.com/128/7960/7960808.png" alt="icon" /></button>

                    <button id="backward" className="left"><img className="icon" src="https://cdn-icons-png.flaticon.com/128/39/39712.png" alt="icon" /></button>

                    <button id="middle" className="inner-button"></button>
                </div>
            </div>
        );
    }
}