import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import SlideCartContext from "./context/SlideCartContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { setOpen } = useContext(SlideCartContext)

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  return null;
}
