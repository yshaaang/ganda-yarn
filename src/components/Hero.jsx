import styles from '../style';
import { homebg } from '../assets';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col`}>
    <div className={`${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-bold ss:text-[55px] text-[52px] text-[#3eadcf] ss:leading-[80px] leading-[75px]'>
            Bringing
            <span className='text-[#ff55ee]'> beauty</span>
            <br className='sm:block hidden' /> {''}
            to your world, <br />
            one stitch at a time.
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          Welcome to Ganda Yarn E-Commerce Website where you can buy handmade
          crochet products made with love and care.
        </p>

        <div className='pt-8'>
          <button className='btn btn-secondary btn-wide rounded-full'>
            Shop Now
          </button>
        </div>
      </div>
    </div>

    <div className={`flex-1 xl:px-0 sm:px-16 px-6 mt-5 mb-5`}>
      <img
        src={homebg}
        alt='crochet-yarn'
        className='w-[100%] h-[100%] relative z-[5]'
      />
    </div>
  </section>
);

export default Hero;
