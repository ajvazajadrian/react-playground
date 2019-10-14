import React from 'react';
import "./Infoicon.scss";

function Infoicon(props) {
    return (
        <div className="boxes">
        <img src={props.img}></img>
        <h1>{props.title}</h1>
        <p>{props.par}</p>
        </div>
    )
}

export default Infoicon





