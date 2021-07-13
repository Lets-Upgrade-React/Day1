import React from 'react';
import Button  from './Button';
import './style.css';

const Main =()=>{
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                Hello World!
            </h1>
            <p style={{textAlign:'center'}}>
                React Js Development Program!
            </p>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:'column'}}>
            <Button Info="Python" />
            <Button Info="JavaScript" />
            <Button Info="C++" />
            </div>
            <h3 style={{textAlign:'center'}}>Day 1 Assignment</h3>

           
        </div>

    )
}
export default Main