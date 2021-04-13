import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyleDiv = styled.div`
{
    width: 60%;
    margin: 16px  auto;
    border: 1px solid #eee;
    box-sizing: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}
'@media (min-width: 500px)' : {
    width: '450px'
}
`;

const person = (props) => {
    const style ={
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }
    return (
    <StyleDiv>
        <p onClick={props.click}>My name is {props.name} and I am {props.age} Year old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}></input>
    </StyleDiv>
    );
};

export default person ;