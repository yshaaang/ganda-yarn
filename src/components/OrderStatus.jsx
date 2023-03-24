import axios from 'axios';
import cx from 'classnames';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import AccountContext from '../context/AccountContext';
import { formatDate } from '../utility';
import ReviewModal from './ReviewModal';

const OrderStatusProduct = ({
  orderProduct: _orderProduct,
  status,
  onRate = () => {},
}) => {
  const { product, attribute } = _orderProduct;

  const [orderProduct, setOrderProduct] = useState(_orderProduct);

  const fetchOrderProduct = async () => {
    const response = await axios.get(
      `https://localhost:7206/api/OrderProduct/${_orderProduct.id}`
    );

    setOrderProduct(response.data);
    return response.data;
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <li key={attribute.id} className='flex py-6'>
      <div className='h-40 w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <img
          src={attribute.imageLink}
          alt={product.name + ' ' + attribute.variant}
          className='h-full w-full object-cover object-center'
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
            <p className='ml-4'>₱{orderProduct.quantity * attribute.price}</p>
          </div>

          <p className='mt-1 text-sm text-gray-500'>{attribute.variant}</p>
        </div>
        <div className='flex flex-1 items-end justify-between text-sm'>
          <div className=''>
            <p className='text-gray-500 mb-2'>
              Quantity: {orderProduct.quantity}
            </p>
          </div>
          {status.code === 'DLV' && !orderProduct.review && (
            <div>
              <button
                className='btn btn-primary'
                onClick={() => {
                  setShowModal(true);
                }}
              >
                RATE
              </button>
            </div>
          )}
        </div>
      </div>

      <ReviewModal
        orderProduct={orderProduct}
        open={showModal}
        setOpen={setShowModal}
        onSuccess={() => {
          fetchOrderProduct();
          onRate();
        }}
      />
    </li>
  );
};

const OrderStatus = () => {
  const { id } = useParams();

  const [order, setOrder] = useState();

  const { session } = useContext(AccountContext);

  const { data: statuses = [] } = useQuery('statuses', async () => {
    const response = await axios.get('https://localhost:7206/api/OrderStatus');

    return response.data.sort((a, b) => a.order - b.order);
  });

  const fetchOrder = async () => {
    const response = await axios.get(`https://localhost:7206/api/Order/${id}`);

    setOrder(response.data);

    console.log(response.data);
  };

  const shippingFee = 50;

  const orderTotal = useMemo(() => {
    let total = 0;
    if (!order) {
      return total;
    }

    for (const orderProduct of order.orderProducts) {
      total += orderProduct.quantity * orderProduct.attribute.price;
    }

    return total;
  }, [order]);

  useEffect(() => {
    fetchOrder();
  }, [session]);

  if (!order) {
    return null;
  }

  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-8 sm:py-15 lg:max-w-none lg:py-6'>
          <h2 className='text-[30px] text-center font-bold text-gray-900'>
            Order Status
          </h2>
          <div className='mx-auto text-center mt-5'>
            <ul className='steps' style={{ width: '500px' }}>
              {/* <li className="step step-secondary">Processing</li>
              <li className="step step-secondary">To Ship</li>
              <li className="step">To Receive</li> */}
              {statuses.map((status) => {
                return (
                  <li
                    key={status.code}
                    className={cx(
                      'step',
                      status.order <= order.statusCodeNavigation.order &&
                        'step-secondary'
                    )}
                  >
                    {status.description}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='bg-white border border-gray-300 rounded-lg mt-5'>
            <div className='mx-auto px-4 pt-10 pb-10 '>
              {/* Description and details  */}
              <div>
                <h3 className='sr-only'>Items List</h3>
              </div>
              <div className='mb-10 h-full py-4 border-b border-b-gray-400'>
                <div className='flex justify-between'>
                  <h2 className='sm:text-2xl font-bold tracking-tight text-gray-900 '>
                    <div>ORDER NUMBER:</div>
                    <div className='text-sm font-normal'>{order.id}</div>
                  </h2>
                  <h2 className='sm:text-xl font-semibold tracking-tight text-gray-900 '>
                    ORDER PLACED: {formatDate(order.createdAt)}
                  </h2>
                </div>
                {/*Order Summary*/}
                <div className='mt-6'>
                  <h3 className='sr-only'>Order Summary</h3>
                  <div className='flex items-center'>
                    <div className='container flex justify-between gap-3 border-b border-[#d1d5db] py-4'>
                      <p className='text-[#262626]'>Total (Items)</p>
                      <p className='text-[#262626]'>₱{orderTotal}</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='container flex justify-between gap-3 border-b border-[#d1d5db] py-4'>
                      <p className='text-[#262626]'>Shipping Fee</p>
                      <p className='text-[#262626]'>₱{shippingFee}</p>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <div className='container flex justify-between gap-3 py-4'>
                      <p className='text-[#ff55ee] text-[20px] font-bold'>
                        Order Total
                      </p>
                      <p className='text-[#ff55ee] text-[20px] font-bold'>
                        ₱{orderTotal + shippingFee}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                <div className='flow-root'>
                  <ul role='list' className='-my-6 divide-y divide-gray-200'>
                    {order.orderProducts.map((orderProduct) => {
                      return (
                        <OrderStatusProduct
                          key={orderProduct.id}
                          orderProduct={orderProduct}
                          status={order.statusCodeNavigation}
                          onRate={() => {
                            fetchOrder();
                          }}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
