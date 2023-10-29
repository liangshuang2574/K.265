import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick} className='w-[340px] h-[50px] mx-[20px] rounded-[10px] bg-[#DBB580] text-[#FDFCEE] text-base font-semibold text-[20px]'>
            {props.text}
        </button>
    );      
}

export default Button;