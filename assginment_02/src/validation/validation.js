import React from 'react'

const validation = (props) =>{
    if (props.len <= 5)
        return <p>Text is too short</p>
    else
        return <p>Text long enough</p>
}

export default validation ; 