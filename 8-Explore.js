import Head from 'next/head';
import Status from '../components/Status';
import Play from '../components/Play';
import Navigation from '../components/Navigation';
import Link from 'next/link';


export default function Home() {
  
    return (
        <div className="bg-gradient-to-b from-[#1A1B15] to-[#464742] min-h-[844px]">
            <Head>
            <title>8-Explore</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
    
            <main>
                <div className='w-[390px] px-[25px] flex justify-between pt-[55px]'>
                    <img src='image/Logo.svg'></img>
                    <div className='flex gap-[24px]'>
                        <img src='image/Search.svg'></img>
                        <img src='image/Mic.svg'></img>
                    </div>
                </div>

                <div className='flex justify-between text-center items-center mt-[20px] gap-[16px] mx-[25px]'>
                    <p className='text-[18px] font-semibold text-[#FDFCEE]'>Piece</p>
                    <p className='px-[13px] py-[8px] bg-[#DBB580] rounded-full text-[18px] font-semibold text-[#FDFCEE]'>Concert</p>
                    <p className='text-[18px] font-semibold text-[#FDFCEE]'>Interview</p>
                    <p className='text-[18px] font-semibold text-[#FDFCEE]'>Film</p>
                    <img src='image/List.svg'></img>
                </div>

                <Link href='/9-Concert'><div className='flex overflow-x-auto mt-[20px] gap-[10px] ml-[25px]'>
                    <img src='image/Concert.svg'></img>
                    <img src='image/Concert.svg'></img>
                    <img src='image/Concert.svg'></img>
                </div></Link>

                <p className='mt-[20px] ml-[25px] text-[20px] font-semibold text-[#FDFCEE]'>Browse Concerts</p>
                <div className='w-[390px] ml-[25px] flex overflow-x-auto whitespace-nowrap gap-[25px] hidescrollbar fixed top-[388px]'>
                    <Status image='image/Period.svg' text='Period'></Status>
                    <Status image='image/Genre.svg' text='Genre'></Status>
                    <Status image='image/Season.svg' text='Season'></Status>
                    <Status image='image/Category.svg' text='Category'></Status>
                    <Status image='image/Period.svg' text='Period'></Status>
                    <Status image='image/Genre.svg' text='Genre'></Status>
                    <Status image='image/Season.svg' text='Season'></Status>
                    <Status image='image/Category.svg' text='Category'></Status>
                </div>

                <div className='w-[390px] ml-[25px] flex overflow-x-auto whitespace-nowrap gap-[25px] hidescrollbar fixed top-[498px]'>
                    <Status image='image/Composer.svg' text='Composer'></Status>
                    <Status image='image/Conductor.svg' text='Conductor'></Status>
                    <Status image='image/Soloist.svg' text='Soloist'></Status>
                    <Status image='image/Ensemble.svg' text='Ensemble'></Status>
                    <Status image='image/Composer.svg' text='Composer'></Status>
                    <Status image='image/Conductor.svg' text='Conductor'></Status>
                    <Status image='image/Soloist.svg' text='Soloist'></Status>
                    <Status image='image/Ensemble.svg' text='Ensemble'></Status>
                </div>

                <p className='mt-[240px] ml-[25px] text-[20px] font-semibold text-[#FDFCEE]'>Recommend Playlists</p>
                <div className='flex overflow-x-auto mt-[10px] ml-[25px] gap-[16px]'>
                    <img src='image/Playlist1.svg'></img>
                    <img src='image/Playlist2.svg'></img>
                    <img src='image/Playlist3.svg'></img>
                </div>

                <Play></Play>

                <div className='bg-[#1A1B15] w-[390px] h-[85px] mt-[10px] fixed bottom-0 left-0 right-0'>
                    <nav className='flex px-[44px] justify-between grid grid-cols-4 gap-[56px]'>
                        <Link href='/3-Home'><Navigation image='image/Home.svg' image1='image/Home1.svg' text='Home'></Navigation></Link>
                        <Link href='/8-Explore'><Navigation image='image/Explore1.svg' image1='image/Explore.svg' text='Explore'></Navigation></Link>
                        <Link href='/graphql'><Navigation image='image/Forum.svg' image1='image/Forum1.svg' text='Forum'></Navigation></Link>
                        <Link href='#'><Navigation image='image/Library.svg' image1='image/Library1.svg' text='Library'></Navigation></Link>
                    </nav>
                </div>
            </main>
        </div>
    )
}