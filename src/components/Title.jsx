import React from 'react';

const Title = (props) => {

    return (
        <>
          <h1>
            J'AIME <span  style ={props.titleStyle}>{props.value}</span>
          </h1>
        </>
    )
}

export default Title