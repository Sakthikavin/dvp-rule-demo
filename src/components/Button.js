import React from 'react';
import '../styles/Button.css';

const Button = (props) => {

    function greetUser() {
        console.log("Hi there, user!");
      }

    return (
        <button className="button" onClick={greetUser}>
            {props.title}
        </button>
    )
}

export default Button;