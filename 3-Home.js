import Head from 'next/head';
import Status from '../components/Status';
import Navigation from '../components/Navigation';
import Play from '../components/Play';
import Enter from '../components/ButtonCircle';
import Link from 'next/link';


export default function Home() {

    return(
        <div className="bg-gradient-to-b from-[#1A1B15] to-[#464742] min-h-[844px]">
            <Head>
                <title>3-Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main className=''>
                <div className='w-[390px] px-[25px] flex justify-between fixed top-[55px]'>
                    <img src='image/Logo.svg'></img>
                    <div className='flex gap-[24px]'>
                        <img src='image/Search.svg'></img>
                        <img src='image/User.svg'></img>
                    </div>
                </div>

                <img src='image/Bach.svg' className='fixed top-[127px] left-[25px]'></img>
                <Link href='/4-Daily'><Enter></Enter></Link>

                <p className='fixed top-[449px] left-[25px] text-[20px] font-semibold text-[#FDFCEE]'>Recommended for you</p>

                <p className='text-[#E4CE9E] font-medium text-[20px] fixed top-[485px] ml-[25px]'>Status</p>
                <div className='w-[390px] ml-[25px] flex overflow-x-auto whitespace-nowrap gap-[25px] hidescrollbar fixed top-[525px]'>
                    <Status image='image/Walkout.svg' text='Walkout'></Status>
                    <Status image='image/Studying.svg' text='Studying'></Status>
                    <Status image='image/Drinking.svg' text='Drinking'></Status>
                    <Status image='image/Eating.svg' text='Eating'></Status>
                    <Status image='image/Gaming.svg' text='Gaming'></Status>
                    <Status image='image/Hiking.svg' text='Hiking'></Status>
                    <Status image='image/Driving.svg' text='Driving'></Status>
                    <Status image='image/Travelling.svg' text='Travelling'></Status>
                    <Status image='image/Walkout.svg' text='Walkout'></Status>
                    <Status image='image/Walkout.svg' text='Walkout'></Status>
                </div>

                <p className='text-[#E4CE9E] font-medium text-[20px] fixed top-[635px] ml-[25px]'>Daily</p>
                <div className='ml-[25px] flex overflow-x-auto whitespace-nowrap gap-[25px] hidescrollbar fixed top-[675px]'>
                    <img src='image/Daily15.svg'></img>
                    <img src='image/ExploreStyle.svg'></img>
                    <img src='image/Hot.svg'></img>
                </div>

                <Play></Play>

                <div className='bg-[#1A1B15] w-[390px] h-[85px] mt-[10px] fixed bottom-0 left-0 right-0'>
                    <nav className='flex px-[44px] justify-between grid grid-cols-4 gap-[56px]'>
                        <Link href='/3-Home'><Navigation image='image/Home1.svg' image1='image/Home.svg' text='Home'></Navigation></Link>
                        <Link href='/8-Explore'><Navigation image='image/Explore.svg' image1='image/Explore1.svg' text='Explore'></Navigation></Link>
                        <Link href='/graphql'><Navigation image='image/Forum.svg' image1='image/Forum1.svg' text='Forum'></Navigation></Link>
                        <Link href='#'><Navigation image='image/Library.svg' image1='image/Library1.svg' text='Library'></Navigation></Link>
                    </nav>
                </div>

            </main>
        </div>
    )
}