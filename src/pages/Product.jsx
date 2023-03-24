import { RadioGroup } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import pluralize from 'pluralize';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { formatDate } from '../utility';

const reviews = { href: '#', average: 4, totalCount: 117 };
const totalStocks = { href: '#', totalCount: 10 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState();

  const { addCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://localhost:7206/api/Product/${id}`).then((response) => {
      setProduct(response.data);
    });
    axios
      .get(`https://localhost:7206/api/Review/Product/${id}`)
      .then((response) => {
        setReviews(response.data);
      });
  }, []);

  const average = useMemo(() => {
    let average = 0;
    for (const review of reviews) {
      average += review.rate / reviews.length;
    }

    return average;
  }, [reviews]);

  const sold = useMemo(() => {
    let sold = 0;
    if (!product) {
      return sold;
    }
    for (const productAttribute of product.productAttributes) {
      sold += productAttribute.sold;
    }

    return sold;
  }, [product]);

  const attributeSold = useMemo(() => {
    if (!selectedAttribute) {
      return 0;
    }

    return selectedAttribute.sold;
  }, [selectedAttribute]);

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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-white'>
      <div className='pt-6'>
        {/* Image gallery */}
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          {product.productAttributes.slice(0, 3).map((attr) => {
            return (
              <div
                key={attr.id}
                className='aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block'
              >
                <img
                  src={attr.imageLink}
                  alt={`${attr.variant} ${product.name}`}
                  className='h-full w-full object-cover object-center'
                />
              </div>
            );
          })}
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {product.name}
            </h1>
            <p className='text-black text-lg'>{sold} sold</p>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product Information</h2>
            <p className='text-3xl tracking-tight font-poppins font-semibold text-[#ff55ee]'>
              {selectedAttribute
                ? `₱${selectedAttribute.price}`
                : 'Out of Stock'}
            </p>
            {selectedAttribute && (
              <p className='text-black'>
                {attributeSold} {selectedAttribute.variant} sold
              </p>
            )}

            {/* Reviews */}
            <div className='mt-6'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        average > rating ? 'text-orange-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className='ml-3 text-sm font-medium text-orange-400 hover:text-[#fdba74]'
                >
                  {reviews.length} {pluralize('review', reviews.length)}
                </a>
              </div>
            </div>

            {selectedAttribute && (
              <p className='mt-7 text-sm font-medium text-gray-500'>
                Total Stock:{' '}
                {product.productAttributes.reduce(
                  (totalStock, attr) => totalStock + attr.stock,
                  0
                )}
                <p>
                  {selectedAttribute.variant} Stock: {selectedAttribute.stock}
                </p>
              </p>
            )}

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
                    setSelectedAttribute(
                      product.productAttributes.find(
                        (attr) => attr.id === attrId
                      )
                    );
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
                            <RadioGroup.Label
                              as='span'
                              className={classNames(
                                'text-center',
                                attr.stock <= 0 && 'text-gray-600'
                              )}
                            >
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
                className={classNames(
                  'mt-10 gap-2 flex w-full items-center justify-center rounded-md border border-transparent bg-[#ff55ee] py-3 px-8 text-base font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                  !selectedAttribute && '!bg-gray-500 cursor-not-allowed'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedAttribute) {
                    addCart(product.id, selectedAttribute.id, 1);
                  }
                }}
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
                <p className='text-base text-gray-900'>{product.description}</p>
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
          <div className='mx-auto max-w-2xl px-4 pt-10 pb-10 sm:px-6  lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-10'>
            <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'></div>
            <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
              {/* Description and details  */}
              <div>
                <h2 className='sr-only'>Customer Reviews</h2>
                <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                  Customer Reviews
                </h1>
                <h3 className='sr-only'>Reviews List</h3>
                {reviews.length === 0 && (
                  <div className='text-black'>
                    There are no reviews for this product yet.
                  </div>
                )}
                {reviews
                  .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                  .slice(0, 5)
                  .map((review) => {
                    return (
                      <div
                        key={review.id}
                        className='avatar-container flex gap-3 border-b border-[#d1d5db] py-5'
                      >
                        <div>
                          <h2 className='font-bold text-black'>
                            {review.user.firstName} {review.user.lastName}
                          </h2>
                          <div className='flex items-center'>
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  review.rate > rating
                                    ? 'text-orange-400'
                                    : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden='true'
                              />
                            ))}
                          </div>
                          <p className='text-sm'>
                            {formatDate(review.createdAt)}
                          </p>
                          <p className='text-black text-sm mt-5 text-justify mb-6'>
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
