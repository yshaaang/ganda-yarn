import React from 'react';
import { headLinks } from '../constants';
import { Link } from 'react-router-dom';

const SiteHeader = () => {
  return (
    <div className='w-full flex py-1 justify-between items-center'>
      <ul className='list-none sm:flex hidden justify-end items-right mx-10 flex-1'>
        {headLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-[#9ca3af] ${
              index === headLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <Link to={`/${nav.path}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-right'>
        <ul className='list-none flex justify-end items-right flex-1'>
          {headLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-[#9ca3af] ${
                index === headLinks.length - 1 ? 'mr-0' : 'mr-5'
              }`}
            >
              <Link to={`/${nav.path}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SiteHeader;
