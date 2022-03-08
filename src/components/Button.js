import React from 'react';

const Button = ({changeQuote, colors}) => {
    return (
        <div className="button-container">
            <button className="button" onClick={changeQuote} style={{color: "#" + colors}}> <i class="fa-solid fa-shuffle"></i></button>
        </div>
    );
};

export default Button;