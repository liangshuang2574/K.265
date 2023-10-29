import React, { useState } from 'react';

function Interest({text}) {
  const [color, setColor] = useState('#535450'); 

  const handleClick = () => {
    if (color === '#535450') {
      setColor('#DBB580');
    } else {
      setColor('#535450');
    }
  };

  return (
    <button style={{ backgroundColor: color }} 
        className='h-[45px] bg-[#535450] rounded-full px-[25px] text-center text-[#FDFCEE] font-medium'
        onClick={handleClick}>
      {text}
    </button>
  );
}

export default Interest;