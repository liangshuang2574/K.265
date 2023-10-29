import React, { useState } from 'react';
import Link from 'next/link';

function Button2() {
  const [image, setImage] = useState('image/Video.svg');

  const [button1Color, setButton1Color] = useState('#DBB580');
  const [button2Color, setButton2Color] = useState('#535450');
  const [button1Text, setButton1Text] = useState('#FDFCEE');
  const [button2Text, setButton2Text] = useState('#7E7F7C');

  const handleClick = (button) => {
    if (button === 'button1') {
      setImage('image/Video.svg')
      setButton1Color('#DBB580')
      setButton2Color('#535450')
      setButton1Text('#FDFCEE')
      setButton2Text('#7E7F7C');
    } else if (button === 'button2') {
      setImage('image/Points.svg')
      setButton1Color('#535450')
      setButton2Color('#DBB580')
      setButton1Text('#7E7F7C')
      setButton2Text('#FDFCEE');
      ;
    }
  };

  return (
    <div className='w-[390px] bg-[#1A1B15]'>
        <div className='flex items-center justify-between mx-[25px]'>
            <Link href='/9-Concert'><img src='image/Return.svg'></img></Link>
            <div>
                <button onClick={() => handleClick('button1') } style={{ backgroundColor: button1Color, color: button1Text }} className='w-[80px] h-[25px] bg-[#DBB580] rounded-[25px] text-[14px] font-medium text-center'>VIDEO</button>
                <button onClick={() => handleClick('button2')} style={{ backgroundColor: button2Color, color: button2Text }} className='ml-[10px] w-[80px] h-[25px] bg-[#535450] rounded-[25px] text-[14px] font-medium text-center'>GRAPHIC</button>
            </div>
            <img src='image/MusicList.svg'></img>
        </div>

        <img src={image} className='mt-[33px]' />
    </div>
  );
}

export default Button2;