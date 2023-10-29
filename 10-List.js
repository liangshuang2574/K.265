import Head from 'next/head';
import List from '../components/List';



export default function Home() {
  
    return (
      <div>
            <Head>
            <title>10-List</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
    
            <main className='bg-[#1A1B15]'>
                <List></List>

                <img src='image/MusicList1.svg' className='fixed top-[20px] right-[40px]'></img>
            </main>
        </div>
    )
}