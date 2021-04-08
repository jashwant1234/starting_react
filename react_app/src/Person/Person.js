import React from 'react';

const person = (props) => {
    return (
    <div>
        <p>My name is {props.name} and I am {props.age} Year old.</p>
        <p>{props.children}</p>
    </div>
    );
};

export default person ;