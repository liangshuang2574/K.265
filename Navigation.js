import React, { useState } from 'react';


function Navigation(props) {
  const [currentImage, setCurrentImage] = useState(props.image)
  const [textColor, setTextColor] = useState(props.text);

  const handleClick = () => {
    if (currentImage === props.image && textColor === 'text-[#E4CE9E]') {
      setCurrentImage(props.image1);
      setTextColor('text-[#535450]');
    } else {
      setCurrentImage(props.image);
      setTextColor('text-[#E4CE9E]');
    }
  };

  return (
    <button onClick={handleClick}>
      <div className='fixed top-[770px]'>
          <div className='flex items-center justify-center'>
              <img src={currentImage}></img>
          </div>
          <p className={`${textColor} text-[12px] mt-[5px] text-[#535450]`}>
              {props.text}
          </p>
      </div>
    </button>
  );
};


export default Navigation;