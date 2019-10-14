import React from "react";
import Infoicon from "./Infoicon.jsx";
import "./InfoContainer.scss";

function IconContainer(props) {
    let icons = [{
        img : "../images/icon1.png",
        title: 'Declarative',
        par: 'React makes it painless to create interactive UIs.',
      },
      {
        img : "../images/icon2.png",
        title: 'Components',
        par: 'Build encapsulated components that manage their state',
      },
      {
        img : "../images/icon3.png",
        title: 'Single-Way',
        par: 'A set of immutable values are passed to the component´s.',
      },
      {
        img : "../images/icon4.png",
        title: 'JSX',
        par: 'Statically-typed, designed to run on modern browsers.'
      }
    ];

    return (
        <div className='elementContainer'>
            {icons.map((icon)=> <Infoicon {...icon}/>)}
        </div>

    )
}

export default IconContainer;