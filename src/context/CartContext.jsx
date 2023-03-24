import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AccountContext from "./AccountContext";
import toast, { Toaster } from "react-hot-toast";

const CartContext = createContext({
  carts: [],
  fetchCarts: async () => {},
  addCart: async (productId, attributeId, quantity = 1) => {},
  updateCart: async (cart) => {},
  deleteCart: async (cart) => {},
});

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();

  const [carts, setCarts] = useState([]);
  const { session, gotoLogin } = useContext(AccountContext);

  const fetchCarts = useCallback(async () => {
    if (session) {
      const response = await axios.get("https://localhost:7206/api/Cart");

      console.log({ carts: response.data });

      setCarts(response.data);
      return response.data;
    }
  }, [session]);

  const addCart = useCallback(
    async (productId, attributeId, quantity = 1) => {
      if (session) {
        const response = await axios.post("https://localhost:7206/api/Cart", {
          userId: session.user.id,
          productId,
          attributeId,
          quantity,
        });

        await fetchCarts();
        if (response.data) {
          toast.success("Added to cart successfully.");
        } else {
          toast.error(
            "Your cart quantity has already reached the product's stock."
          );
        }

        return response.data;
      } else {
        gotoLogin();
      }
    },
    [fetchCarts, session]
  );

  const updateCart = useCallback(
    async (cart) => {
      if (session) {
        const response = await axios.put("https://localhost:7206/api/Cart", {
          ...cart,
        });

        await fetchCarts();

        return response.data;
      } else {
        gotoLogin();
      }
    },
    [fetchCarts, session]
  );

  const deleteCart = useCallback(
    async (cart) => {
      if (session) {
        const response = await axios.post(
          "https://localhost:7206/api/Cart/delete",
          cart
        );

        await fetchCarts();

        return response.data;
      } else {
        gotoLogin();
      }
    },
    [fetchCarts, session]
  );

  useEffect(() => {
    fetchCarts();
  }, [session]);

  return (
    <CartContext.Provider
      value={{
        carts,
        fetchCarts,
        updateCart,
        addCart,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
