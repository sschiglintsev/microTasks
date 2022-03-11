import React from 'react';
type ButtonType = {
    nameButton: string
    callBack:()=>void
}

const Button = (props:ButtonType) => {
    return (
        <button onClick={props.callBack}>{props.nameButton}</button>
    );
};

export default Button;