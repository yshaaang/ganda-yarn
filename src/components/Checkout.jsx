import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import RadioWithLabel from './RadioWithLabel';
import { shoppingCart } from '../constants';
import PlaceOrderModal from './PlaceOrderModal';

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-8 sm:py-15 lg:max-w-none lg:py-6'>
          <h2 className='text-2xl font-bold text-gray-900'>Checkout</h2>

          <div className='bg-white border border-gray-300 rounded-lg mt-5'>
            <div className='mx-auto max-w-2xl px-4 sm:pt-10 pb-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-10'>
              <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'></div>

              <div className='mt-4 lg:row-span-3 lg:mt-0'>
                <h2 className='sr-only'>Order Summary</h2>
                <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                  Order summary
                </h1>

                {/*Order Summary*/}
                <div className='mt-6'>
                  <h3 className='sr-only'>Order Summary</h3>

                  <div className='mt-8'>
                    <div className='flow-root'>
                      <ul
                        role='list'
                        className='-my-6 divide-y divide-gray-200'
                      >
                        {shoppingCart.map((product) => (
                          <li key={product.id} className='flex py-6'>
                            <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className='h-full w-full object-cover object-center'
                              />
                            </div>

                            <div className='ml-4 flex flex-1 flex-col'>
                              <div>
                                <div className='flex justify-between text-base font-medium text-gray-900'>
                                  <h3>
                                    <Link to={product.path}>
                                      {product.name}
                                    </Link>
                                  </h3>
                                  <p className='ml-4'>{product.price}</p>
                                </div>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {product.variant}
                                </p>
                              </div>
                              <div className='flex flex-1 items-end justify-between text-sm'>
                                <p className='text-gray-500'>
                                  Qty {product.quantity}
                                </p>

                                <div className='flex'>
                                  <button
                                    type='button'
                                    className='font-medium text-[#dc2626] hover:text-[#f87171]'
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='flex items-center mt-5'>
                    <div className='container flex justify-between gap-3 border-b border-[#d1d5db] py-4'>
                      <p className='text-[#262626]'>Total (Items)</p>
                      <p className='text-[#262626]'>₱370.00</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='container flex justify-between gap-3 border-b border-[#d1d5db] py-4'>
                      <p className='text-[#262626]'>Shipping Fee</p>
                      <p className='text-[#262626]'>+50.00</p>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <div className='container flex justify-between gap-3 py-4'>
                      <p className='text-black text-[20px] font-bold'>
                        Order Total
                      </p>
                      <p className='text-[#262626] text-[20px] font-bold'>
                        ₱420.00
                      </p>
                    </div>
                  </div>
                </div>

                <Link to='/checkout_item'>
                  <div>
                    <button
                      onClick={() => setShowModal(true)}
                      type='submit'
                      className='mt-10 gap-2 flex w-full items-center justify-center rounded-md border border-transparent bg-[#ff55ee] py-3 px-8 text-base font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
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
                          d='M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59'
                        />
                      </svg>
                      Place Order
                    </button>

                    {showModal && (
                      <PlaceOrderModal onClose={() => setShowModal(false)} />
                    )}
                  </div>
                </Link>
              </div>

              <div className='lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8'>
                {/* Description and details  */}

                <div className='mt-10 sm:mt-0'>
                  <div className='md:col-span-1'></div>
                  <div className='mt-5 md:col-span-2 md:mt-0'>
                    <form action='#' method='POST'>
                      <div className='overflow-hidden border rounded-md'>
                        <div className='bg-white px-4 py-5 sm:p-6'>
                          <div className='py-3 text-left '>
                            <h1 className='text-lg font-bold tracking-tight text-gray-900'>
                              Shipping Information
                            </h1>
                          </div>

                          <div className='grid grid-cols-6 gap-6 mb-5'>
                            <div className='col-span-6 sm:col-span-3'>
                              <label
                                for='first-name'
                                className='block text-sm font-medium text-gray-700'
                              >
                                First name
                              </label>
                              <input
                                type='text'
                                name='first-name'
                                id='first-name'
                                autocomplete='given-name'
                                className='mt-1 bg-white px-2 h-[35px] block w-full rounded-md border border-gray-300 shadow-smfocus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                              />
                            </div>

                            <div className='col-span-6 sm:col-span-3'>
                              <label
                                for='last-name'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Last name
                              </label>
                              <input
                                type='text'
                                name='last-name'
                                id='last-name'
                                autocomplete='family-name'
                                className='mt-1 bg-white px-2 h-[35px] block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm'
                              />
                            </div>

                            <div className='col-span-6 sm:col-span-6'>
                              <label
                                for='email-address'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Email address
                              </label>
                              <input
                                type='text'
                                name='email-address'
                                id='email-address'
                                autocomplete='email'
                                className='mt-1 bg-white px-2 h-[35px] block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm'
                              />
                            </div>

                            <div className='col-span-6 sm:col-span-3'>
                              <label
                                for='first-name'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Phone Number (+63)
                              </label>
                              <input
                                type='text'
                                name='first-name'
                                id='first-name'
                                autocomplete='given-name'
                                className='mt-1 bg-white px-2 h-[35px] block w-full rounded-md border border-gray-300 shadow-smfocus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                              />
                            </div>

                            <div className='col-span-6'>
                              <label
                                for='street-address'
                                className='block text-sm font-medium text-gray-700'
                              >
                                House Number
                              </label>
                              <input
                                type='text'
                                name='street-address'
                                id='street-address'
                                autocomplete='street-address'
                                className='mt-1 bg-white px-2 h-[35px] block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm'
                              />
                            </div>

                            <div className='col-span-6'>
                              <label
                                for='street-address'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Street address
                              </label>
                              <input
                                type='text'
                                name='street-address'
                                id='street-address'
                                autocomplete='street-address'
                                className='mt-1 bg-white px-2 h-[35px] block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm'
                              />
                            </div>

                            <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                              <label
                                for='city'
                                className='block text-sm font-medium text-gray-700'
                              >
                                City
                              </label>
                              <input
                                type='text'
                                name='city'
                                id='city'
                                autocomplete='address-level2'
                                className='mt-1 bg-white px-2 h-[35px] block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm'
                              />
                            </div>

                            <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                              <label
                                for='region'
                                className='block text-sm font-medium text-gray-700'
                              >
                                State / Province
                              </label>
                              <input
                                type='text'
                                name='region'
                                id='region'
                                autocomplete='address-level1'
                                className='mt-1 bg-white px-2 h-[35px] block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm'
                              />
                            </div>

                            <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                              <label
                                for='postal-code'
                                className='block text-sm font-medium text-gray-700'
                              >
                                ZIP / Postal code
                              </label>
                              <input
                                type='text'
                                name='postal-code'
                                id='postal-code'
                                autocomplete='postal-code'
                                className='mt-1 bg-white px-2 h-[35px] block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm'
                              />
                            </div>
                          </div>
                          <div className=' sm:block' aria-hidden='true'>
                            <div className='py-5'>
                              <div className='border-t border-gray-200'>
                                <div className='py-3 text-left '>
                                  <h1 className='text-lg font-bold tracking-tight text-gray-900 mt-5'>
                                    Shipping Method
                                  </h1>
                                </div>
                                <div className='grid grid-cols-6 gap-6'>
                                  <div className='col-span-6 sm:col-span-3'>
                                    <div className='bg-white font-poppins font-medium text-[15px] text-black max-width h-[110px] border border-gray-300 rounded-md px-4 py-3 cursor-pointer'>
                                      Standard Local
                                      <p
                                        className='text-gray-400 text-[13px] font-p
                                       font-regular'
                                      >
                                        3-7 business days
                                      </p>
                                      <div className='py-5'>₱50</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className=' sm:block' aria-hidden='true'>
                            <div className='py-5'>
                              <div className='border-t border-gray-200'>
                                <div className='py-3 text-left '>
                                  <h1 className='text-lg font-bold tracking-tight text-gray-900 mt-5'>
                                    Payment Method
                                  </h1>
                                </div>
                                <div className=''>
                                  <RadioWithLabel
                                    label='Payment Method'
                                    options={[
                                      'GCash',
                                      'PayPal',
                                      'Cash On Delivery',
                                    ]}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default Checkout;
