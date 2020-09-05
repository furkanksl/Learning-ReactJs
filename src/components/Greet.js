import React from 'react';
// it is a functional component

export const Greet = (props) => {
    console.log(props);
    return (
        <div>
           <h1>Hello {props.name} a.k.a {props.heroName}</h1> 
           {props.children}
        </div>
        );
    }