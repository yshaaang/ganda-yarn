import styles from '../style';

import { Link } from 'react-router-dom';
import { shoppingCart } from '../constants';
import QuantitySelector from './QuantitySelector';

const OrderStatus = () => (
  <div className='bg-white w-full overflow-hidden'>
    <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div class='mx-auto max-w-2xl py-8 sm:py-15 lg:max-w-none lg:py-6'>
        <h2 class='text-[30px] text-center font-bold text-gray-900'>
          Order Status
        </h2>
        <div className='mx-auto text-center mt-5'>
          <ul className='steps' style={{ width: '500px' }}>
            <li className='step step-secondary'>To Pay</li>
            <li className='step step-secondary'>To Ship</li>
            <li className='step'>To Receive</li>
            <li className='step'>Completed</li>
          </ul>
        </div>

        <div className='bg-white border border-gray-300 rounded-lg mt-5'>
          <div class='mx-auto px-4 pt-10 pb-10 '>
            {/* Description and details  */}
            <div>
              <h3 class='sr-only'>Items List</h3>
            </div>
            <div className='mb-10 h-full py-4 border-b border-b-gray-400'>
              <div className='flex justify-between'>
                <h2 className='sm:text-2xl font-bold tracking-tight text-gray-900 '>
                  ORDER NUMBER: 123
                </h2>
                <h2 className='sm:text-xl font-semibold tracking-tight text-gray-900 '>
                  ORDER PLACED: [DATE]
                </h2>
              </div>
              {/*Order Summary*/}
              <div class='mt-6'>
                <h3 class='sr-only'>Order Summary</h3>
                <div class='flex items-center'>
                  <div className='container flex justify-between gap-3 border-b border-[#d1d5db] py-4'>
                    <p className='text-[#262626]'>Total (Items)</p>
                    <p className='text-[#262626]'>₱370</p>
                  </div>
                </div>
                <div class='flex items-center'>
                  <div className='container flex justify-between gap-3 border-b border-[#d1d5db] py-4'>
                    <p className='text-[#262626]'>Shipping Fee</p>
                    <p className='text-[#262626]'>+50</p>
                  </div>
                </div>

                <div class='flex items-center'>
                  <div className='container flex justify-between gap-3 py-4'>
                    <p className='text-[#ff55ee] text-[20px] font-bold'>
                      Order Total
                    </p>
                    <p className='text-[#ff55ee] text-[20px] font-bold'>₱420</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4'>
              <div className='flow-root'>
                <ul role='list' className='-my-6 divide-y divide-gray-200'>
                  {shoppingCart.map((product) => (
                    <li key={product.id} className='flex py-6'>
                      <div className='h-40 w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
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
                              <Link to={product.path}>{product.name}</Link>
                            </h3>
                            <p className='ml-4'>{product.price}</p>
                          </div>

                          <p className='mt-1 text-sm text-gray-500'>
                            {product.variant}
                          </p>
                        </div>
                        <div className='flex flex-1 items-end justify-between text-sm'>
                          <div className=''>
                            <p className='text-gray-500 mb-2'>Quantity: </p>

                            <QuantitySelector />
                          </div>

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
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrderStatus;
