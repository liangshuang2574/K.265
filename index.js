import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import EmailInput from '../components/InputBox';
import PasswordInput from '../components/InputBox2';
import Link from 'next/link';


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className='w-[390px] h-[844px] bg-[#1A1B15]'>
        <div className='flex items-center justify-center'>
          <img src='image/Account.svg' className='absolute top-[135px]'></img>
        </div>
        <div className='fixed top-[295px]'><EmailInput></EmailInput></div>
        <div className='fixed top-[362px]'><PasswordInput></PasswordInput></div>
        <div className='fixed top-[450px]'><Link href='/2-Interest'><Button text='Sign'></Button></Link></div>
        <div className='fixed top-[510px] text-[#E4CE9E] text-base font-semibold'>Visitor Login</div>

      {/* Footer */}
        <div className='text-[#FDFCEE] text-xs fixed top-[790px]'>
          Don’t have an account?
          <span className='text-[#E4CE9E] text-xs'>   </span>  
          <span className='text-[#E4CE9E] text-xs underline'>Sign Up</span>
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