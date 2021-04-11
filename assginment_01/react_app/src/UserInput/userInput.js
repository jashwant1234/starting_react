import React from 'react';

const userInput = (props) =>{
    return (
        <input type='text' onChange={props.updateUserName} value={props.userName}></input>
    );
};

export default userInput;