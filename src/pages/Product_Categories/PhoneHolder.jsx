import React from 'react';
import Products from '../Products';
import { phoneholder_red } from '../../assets/gy_products/Phone Holder';

const PhoneHolder = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <div class='mx-auto max-w-2xl py-4 px-4 sm:py-18 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 class='text-2xl font-bold tracking-tight text-gray-900'>
          Phone Holder
        </h2>

        <div class='mt-6 mb-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          <div class='group relative'>
            <div class='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
              <img
                src={phoneholder_red}
                alt='Phone Holder'
                class='h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer hover:opacity-75'
              />
            </div>
            <div class='mt-4 flex justify-between'>
              <div>
                <h3 class='text-sm text-gray-700'>
                  <a href='#'>
                    <span aria-hidden='true' class=''></span>
                    Phone Holder
                  </a>
                </h3>
                <p class='mt-1 text-sm text-gray-500'>Baby Pink, White, Red</p>
              </div>
            </div>
            <div className='card-actions justify-between'>
              <h1 className='font-poppins font-medium py-3 text-[#ff55ee]'>
                ₱130 - ₱150
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

      <Products />
    </div>
  );
};

export default PhoneHolder;
