import React, { useState } from 'react';


const images = [ 'image/L1.svg', 'image/L2.svg', 'image/L3.svg' ];

const List = () => {
  const [Picture, setPicture] = useState(0);
  

  const handleImageClick = (index) => {
    setPicture(index);
    
  };

  return (
    <div>
      <div  className='relative bg-[#1A1B15]'>
          <img src={images[Picture]} />
          <div className='flex absolute top-[370px] gap-[20px] px-[25px] focus:border-[#E4CE9E]'>
              <img src="image/1l.svg" onClick={() => handleImageClick(0)}/>
              <img src="image/2l.svg" onClick={() => handleImageClick(1)} />
              <img src="image/3l.svg" onClick={() => handleImageClick(2)} />
          </div>
      </div>
      <p className='text-[24px] font-bold text-[#FDFCEE] text-center fixed top-[500px]'>Wiener Philharmoniker <br></br>(Legendary recording)</p>
    </div>
  );
};

export default List;