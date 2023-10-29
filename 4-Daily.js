import Head from 'next/head';
import Button1 from '../components/Button1';
import Knowledge from '../components/Knowledge'
import Link from 'next/link';


export default function Home() {

    return (
        <div className='bg-[#1A1B15]'>
            <Head>
            <title>4-Daily</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
    
            <main>
                <div className='flex fixed top-[40px] mx-[25px] gap-[240px] z-20'>
                    <Link href="/3-Home"><img src='image/Return.svg'></img></Link>
                    <img src='image/MusicList.svg'></img>
                </div>
                <div>
                    <img src='image/Daily.svg' className='absolute'></img>

                    <div className='bg-[#1A1B15] rounded-t-[25px] fixed mt-[379px] pb-[100px] left-0 right-0'>
                        <p className='text-[24px] font-bold text-[#FDFCEE] text-center mt-[32px]'>12 Variations in C Major on <br></br> 
                        "Ah, vous dirai-je Maman", <br></br>
                        K. 265/300e</p>
                        <p className='text-[#E4CE9E] font-medium text-[20px] text-center mt-[6px]'>Wolfgang Amadeus Mozart</p>
                        <Button1 text='Play'></Button1>
                        <p className='text-[#FDFCEE] ml-[27px] mt-[20px]'>The French melody first appeared in 1761 and <br></br>has been used for many children’s s
                        <span className='text-[#C4C4B8]'>o</span>
                        <span className='text-[#8B8B81]'>n</span>
                        <span className='text-[#53534B]'>g</span>
                        <span className='text-[#E4CE9E] ml-[3pt]'>MORE</span></p>

                        <div className='flex ml-[25px] mt-[16px] gap-[10px]'>
                            <img src='image/AppleMusic.svg'></img>
                            <img src='image/Spotify.svg'></img>
                        </div>
                    </div>
                </div>

                <Knowledge />
            </main>
        </div>
    )
}