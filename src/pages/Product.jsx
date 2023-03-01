import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

// const product = {
//   name: 'Baguette Bags',
//   price: '₱300',
//   href: '#',

//   images: [
//     {
//       src: baguettebags_brown,
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: baguettebags_pink,
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: baguettebags_violet,
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],

//   variants: [
//     { name: 'Brown', inStock: true },
//     { name: 'Pink', inStock: true },
//     { name: 'Violet', inStock: true },
//     { name: 'Red', inStock: false },
//   ],
//   description: `The Ganda Yarns Baguette Bag is a unique, stylish accessory
//   made with high-quality materials and expert craftsmanship,
//   featuring a classic baguette shape and a beautiful crochet
//   pattern. This crochet baguette bag is eco-friendly and
//   sustainable, made by hand with no mass production. It's a
//   perfect choice for those looking for a unique and stylish
//   accessory or a practical solution for carrying essentials.`,

//   highlights: ['Brown', 'Pink', 'Violet'],
// };
const reviews = { href: '#', average: 4, totalCount: 117 };
const totalStocks = { href: '#', totalCount: 10 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Product() {
  const { id } = useParams();
  // const [selectedSize, setSelectedSize] = useState(product.variants[2]);

  const [product, setProduct] = useState();
  const [selectedAttribute, setSelectedAttribute] = useState();

  useEffect(() => {
    axios.get(`https://localhost:7206/api/Product/${id}`).then((response) => {
      setProduct(response.data);
    })
  }, []);

  useEffect(() => {
    if (product) {
      for (let i = 0; i < product.productAttributes.length; i++) {
        if (product.productAttributes[i].stock > 0) {
          setSelectedAttribute(product.productAttributes[i]);
          break;
        }
      }
    }
  }, [product]);

  // return <>{JSON.stringify(product ?? {})}</>

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className='bg-white'>
      <div className='pt-6'>
        {/* Image gallery */}
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          {product.productAttributes.slice(0, 3).map((attr) => {
            return  <div key={attr.id} className='aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block'>
            <img
              src={attr.imageLink}
              alt={`${attr.variant} ${product.name}`}
              className='h-full w-full object-cover object-center'
            />
          </div>
          })}
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl tracking-tight font-poppins font-semibold text-[#ff55ee]'>
              {selectedAttribute ? `₱${selectedAttribute.price}` : "Out of Stock"}
            </p>

            {/* Reviews */}
            {/* <div className='mt-6'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? 'text-orange-400'
                          : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className='ml-3 text-sm font-medium text-orange-400 hover:text-[#fdba74]'
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div> */}

            {selectedAttribute && <p className='mt-7 text-sm font-medium text-gray-500'>
              Total Stocks: {product.productAttributes.reduce((totalStock, attr) => totalStock + attr.stock, 0)}
              <p>{selectedAttribute.variant} Stock: {selectedAttribute.stock}</p>
            </p>}

            <form className='mt-5'>
              <div className=''>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Variants
                  </h3>
                </div>

                <RadioGroup
                  value={selectedAttribute?.id}
                  onChange={(attrId) => {
                    setSelectedAttribute(product.productAttributes.find((attr) => attr.id === attrId))
                  }}
                  className='mt-4'
                >
                  <RadioGroup.Label className='sr-only'>
                    {' '}
                    Choose a variant{' '}
                  </RadioGroup.Label>
                  <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                    {product.productAttributes.map((attr) => (
                      <RadioGroup.Option
                        key={attr.variant}
                        value={attr.id}
                        disabled={attr.stock <= 0}
                        className={({ active }) =>
                          classNames(
                            attr.stock > 0
                              ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                              : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as='span' className={classNames("text-center", attr.stock <= 0 && "text-gray-600")}>
                              {attr.variant}
                            </RadioGroup.Label>
                            {attr.stock > 0 ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked
                                    ? 'border-indigo-500'
                                    : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden='true'
                              />
                            ) : (
                              <span
                                aria-hidden='true'
                                className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
                              >
                                <svg
                                  className='absolute inset-0 h-full w-full stroke-2 text-gray-200'
                                  viewBox='0 0 100 100'
                                  preserveAspectRatio='none'
                                  stroke='currentColor'
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect='non-scaling-stroke'
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type='submit'
                class={
                  classNames('mt-10 gap-2 flex w-full items-center justify-center rounded-md border border-transparent bg-[#ff55ee] py-3 px-8 text-base font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2', !selectedAttribute && "!bg-gray-500 cursor-not-allowed")
                }
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

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
            {/* Description */}
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>
                  {product.description}
                </p>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>
                Available in:
              </h3>

              <div className='mt-4'>
                <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
                  {product.productAttributes.map((attr) => (
                    <li key={attr.id} className='text-gray-400'>
                      <span className='text-gray-600'>{attr.variant}</span>
                    </li>
                  ))}
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

              {/* Reviews */}
              <div className='mt-6'>
                <h3 className='sr-only'>Reviews</h3>
                <div className='flex items-center'>
                  <div className='flex items-center'>
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-orange-400'
                            : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />
                    ))}
                  </div>
                  <p className='sr-only'>{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className='ml-3 text-sm font-medium text-orange-400 hover:text-[#fdba74]'
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <div className='mt-8'>
                <p className='font-bold text-black mb-2'>Your Rating:</p>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? 'text-orange-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>

                <p className='font-bold text-black mb-2 mt-5'>
                  Body of Review:
                </p>
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
                      detail is amazing. The bag is both stylish and functional
                      - I get compliments on it every time I wear it out. The
                      bag is also very versatile and can be dressed up or down.
                      I appreciate that the bag is eco-friendly and ethically
                      made. Overall, I'm extremely satisfied with my purchase
                      and would highly recommend this bag to anyone looking for
                      a unique and high-quality accessory.
                    </p>
                  </div>
                </div>

                <div className='avatar-container flex gap-3 border-b border-[#d1d5db] py-5'>
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
                      detail is amazing. The bag is both stylish and functional
                      - I get compliments on it every time I wear it out. The
                      bag is also very versatile and can be dressed up or down.
                      I appreciate that the bag is eco-friendly and ethically
                      made. Overall, I'm extremely satisfied with my purchase
                      and would highly recommend this bag to anyone looking for
                      a unique and high-quality accessory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
