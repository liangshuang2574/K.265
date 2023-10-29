import React from 'react';

function Button1(props) {
    return (
        <div className='w-[340px] mx-[20px] mt-[20px] py-[15px] rounded-[10px] bg-[#DBB580] text-[#FDFCEE] text-base font-semibold text-[20px] flex justify-center gap-[10px]'>
            <img src='image/Start.svg'></img>
            <button onClick={props.onClick} >
                {props.text}
            </button>
        </div>
    );      
}

export default Button1;