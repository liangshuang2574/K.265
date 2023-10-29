import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Interest from "../components/Interest";
import Button from '../components/Button';
import Link from 'next/link';


export default function Home() {

    return(
        <div className={styles.container}>
            <Head>
                <title>2-Interest</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main className='fixed h-[844px] bg-[#1A1B15] items-center'>
                <div className='fixed top-[130px] text-[#E4CE9E] text-[32px] font-semibold'>Select What You've</div>
                <div className='fixed top-[170px] text-[#E4CE9E] text-[32px] font-semibold'>Seen Before</div>
            {/* Line 1 */}
                <div className='mt-[70px] w-[390px] flex overflow-x-auto whitespace-nowrap gap-[12px] hidescrollbar'>
                    <div className="relative flex-shrink-0"><Interest text='GarageBand'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Sky'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Journey'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Piano Tile'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Voez'></Interest></div>
                </div>
            {/* Line 2 */}
                <div className='w-[390px] flex overflow-x-auto whitespace-nowrap gap-[12px] mt-[16px] hidescrollbar'>
                    <div className="relative flex-shrink-0"><Interest text='Fantasia'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Tom & Jerry'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Mickey Mouse & Donald Duck'></Interest></div>
                </div>
            {/* Line 3 */}
                <div className='w-[390px] flex overflow-x-auto whitespace-nowrap gap-[12px] mt-[16px] hidescrollbar'>
                    <div className="relative flex-shrink-0"><Interest text='La La Land'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Trolls 2'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Silly Symphony'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Farinelli: il castrato'></Interest></div>
                </div>
            {/* Line 4 */}
                <div className='w-[390px] flex overflow-x-auto whitespace-nowrap gap-[12px] mt-[16px] hidescrollbar'>
                    <div className="relative flex-shrink-0"><Interest text='Your Lie in April'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Neon Genesis Evangelion'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Nodame Cantabile'></Interest></div>
                </div>
            {/* Line 5 */}
                <div className='w-[390px] flex overflow-x-auto whitespace-nowrap gap-[12px] mt-[16px] hidescrollbar'>
                    <div className="relative flex-shrink-0"><Interest text='The Disappearance of Haruhi Suzumiya'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Rhapsody in Blue'></Interest></div>
                </div>
            {/* Line 6 */}
                <div className='w-[390px] flex overflow-x-auto whitespace-nowrap gap-[12px] mt-[16px] hidescrollbar'>
                    <div className="relative flex-shrink-0"><Interest text='Swan Lake'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Nutcracker'></Interest></div>
                    <div className="relative flex-shrink-0"><Interest text='Mozart, l‘opéra rock'></Interest></div>
                </div>


            {/* Button */}
                <div className='fixed top-[760px]'>
                    <Link href='/3-Home'><Button text='Start Your Trip'></Button></Link>
                </div>

            </main>


            <style jsx>{`
                main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }
                footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
                }
                footer img {
                margin-left: 0.5rem;
                }
                footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: inherit;
                }
                code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}