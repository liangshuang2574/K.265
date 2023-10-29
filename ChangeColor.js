import React, { useState } from 'react';

function Button({text}) {
  const [color, setColor] = useState('#535450'); // set the initial color to blue

  const handleClick = () => {
    // check the current color and set the new color
    if (color === '#535450') {
      setColor('#DBB580');
    } else {
      setColor('#535450');
    }
  };

  return (
    <button style={{ backgroundColor: color }} 
        className='w-[80px] h-[25px] rounded-[25px] text-center text-[#FDFCEE] text-[14px] font-medium'
        onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;