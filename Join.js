import { useState } from 'react';


function Join() {
    const [color, setColor] = useState('#DBB580');
    const [text, setText] = useState('Joined');
  
    const handleClick = () => {
      if (text === 'Joined') {
        setText('Join in')
        setColor('#818181')
      } else if (text === 'Join in') {
        setText('Joined')
        setColor('#DBB580')
      }
    };

    return (
        <button style={{ backgroundColor: color }} 
            className='w-[88px] h-[40px] rounded-[25px] text-center text-[#FDFCEE] text-[14px] font-medium py-[10px] ml-[40px]'
            onClick={handleClick}>
                {text}
        </button>
      );
}


export default Join;