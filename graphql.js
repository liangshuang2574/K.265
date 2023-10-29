import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import Join from '../components/Join';
import Navigation from '../components/Navigation';
import Link from 'next/link';


export async function getStaticProps() {
  const hygraph = new GraphQLClient(
    'https://api-us-west-2.hygraph.com/v2/clfsl9huf21xp01uog3f93huh/master'
  );

  const { group1 } = await hygraph.request(
    `
      {
        group1 {
          groupName
          number
          image {
            id
            url
          }
        }
      }
    `
  );

  return {
    props: {
      group1,
    },
  };
}

export default function group1({ group1 }) {
  return (
    <div className="bg-gradient-to-b from-[#1A1B15] to-[#464742] min-h-[844px]">
      <Head>
          <title>12-Forum</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-[390px] px-[25px] flex justify-between pt-[55px]'>
                  <img src='image/ForumText.svg'></img>
                  <div className='flex gap-[24px]'>
                      <img src='image/Search.svg'></img>
                      <img src='image/Email.svg'></img>
                  </div>
      </div>

      <div className='flex justify-start text-center items-center mt-[20px] gap-[16px] mx-[25px] mb-[20px]'>
          <p className='text-[16px] font-semibold text-[#FDFCEE]'>My Groups</p>
          <p className='px-[13px] py-[8px] bg-[#DBB580] rounded-full text-[16px] font-semibold text-[#FDFCEE]'>Discover Groups</p>
      </div>
              
      {group1.map(({groupName, number, image}) =>
          <>
          <div className='flex items-center bg-[#474743] mb-[10px] mx-[25px] rounded-[15px]'>
              <img src={image.url} className='mr-[14px] py-[20px] pl-[17px]'></img>
               <div>
                  <div className='text-[#DBB580] font-semibold text-[16px]'>{groupName}</div>
                  <div className='text-[#FDFCEE] font-medium text-[12px]'>{number} Members</div>
              </div>
            <Join></Join>
          </div>
          </>
      )}

      <div className='bg-[#1A1B15] w-[390px] h-[85px] mt-[10px] fixed bottom-0 left-0 right-0'>
          <nav className='flex px-[44px] justify-between grid grid-cols-4 gap-[56px]'>
              <Link href='/3-Home'><Navigation image='image/Home.svg' image1='image/Home1.svg' text='Home'></Navigation></Link>
              <Link href='/8-Explore'><Navigation image='image/Explore.svg' image1='image/Explore1.svg' text='Explore'></Navigation></Link>
              <Link href='/graphql'><Navigation image='image/Forum1.svg' image1='image/Forum.svg' text='Forum'></Navigation></Link>
              <Link href='#'><Navigation image='image/Library.svg' image1='image/Library1.svg' text='Library'></Navigation></Link>
          </nav>
      </div>

    </div>
  )
}
