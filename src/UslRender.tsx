import React from 'react';
type UslRenderType = {
    value:boolean
}

const UslRender = (props:UslRenderType) => {
    return (
        <div>
            {props.value && 'red'}
            {!props.value && 'green'}
        </div>
    );
};

export default UslRender;