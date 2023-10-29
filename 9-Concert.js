import Head from 'next/head';
import Button1 from '../components/Button1';
import Link from 'next/link';


export default function Home() {
  
    return (
        <div className='bg-[#1A1B15]'>
            <Head>
            <title>9-Concert</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
    
            <main>
                <div className='flex fixed top-[40px] mx-[25px] gap-[240px]'>
                    <Link href='/8-Explore'><img src='image/Return.svg'></img></Link>
                    <img src='image/MusicList.svg'></img>
                </div>
                <img src='image/Symphony.svg'></img>

                <div className='bg-[#1A1B15] rounded-t-[25px] fixed top-[377px] w-[390px] h-[467px]'>
                    <p className='text-[24px] font-bold text-[#FDFCEE] text-center mt-[32px]'>The Symphony No. 9 in D <br></br>minor, Op. 125</p>
                    <p className='text-[#E4CE9E] font-medium text-[20px] text-center mt-[6px]'>Ludwig van Beethoven</p>
                    <Link href='/11-Video'><Button1 text='Watch'></Button1></Link>
                    <p className='text-[#FDFCEE] ml-[27px] mt-[20px]'>The final complete symphony by Ludwig van Beethoven, composed between 1822 and and 1824. It was first performed in Vie
                    <span className='text-[#C4C4B8]'>n</span>
                    <span className='text-[#8B8B81]'>n</span>
                    <span className='text-[#53534B]'>a</span>
                    <span className='text-[#E4CE9E] ml-[3pt]'>MORE</span></p>

                    <div className='flex ml-[25px] mt-[16px] gap-[10px]'>
                        <img src='image/YouTube.svg'></img>
                        <img src='image/AppleMusic.svg'></img>
                    </div>

                    <img src='image/Knowledge.svg' className='fixed top-[792px] left-[85px]'></img>

                </div>
            </main>
        </div>
    )
}