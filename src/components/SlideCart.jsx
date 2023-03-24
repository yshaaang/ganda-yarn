import {
  Fragment,
  useState,
  useContext,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { shoppingCart } from "../constants";
import QuantitySelector from "./QuantitySelector";
import SlideCartContext from "../context/SlideCartContext";
import CartContext from "../context/CartContext";
import axios from "axios";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

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
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
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
          <p className="mt-0 text-sm text-gray-500">{cart.attribute.variant}</p>
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

export default function SlideCart() {
  const navigate = useNavigate();
  const { open, setOpen } = useContext(SlideCartContext);
  const { carts, fetchCarts } = useContext(CartContext);

  const subTotal = useMemo(() => {
    let total = 0;

    for (const cart of carts) {
      total += cart.attribute.price * cart.quantity;
    }

    return total;
  }, [carts]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={() => {
              setOpen(false);
            }}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
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

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>₱{subTotal.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          to="/shopping_cart"
                          className="flex items-center justify-center rounded-md border border-[#ff55ee] bg-white px-6 py-3 text-base font-medium text-[#ff55ee] shadow-sm hover:bg-[#e879f9] hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                          View Cart
                        </Link>
                      </div>
                      <div className="mt-3">
                        <div
                          className={cx(
                            "flex hover:cursor-pointer items-center justify-center rounded-md border border-transparent bg-[#ff55ee] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#e879f9]",
                            carts.length === 0 &&
                              "!bg-gray-500 !cursor-not-allowed"
                          )}
                          onClick={() => {
                            if (carts.length > 0) {
                              navigate("/checkout_item");
                            }
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                          Checkout
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
