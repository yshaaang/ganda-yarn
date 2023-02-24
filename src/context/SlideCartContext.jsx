import { createContext, useState } from "react";

const SlideCartContext = createContext({
  open: false,
  setOpen: (b) => {},
})

export const SlideCartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return <SlideCartContext.Provider value={{
    open,
    setOpen,
  }}>
    { children }
  </SlideCartContext.Provider>
}

export default SlideCartContext;