import React, { useState } from 'react';
import Menu from './Menu';
import Menu2 from './Menu2';


function Arrow() {
    const [image, setImage] = useState('image/Knowledge.svg');

    const handleClick1 = () => {
        if (image == 'image/Knowledge.svg') {
            setImage('image/Knowledge2.svg');
        } else {
            setImage('image/Knowledge.svg');
        }
    }

    const [active, setActive] = useState(false);

    const handleParentClick = () => {
        setActive(!active);
    }

    const handleChildClick = (event) => {
        event.stopPropagation();
    }


    return(
        <div className={`fixed transition-all duration-1000 ${active ? 'top-0' : 'top-[87%]'}`} onClick={handleParentClick}>
            <div className='flex justify-center'>
                <img src={image} className='-mb-[1px] mt-[60px]' onClick={handleClick1} />
            </div>

            <div className='bg-[#1A1B15]' onClick={handleChildClick}>
                <p className='text-[24px] font-semibold text-[#FDFCEE] mx-[25px] pt-[25px] mb-[12px]'>Knowledge</p>
                <div className='mx-[25px] pb-[430px]'>
                    <Menu imageIcon='image/Subtract.svg' text='Performer' imageDetail='image/LangLang.svg' text2='Lang Lang' text3='1982～'></Menu>
                    <div className='h-[20px]'></div>
                    <Menu imageIcon='image/SandClock.svg' text='Music History' imageDetail='image/MusicHistory.svg' text2='Classical period' text3='1750～1820'></Menu>
                    <div className='h-[20px]'></div>
                    <Menu2 imageIcon='image/MusicTheory.svg' text='Music Theory' imageDetail='image/Note.svg' text2='Note Signiture' text3='13 Knowledge Points' imageDetail2='image/Interval.svg' text4='Interval & Chord' text5='9 Knowledge Points' imageDetail3='image/Polyphony.svg' text6='Polyphony' text7='24 Knowledge Points'></Menu2>
                </div>
            </div>
        </div>
    )
}

export default Arrow;