import React, { useContext, useEffect, useMemo, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { Link } from "react-router-dom";
import { shoppingCart } from "../constants";
import { useNavigate } from "react-router-dom";
import SlideCartContext from "../context/SlideCartContext";
import CartContext from "../context/CartContext";
import { toast } from "react-hot-toast";

function Cart({ cart, onRemove = () => {} }) {
  const { deleteCart, updateCart, carts } = useContext(CartContext);
  const [quantity, setQuantity] = useState(cart.quantity);

  if (!cart) {
    return <></>;
  }

  return (
    <li
      key={cart.product.id + cart.attribute.id + cart.userId}
      className="flex py-6"
    >
      <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={cart.attribute.imageLink}
          alt={cart.product.name + " " + cart.attribute.variant}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/product/${cart.product.id}`}>
                {cart.product.name}
              </Link>
            </h3>
            <p className="ml-4">₱{cart.attribute.price * quantity}</p>
          </div>

          <p className="mt-1 text-sm text-gray-500">{cart.attribute.variant}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="">
            <p className="text-gray-500 mb-2">Quantity:</p>
            <QuantitySelector
              min={1}
              max={cart.attribute.stock}
              initialValue={cart.quantity}
              onChange={(quantity) => {
                setQuantity(quantity);
                updateCart({
                  ...cart,
                  quantity,
                });
                console.log({ quantity });
              }}
            />
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-[#dc2626] hover:text-[#f87171]"
              onClick={async () => {
                await deleteCart(cart);
                onRemove();
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { open, setOpen } = useContext(SlideCartContext);
  const { carts, fetchCarts } = useContext(CartContext);

  useEffect(() => {
    if (carts && carts.length === 0) {
      toast.error("You have an empty cart. Add something to your cart first.");
      navigate("/");
    }
  }, [carts]);

  const subTotal = useMemo(() => {
    let total = 0;

    for (const cart of carts) {
      total += cart.attribute.price * cart.quantity;
    }

    return total;
  }, [carts]);

  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-15 lg:max-w-none lg:py-6">
          <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>

          <div className="bg-white border border-gray-300 rounded-lg mt-5">
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-10">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>

              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Order Summary</h2>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Order summary
                </h1>

                {/*Order Summary*/}
                <div className="mt-6">
                  <h3 className="sr-only">Order Summary</h3>
                  <div className="flex items-center">
                    <div className="container flex justify-between gap-3 border-b border-[#d1d5db] py-4">
                      <p className="text-[#262626]">Total (Items)</p>
                      <p className="text-[#262626]">₱{subTotal.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="container flex justify-between gap-3 border-b border-[#d1d5db] py-4">
                      <p className="text-[#262626]">Shipping Fee</p>
                      <p className="text-[#262626]">₱50.00</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="container flex justify-between gap-3 py-4">
                      <p className="text-black text-[20px] font-bold">
                        Order Total
                      </p>
                      <p className="text-[#262626] text-[20px] font-bold">
                        ₱{(subTotal + 50).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <Link to="/checkout_item">
                  <button className="mt-10 gap-2 flex w-full items-center justify-center rounded-md border border-transparent bg-[#ff55ee] py-3 px-8 text-base font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                    Checkout
                  </button>
                </Link>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                {/* Description and details  */}
                <div>
                  <h3 className="sr-only">Items List</h3>
                </div>

                <div className="mt-4">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {carts.map((cart) => {
                        return (
                          <Cart
                            key={cart.id}
                            cart={cart}
                            onRemove={() => {
                              fetchCarts();
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
    </div>
  );
};

export default ShoppingCart;
