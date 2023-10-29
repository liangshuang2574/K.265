import { useState } from "react";


function Play() {
    const [iconSrc, setIconSrc] = useState("image/Start.svg");

    const [imageSrc, setImageSrc] = useState(0);
    const images = ['image/FourSeason.svg', 'image/Moonlight.svg', 'image/Song.svg', 'image/Stunned.svg'];
    const [text, setText] = useState(0);
    const texts = ['Vivaldi: The Four Seasons', 'Beethoven: Piano Sonata...', '12 Variations in C Major...', 'Symphony No.94 in G Major'];
  
    const handleClick1 = () => {
      if (iconSrc === "image/Start.svg") {
        setIconSrc("image/Stop.svg");
      } else {
        setIconSrc("image/Start.svg");
      }
    };

    const handleClick2 = () => {
        const nextImageSrc = (imageSrc + 1) % images.length;
        setImageSrc(nextImageSrc);
        const nextText = (text + 1) % texts.length;
        setText(nextText);
    };

    
    return (
      <div className="w-[390px] h-[63px] bg-[#535450] bg-opacity-90 flex items-center object-cover px-[23px] fixed top-[696px]">
        <div className="flex items-center fixed left-[23px]">
            <img src={images[imageSrc]} className="w-[40px]"></img>
            <p className="text-[#FDFCEE] font-medium text-[16px] ml-[15px]">{texts[text]}</p>
        </div>
        <div className="flex items-center fixed left-[302px]">
        <img
          src={iconSrc}
          className="object-cover"
          onClick={handleClick1}
        />
        <button onClick={handleClick2}>
            <img src='image/Speed.svg' className="object-cover ml-[18px]"></img>
        </button>
        </div>
      </div>
    );
  }
  

export default Play;