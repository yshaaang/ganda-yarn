import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useCallback, useContext, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import AccountContext from "../context/AccountContext";

export default function ReviewModal({
  orderProduct,
  open,
  setOpen,
  onSuccess = () => {},
}) {
  const cancelButtonRef = useRef(null);
  const { session } = useContext(AccountContext);

  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const submitReview = useCallback(async () => {
    if (session) {
      const response = await axios.post("https://localhost:7206/api/Review", {
        userId: session.user.id,
        rate: rating,
        comment: review,
        orderProductId: orderProduct.id,
      });

      onSuccess(response.data);
      setOpen(false);
      toast.success("Review Added!");

      return response.data;
    }
  }, [rating, review, orderProduct, session]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="">
                  <div className="mx-auto max-w-2xl px-4 pt-10 pb-10 sm:px-6  lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-10">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>
                    {/*Options*/}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                      <div className="mt-8">
                        <p className="text-2xl font-bold text-black mb-2">
                          Your Rating:
                        </p>
                        <div className="rating rating-sm">
                          {[1, 2, 3, 4, 5].map((rating) => {
                            return (
                              <input
                                key={rating}
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                onChange={(e) => {
                                  setRating(rating);
                                }}
                              />
                            );
                          })}
                        </div>

                        <p className="font-bold text-black mb-2 mt-5">
                          Body of Review:
                        </p>
                        <textarea
                          placeholder="Write your product review here"
                          className=" bg-white textarea textarea-bordered textarea-md gap-2 flex w-full items-center justify-center"
                          onChange={(e) => {
                            setReview(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="gap-2 flex w-full items-center justify-center rounded-md border border-transparent bg-[#ff55ee] py-3 px-8 text-base font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={submitReview}
                  >
                    Submit Review
                  </button>
                  {/* <div className="flex justify-center w-full">
                    <Link to={`/`} path="order_status" className=" w-full ">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent bg-[#ff55ee] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#e879f9] focus:outline-none focus:ring-2 focus:ring-[#3eadcf] focus:ring-offset-2 "
                        onClick={() => setOpen(false)}
                      >
                        View Order Status
                      </button>
                    </Link>
                  </div> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
