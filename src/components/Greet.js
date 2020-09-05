import React from 'react';
// it is a functional component

export const Greet = ({name , heroName}) => { //destructing props
    return (
        <div>
           <h1>Hello {name} a.k.a {heroName}</h1> 
        </div>
        );
    }