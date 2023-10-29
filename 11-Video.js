import Head from 'next/head';
import Button2 from '../components/Button2';


export default function Home() {
  
    return (
      <div className='bg-[#1A1B15]'>
        <Head>
          <title>11-Video</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
  
        <main>
            <div className='pt-[40px]'>
                <Button2 text='VIDEO'></Button2>
            </div>

            <p className='text-[14px] font-medium text-[#FDFCEE] my-[18px] text-center'>...serving as the figue’s countersubject.</p>

            <img src='image/Score.svg'></img>
        </main>


        
        </div>  
    )
}