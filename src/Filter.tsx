import React from 'react';
type FilterType = {
    name:string
    callBack:()=>void
}

const Filter = (props:FilterType) => {

    return (
        <div>
            <button onClick={props.callBack}>{props.name}</button>
        </div>
    );
};

export default Filter;