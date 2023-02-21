import React from 'react';
import {
  baguettebags_brown,
  baguettebags_pink,
  baguettebags_violet,
} from '../../assets/gy_products/Baguette Bags';

const BaguetteBags = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      {/*Images*/}
      <div class='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
        <div class='aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block'>
          <img
            src={baguettebags_pink}
            alt='Two each of gray, white, and black shirts laying flat.'
            class='h-full w-full object-cover object-center'
          />
        </div>

        <div class='aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block'>
          <img
            src={baguettebags_brown}
            alt='Two each of gray, white, and black shirts laying flat.'
            class='h-full w-full object-cover object-center'
          />
        </div>

        <div class='aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4'>
          <img
            src={baguettebags_violet}
            alt='Model wearing plain white basic tee.'
            class='h-full w-full object-cover object-center'
          />
        </div>
      </div>

      {/*Product Info*/}
      <div class='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 '>
        <div class='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
          <h1 class='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
            Baguette Bag
          </h1>
        </div>
        {/*Options*/}
        <div class='mt-4 lg:row-span-3 lg:mt-0'>
          <h2 class='sr-only'>Product information</h2>
          <p class='text-3xl tracking-tight text-[#ff55ee]'>₱300</p>

          {/*Reviews*/}
          <div class='mt-6'>
            <h3 class='sr-only'>Reviews</h3>
            <div class='flex items-center'>
              <div class='flex items-center'>
                {/*Active: "text-gray-900", Default: "text-gray-200"*/}
                <svg
                  class='text-gray-900 h-5 w-5 flex-shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clip-rule='evenodd'
                  />
                </svg>

                <svg
                  class='text-gray-900 h-5 w-5 flex-shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clip-rule='evenodd'
                  />
                </svg>

                <svg
                  class='text-gray-900 h-5 w-5 flex-shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clip-rule='evenodd'
                  />
                </svg>

                <svg
                  class='text-gray-900 h-5 w-5 flex-shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clip-rule='evenodd'
                  />
                </svg>

                <svg
                  class='text-gray-200 h-5 w-5 flex-shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clip-rule='evenodd'
                  />
                </svg>
              </div>
              <p class='sr-only'>4 out of 5 stars</p>
              <a
                href='#'
                class='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'
              >
                117 reviews
              </a>
            </div>
          </div>

          <form class='mt-10'>
            {/*  Colors  */}
            <div>
              <h3 class='text-sm font-medium text-gray-900'>Color</h3>

              <fieldset class='mt-4'>
                <legend class='sr-only'>Choose a color</legend>
                <div class='flex items-center space-x-3'>
                  {/* 
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                */}
                  <label class='-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400'>
                    <input
                      type='radio'
                      name='color-choice'
                      value='Pink'
                      class='sr-only'
                      aria-labelledby='color-choice-0-label'
                    />
                    <span id='color-choice-0-label' class='sr-only'>
                      {' '}
                      White{' '}
                    </span>
                    <span
                      aria-hidden='true'
                      class='h-8 w-8 bg-[#f472b6] border border-black border-opacity-10 rounded-full'
                    ></span>
                  </label>

                  {/* 
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                */}
                  <label class='-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400'>
                    <input
                      type='radio'
                      name='color-choice'
                      value='Brown'
                      class='sr-only'
                      aria-labelledby='color-choice-1-label'
                    />
                    <span id='color-choice-1-label' class='sr-only'>
                      {' '}
                      Brown{' '}
                    </span>
                    <span
                      aria-hidden='true'
                      class='h-8 w-8 bg-[#5f3e2b] border border-black border-opacity-10 rounded-full'
                    ></span>
                  </label>

                  {/* 
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                 */}
                  <label class='-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900'>
                    <input
                      type='radio'
                      name='color-choice'
                      value='Violet'
                      class='sr-only'
                      aria-labelledby='color-choice-2-label'
                    />
                    <span id='color-choice-2-label' class='sr-only'>
                      {' '}
                      Violet{' '}
                    </span>
                    <span
                      aria-hidden='true'
                      class='h-8 w-8 bg-[#a78bfa] border border-black border-opacity-10 rounded-full'
                    ></span>
                  </label>
                </div>
              </fieldset>
            </div>

            <button
              type='submit'
              class='mt-20 gap-2 flex w-full items-center justify-center rounded-md border border-transparent bg-[#ff55ee] py-3 px-8 text-base font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
              Add to cart
            </button>
          </form>
        </div>
        <div class='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
          {/* Description and details  */}
          <div>
            <h3 class='sr-only'>Description</h3>

            <div class='space-y-6'>
              <p class='text-base text-gray-900 text-justify'>
                The Ganda Yarn's Baguette Bag is a unique, stylish accessory
                made with high-quality materials and expert craftsmanship,
                featuring a classic baguette shape and a beautiful crochet
                pattern. This crochet baguette bag is eco-friendly and
                sustainable, made by hand with no mass production. It is a
                perfect choice for those looking for a unique and stylish
                accessory or a practical solution for carrying essentials.
              </p>
            </div>
          </div>

          <div class='mt-10'>
            <h3 class='text-sm font-medium text-gray-900'>
              Available in Colors:
            </h3>

            <div class='mt-4'>
              <ul role='list' class='list-disc space-y-2 pl-4 text-sm'>
                <li class='text-gray-400'>
                  <span class='text-gray-600'>Pink</span>
                </li>

                <li class='text-gray-400'>
                  <span class='text-gray-600'>Brown</span>
                </li>

                <li class='text-gray-400'>
                  <span class='text-gray-600'>Violet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/** Customer Reviews */}
      <div className='bg-[#dbf1fe]'>
        <div class='mx-auto max-w-2xl px-4 pt-10 pb-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-10'>
          <div class='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'></div>
          {/*Options*/}
          <div class='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 class='sr-only'>Customer Reviews</h2>
            <h1 class='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              Customer Reviews
            </h1>

            {/*Reviews*/}
            <div class='mt-6'>
              <h3 class='sr-only'>Reviews</h3>
              <div class='flex items-center'>
                <div class='flex items-center'>
                  {/*Active: "text-gray-900", Default: "text-gray-200"*/}
                  <div className='rating'>
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                      checked
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                  </div>
                </div>
                <p class='sr-only'>4 out of 5 stars</p>
                <a
                  href='#'
                  class='ml-3 text-sm font-medium text-[#ff55ee] hover:text-indigo-500'
                >
                  117 reviews
                </a>
              </div>
            </div>

            <div className='mt-10'>
              <p className='font-bold text-black mb-2'>Your Rating:</p>
              <div className='rating mb-5'>
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                  checked
                />
              </div>

              <p className='font-bold text-black mb-2'>Body of Review:</p>
              <textarea
                placeholder='Write your product review here'
                className=' bg-white textarea textarea-bordered textarea-md gap-2 flex w-full items-center justify-center'
              ></textarea>
            </div>
            <button
              type='submit'
              class='mt-10 gap-2 flex w-full items-center justify-center rounded-md border border-transparent bg-[#ff55ee] py-3 px-8 text-base font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Submit Review
            </button>
          </div>

          <div class='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
            {/* Description and details  */}
            <div>
              <h3 class='sr-only'>Reviews List</h3>

              <div className='avatar-container flex gap-3 border-b border-[#d1d5db] py-5'>
                <img
                  className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                  src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <div>
                  <h2 className='font-bold text-black'>Emily Rose Smith</h2>
                  <div className='rating rating-sm'>
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                      checked
                    />
                  </div>
                  <p className='text-sm'>February 21, 2023</p>
                  <p className='text-black text-sm mt-5 text-justify mb-6'>
                    I am absolutely in love with my new crocheted baguette bag
                    in pink! The craftsmanship is superb, and the attention to
                    detail is amazing. The bag is both stylish and functional -
                    I get compliments on it every time I wear it out. The bag is
                    also very versatile and can be dressed up or down. I
                    appreciate that the bag is eco-friendly and ethically made.
                    Overall, I'm extremely satisfied with my purchase and would
                    highly recommend this bag to anyone looking for a unique and
                    high-quality accessory.
                  </p>
                </div>
              </div>

              <div className='avatar-container flex gap-3 border-b border-[#d1d5db] py-5'>
                <img
                  className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                  src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <div>
                  <h2 className='font-bold text-black'>Emily Rose Smith</h2>
                  <div className='rating rating-sm'>
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                    />
                    <input
                      type='radio'
                      name='rating-2'
                      className='mask mask-star-2 bg-orange-400'
                      checked
                    />
                  </div>
                  <p className='text-sm'>February 21, 2023</p>
                  <p className='text-black text-sm mt-5 text-justify mb-6'>
                    I am absolutely in love with my new crocheted baguette bag
                    in pink! The craftsmanship is superb, and the attention to
                    detail is amazing. The bag is both stylish and functional -
                    I get compliments on it every time I wear it out. The bag is
                    also very versatile and can be dressed up or down. I
                    appreciate that the bag is eco-friendly and ethically made.
                    Overall, I'm extremely satisfied with my purchase and would
                    highly recommend this bag to anyone looking for a unique and
                    high-quality accessory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white pt-4'>
        <div class='mx-auto max-w-2xl py-4 px-4 sm:py-18 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 class='text-2xl font-bold tracking-tight text-gray-900'>
            Baguette Bags
          </h2>

          <div class='mt-6 mb-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            <div class='group relative'>
              <div class='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                <img
                  src={baguettebags_brown}
                  alt='Baguette Bag Brown'
                  class='h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer hover:opacity-75'
                />
              </div>
              <div class='mt-4 flex justify-between'>
                <div>
                  <h3 class='text-sm text-gray-700'>
                    <a href='#'>
                      <span aria-hidden='true' class=''></span>
                      Baguette Bag
                    </a>
                  </h3>
                  <p class='mt-1 text-sm text-gray-500'>Brown, Pink, Violet</p>
                </div>
              </div>
              <div className='card-actions justify-between'>
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
        </div>
      </div>
    </div>
  );
};

export default BaguetteBags;
