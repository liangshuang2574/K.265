import React from 'react';

function Status(props) {
    return (
        <button onClick={props.onClick} className='w-[60px] h-[90px]'>
            <div className='overflow-hidden w-[60px] h-[60px] rounded-[15px] bg-[#BDA88B] flex items-center justify-center hover:bg-[#DBB580]'>
                <img src={props.image}></img>
            </div>
            <div className='text-[#FDFCEE] mt-[10px]'>{props.text}</div>
        </button>
    );
}

export default Status;