import React, { useState } from 'react';

function Enter() {
  const [imageSrc, setImageSrc] = useState('image/Enter1.svg');

  const handleClick = () => {
    if (imageSrc === 'image/Enter1.svg') {
        setImageSrc('image/Enter2.svg');
      } else {
        setImageSrc('image/Enter1.svg');
      }
  };

  return (
    <img src={imageSrc} onClick={handleClick} 
    className='fixed top-[320px] left-[46px]'
    />
  );
}

export default Enter;