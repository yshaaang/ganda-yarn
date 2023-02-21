import React from 'react';
import { baguettebags_brown } from '../assets/gy_products/Baguette Bags';

const ShoppingCart = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div class='mx-auto max-w-2xl py-8 sm:py-15 lg:max-w-none lg:py-6'>
          <h2 class='text-2xl font-bold text-gray-900'>Shopping Cart</h2>

          <div className='bg-[#dbf1fe]'>
            <div class='mx-auto max-w-2xl px-4 pt-10 pb-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-10'>
              <div class='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'></div>

              <div class='mt-4 lg:row-span-3 lg:mt-0'>
                <h2 class='sr-only'>Customer Reviews</h2>
                <h1 class='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                  Order summary
                </h1>

                {/*Order Summary*/}
                <div class='mt-6'>
                  <h3 class='sr-only'>Order Summary</h3>
                  <div class='flex items-center'>
                    <div className='container flex justify-between gap-3 border-b border-[#d1d5db] py-4'>
                      <p className='text-[#262626]'>Total (Items)</p>
                      <p className='text-[#262626]'>₱300</p>
                    </div>
                  </div>
                  <div class='flex items-center'>
                    <div className='container flex justify-between gap-3 border-b border-[#d1d5db] py-4'>
                      <p className='text-[#262626]'>Shipping Fee</p>
                      <p className='text-[#262626]'>+50</p>
                    </div>
                  </div>
                  <div class='flex items-center'>
                    <div className='container flex justify-between gap-3 border-b border-[#d1d5db] py-4'>
                      <p className='text-[#262626]'>Discount</p>
                      <p className='text-[#262626]'>-100</p>
                    </div>
                  </div>
                  <div class='flex items-center'>
                    <div className='container flex justify-between gap-3 py-4'>
                      <p className='text-black text-[20px] font-bold'>
                        Order Total
                      </p>
                      <p className='text-[#262626] text-[20px] font-bold'>
                        ₱250
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type='submit'
                  class='mt-10 gap-2 flex w-full items-center justify-center rounded-md border border-transparent bg-[#ff55ee] py-3 px-8 text-base font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Checkout
                </button>
              </div>

              <div class='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
                {/* Description and details  */}
                <div>
                  <h3 class='sr-only'>Items List</h3>
                </div>

                <div className='avatar-container flex gap-3 border-b border-[#d1d5db] py-5'>
                  <img
                    className='h-[150px] w-[150px] mr-4 object-cover object-center'
                    src={baguettebags_brown}
                    alt=''
                  />
                  <div className='container'>
                    <div className='flex justify-between'>
                      <h2 className='font-bold text-black text-[20px]'>
                        Baguette Bag
                      </h2>
                      <h2 className='font-bold text-black text-[20px]'>₱300</h2>
                    </div>
                    <div className='flex gap-2 mt-2'>
                      <p class='font-poppins text-[15px]'>Variations:</p>
                      <div className='dropdown dropdown-right'>
                        <label
                          tabIndex={0}
                          className='btn btn-circle btn-ghost btn-xs text-info'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='black'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                            />
                          </svg>
                        </label>
                        <ul
                          tabIndex={0}
                          className='dropdown-content menu p-2 shadow bg-white rounded-box w-52'
                        >
                          <li>
                            <a>Pink</a>
                          </li>
                          <li>
                            <a>Brown</a>
                          </li>
                          <li>
                            <a>Violet</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className='font-poppins text-[15px]'>Brown</p>
                    <p className='text-black text-sm mt-5 text-justify mb-6'></p>
                  </div>
                </div>

                <div className='avatar-container flex gap-3 border-b border-[#d1d5db] py-5'>
                  <img
                    className='h-[150px] w-[150px] mr-4 object-cover object-center'
                    src={baguettebags_brown}
                    alt=''
                  />
                  <div className='container'>
                    <div className='flex justify-between'>
                      <h2 className='font-bold text-black text-[20px]'>
                        Baguette Bag
                      </h2>
                      <h2 className='font-bold text-black text-[20px]'>₱300</h2>
                    </div>
                    <div className='flex gap-2 mt-2'>
                      <p class='font-poppins text-[15px]'>Variations:</p>
                      <div className='dropdown dropdown-right'>
                        <label
                          tabIndex={0}
                          className='btn btn-circle btn-ghost btn-xs text-info'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='black'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                            />
                          </svg>
                        </label>
                        <ul
                          tabIndex={0}
                          className='dropdown-content menu p-2 shadow bg-white rounded-box w-52'
                        >
                          <li>
                            <a>Pink</a>
                          </li>
                          <li>
                            <a>Brown</a>
                          </li>
                          <li>
                            <a>Violet</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className='font-poppins text-[15px]'>Brown</p>
                    <p className='text-black text-sm mt-5 text-justify mb-6'></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
