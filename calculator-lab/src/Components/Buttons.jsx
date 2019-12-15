import React from 'react';
import './Buttons.css'

class Buttons extends React.Component {
    render() {
        return (
            <div id="buttonsDiv">
                <button class="button" id="AC">AC</button>
                {/* <button class="button">C</button> */}
                <button class="button" id="percent">%</button>
                <button class="button" id="plusMinus">±</button>
                <button class="button" id="decimal">.</button>
                <button class="button orange" id="divide">÷</button>
                <button class="button orange" id="plus">+</button>
                <button class="button orange" id ="minus">-</button>
                <button class="button orange" id="times">x</button>
                <button class="button orange" id="equals">=</button>
                <button class="button" id="one">1</button>
                <button class="button" id="two">2</button>
                <button class="button" id="three">3</button>
                <button class="button" id="four">4</button>
                <button class="button" id="five">5</button>
                <button class="button" id="six">6</button>
                <button class="button" id="seven">7</button>
                <button class="button" id="eight">8</button>
                <button class="button" id="nine">9</button>
                <button class="button" id="zero">0</button>
            </div>
        )
    }
}

export default Buttons