import styles from '../style';
import { baguettebags_brown } from '../assets/gy_products/Baguette Bags';
import { Nimbus_Cardigan_croptop } from '../assets/gy_products/Cardigan';
import { bandana_lightblue } from '../assets/gy_products/Bandana';
import { Flora_Tote_Bag_pastel_brown } from '../assets/gy_products/Tote Bags';
import { tumblerholder_beige } from '../assets/gy_products/Tumbler Holder';
import { flower_multiplesunflowerbouquet } from '../assets/gy_products/Flowers/Sunflower';

const Featured = () => (
  <section
    id='featured'
    className={`flex md:flex flex-col justify-center items-center ${styles.paddingY}`}
  >
    <div>
      <h2 className='font-poppins font-semibold text-center text-[#3EADCF]'>
        Featured Products
      </h2>
      <h2 className='font-poppins font-semibold text-center text-primary ss:text-[30px] text-[28px] ss:leading-[40px] leading-[40px] mb-6'>
        Time to add to cart!
      </h2>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <div className='card h-70 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9] cursor-pointer'>
        <figure>
          <img
            src={Nimbus_Cardigan_croptop}
            className='h-[340px] hover:opacity-75'
            alt='nimbus cardigan'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-[#000000]'>Nimbus Cardigan</h2>

          <div className='card-actions justify-between mt-6'>
            <h1 className='font-poppins font-medium py-3 text-[#ff55ee]'>
              ₱1000
            </h1>
            <button className='btn bg-[#ff55ee] btn-circle border-[#ff55ee]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#ffffff'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='card h-70 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9] cursor-pointer'>
        <figure>
          <img
            src={baguettebags_brown}
            className='h-[340px] hover:opacity-75'
            alt='baguette bag'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-[#000000]'>Baguette Bag</h2>

          <div className='card-actions justify-between mt-6'>
            <h1 className='font-poppins font-medium py-3 text-[#ff55ee]'>
              ₱300
            </h1>
            <button className='btn bg-[#ff55ee] btn-circle border-[#ff55ee]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#ffffff'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='card h-70 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9] cursor-pointer'>
        <figure>
          <img
            src={bandana_lightblue}
            className='h-[340px] hover:opacity-75'
            alt='bandana'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-[#000000]'>Bandana</h2>

          <div className='card-actions justify-between mt-6'>
            <h1 className='font-poppins font-medium py-3 text-[#ff55ee]'>
              ₱130
            </h1>
            <button className='btn bg-[#ff55ee] btn-circle border-[#ff55ee]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#ffffff'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='card h-70 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9] cursor-pointer'>
        <figure>
          <img
            src={Flora_Tote_Bag_pastel_brown}
            className='h-[340px] hover:opacity-75'
            alt='tote bag'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-[#000000]'>Tote Bag</h2>

          <div className='card-actions justify-between mt-6'>
            <h1 className='font-poppins font-medium py-3 text-[#ff55ee]'>
              ₱600
            </h1>
            <button className='btn bg-[#ff55ee] btn-circle border-[#ff55ee]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#ffffff'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='card h-70 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9] cursor-pointer'>
        <figure>
          <img
            src={tumblerholder_beige}
            className='h-[340px] hover:opacity-75'
            alt='tumbler holder'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-[#000000]'>Tumbler Holder</h2>

          <div className='card-actions justify-between mt-6'>
            <h1 className='font-poppins font-medium py-3 text-[#ff55ee]'>
              ₱180
            </h1>
            <button className='btn bg-[#ff55ee] btn-circle border-[#ff55ee]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#ffffff'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='card h-70 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9] cursor-pointer'>
        <figure>
          <img
            src={flower_multiplesunflowerbouquet}
            className='h-[340px] hover:opacity-75'
            alt='multiple sunflower'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-[#000000]'>Sunflower</h2>

          <div className='card-actions justify-between mt-6'>
            <h1 className='font-poppins font-medium py-3 text-[#ff55ee]'>
              ₱600
            </h1>
            <button className='btn bg-[#ff55ee] btn-circle border-[#ff55ee]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#ffffff'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Featured;
