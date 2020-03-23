
import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    switch(props.inputtype){
        case('input'):
            inputElement = <input className={classes.InputElement} {...props} />;
            break;
        case('textarea'):
            inputElement = <textarea {...props}/>;
            break;
        default:
            inputElement = <input {...props}/>

    }

    return (
    <div className={classes.Input}>
        <label className={classes.Input}>{props.label}</label>
        {inputElement}
    </div>
);}

export default input;