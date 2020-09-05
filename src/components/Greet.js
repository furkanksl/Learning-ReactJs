import React from 'react';
// it is a functional component

export const Greet = (props) => {
    console.log(props);
return <h1>Hello {props.name} from SalahFalah</h1>;
}