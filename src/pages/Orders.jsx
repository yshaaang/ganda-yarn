import axios from 'axios';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountContext from '../context/AccountContext';
import { formatDate } from '../utility';

function Order({ order }) {
  const navigate = useNavigate();
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

  return (
    <div
      className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hover:cursor-pointer'
      onClick={() => {
        navigate(`/order_status/${order.id}`);
      }}
    >
      <div className='mx-auto max-w-2xl py-8 sm:py-15 lg:max-w-none lg:py-6'>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrdersPage() {
  const { session } = useContext(AccountContext);
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get('https://localhost:7206/api/Order/all');

    setOrders(response.data);

    return response.data;
  };

  useEffect(() => {
    fetchOrders();
  }, [session]);

  return (
    <div>
      <h2 className='mt-10 text-[30px] text-center font-bold text-gray-900'>
        My Orders
      </h2>
      {orders.map((order) => {
        return <Order key={order.id} order={order} />;
      })}
    </div>
  );
}
