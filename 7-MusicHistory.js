import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  
    return (
        <div className='bg-[#1A1B15]'>
            <Head>
            <title>7-MusicHistory</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
    
            <main>
                <div className='flex fixed top-[40px] mx-[25px] gap-[240px]'>
                    <Link href='/4-Daily'><img src='image/Return.svg'></img></Link>
                    <img src='image/MusicList.svg'></img>
                </div>
                <img src='image/MH.svg'></img>

                <div className='w-[390px] h-[250px] bg-[#BDA88B] rounded-[25px] fixed top-[370px]'>
                    <p className='text-[24px] font-semibold text-[#FDFCEE] mt-[20px] ml-[25px]'>Musician</p>
                    <div className='mt-[14px] ml-[25px] flex overflow-x-auto whitespace-nowrap gap-[20px] '>
                        <div>
                            <img src='image/Mozart.svg'></img>
                            <p className='text-[18px] font-medium text-[#FDFCEE] text-center mt-[6px]'>Mozart</p>
                        </div>
                        <div>
                            <img src='image/Beethoven.svg' className='ml-[8px]'></img>
                            <p className='text-[18px] font-medium text-[#FDFCEE] text-center mt-[6px]'>Beethoven</p>
                        </div>
                        <div>
                            <img src='image/Haydn.svg'></img>
                            <p className='text-[18px] font-medium text-[#FDFCEE] text-center mt-[6px]'>Haydn</p>
                        </div>
                        <div>
                            <img src='image/Paganini.svg'></img>
                            <p className='text-[18px] font-medium text-[#FDFCEE] text-center mt-[6px]'>Paganini</p>
                        </div>
                        <div>
                            <img src='image/Mozart.svg'></img>
                            <p className='text-[18px] font-medium text-[#FDFCEE] text-center mt-[6px]'>Mozart</p>
                        </div>
                        <div>
                            <img src='image/Beethoven.svg' className='ml-[8px]'></img>
                            <p className='text-[18px] font-medium text-[#FDFCEE] text-center mt-[6px]'>Beethoven</p>
                        </div>
                        <div>
                            <img src='image/Haydn.svg'></img>
                            <p className='text-[18px] font-medium text-[#FDFCEE] text-center mt-[6px]'>Haydn</p>
                        </div>
                        <div>
                            <img src='image/Paganini.svg'></img>
                            <p className='text-[18px] font-medium text-[#FDFCEE] text-center mt-[6px]'>Paganini</p>
                        </div>
                    </div>
                </div>

                <div className='w-[390px] h-[405px] bg-[#1A1B15] rounded-[25px] fixed top-[563px]'>
                    <p className='text-[24px] font-semibold text-[#FDFCEE] mt-[20px] ml-[25px]'>About</p>
                    <div className='mt-[14px] flex overflow-y-auto'>
                        <div className='grid ml-[10px]'>
                            <div className='w-[180px] h-[184px] bg-[#535450] rounded-t-[25px] rounded-bl-[25px] rounded-br-[15px] px-[13px] text-center'>
                                <img src='image/Background.svg' className='mt-[36px] ml-[60px]'></img>
                                <p className='text-[18px] font-medium text-[#E4CE9E] my-[5px]'>Background</p>
                                <p className='text-[10px] font-regular text-[#FDFCEE]'>The Classical period was an era of classical music between roughly 1750 and 1820...</p>
                            </div>
                            <div className='w-[180px] h-[130px] bg-[#535450] rounded-b-[25px] rounded-tl-[25px] rounded-tr-[15px] mt-[10px] px-[13px] text-center'>
                                <img src='image/Documentary.svg' className='mt-[36px] ml-[62px]'></img>
                                <p className='text-[18px] font-medium text-[#E4CE9E] my-[5px]'>Documentaries</p>
                            </div>                            
                        </div>
                        <div className='grid ml-[10px]'>
                           <div className='w-[180px] h-[130px] bg-[#535450] rounded-t-[25px] rounded-br-[25px] rounded-bl-[15px] px-[13px] text-center'>
                                <img src='image/Albums.svg' className='mt-[36px] ml-[66px]'></img>
                                <p className='text-[18px] font-medium text-[#E4CE9E] my-[5px]'>Classical Albums</p>
                            </div>
                            <div className='w-[180px] h-[184px] bg-[#535450] rounded-b-[25px] rounded-tr-[25px] rounded-tl-[15px] mt-[10px] px-[13px] text-center'>
                                <img src='image/CE.svg' className='mt-[36px] ml-[65px]'></img>
                                <p className='text-[18px] font-medium text-[#E4CE9E] my-[5px]'>Classical Essentials</p>
                                <p className='text-[10px] font-regular text-[#FDFCEE]'>Symphonies Nos. 38-41, Requiem, K.626...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}