import Link from 'next/link';
import React, { useState } from 'react';

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='w-[340px] bg-[#1A1B15] py-[15px] px-[18px] rounded-[15px]'>
      <div className='flex justify-between'>
        <div className='flex'>
          <img src={props.imageIcon}></img>
          <span>""</span>
          <div className='text-[#E4CE9E] text-[20px] font-semibold'>{props.text}</div>
        </div>

        <div onClick={toggleMenu}>
          <button> {isOpen ? <img src='image/Upward.svg' /> : <img src='image/Downward.svg' />}</button>
        </div>
      </div>

      {isOpen && (
        <ul>
          <li>
            <div className='bg-[#31322C] rounded-[10px] flex mt-[14px]'>
              <img src={props.imageDetail} className='w-[95px]'></img>
              <div className='flex flex-col ml-[18px] pt-[20px]'>
                <Link href='/7-MusicHistory'><span className='text-[#FDFCEE]'>{props.text2}</span></Link>
                <span className='text-[#989895] text-[12px]'>{props.text3}</span>
              </div>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Menu;