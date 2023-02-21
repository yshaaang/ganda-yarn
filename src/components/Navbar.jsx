import { useState, useContext } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import SlideCart from './SlideCart';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const { isOpen, setIsOpen } = useContext(SlideCart);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Link to='/'>
        <img src={logo} alt='ganda yarn' className='w-[124-px] h-[32px]' />
      </Link>
      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <Link to={`/${nav.path}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <ul className='list-none sm:flex hidden justify-right items-right'>
        <li className='cursor-pointer mr-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='black'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </li>

        <li
          className={`cursor-pointer mr-10' `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Link to='/slidecart' path='slidecart'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#3eadcf'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
          </Link>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <ul className='list-none flex  justify-right items-right'>
          <li className='cursor-pointer mr-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='black'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </li>

          <li className='cursor-pointer mr-4'>
            <Link to='/slidecart' path='slidecart'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#3eadcf'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </Link>
          </li>
        </ul>

        <img
          src={toggle ? close : menu}
          alt='menu toggle'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-[#60a5fa] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          style={{ zIndex: 1 }}
        >
          <ul className='list-none flex flex-col justify-center items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                }`}
                onClick={() => setToggle(false)}
              >
                <Link to={`/${nav.path}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
