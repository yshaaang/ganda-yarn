import React from 'react';
import { adminHeadLinks } from '../../constants/admin';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <div className='w-full flex py-1 justify-between items-center'>
      <ul className='list-none sm:flex hidden justify-end items-right mx-10 flex-1'>
        {adminHeadLinks.map((head, index) => (
          <li
            key={head.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-[#9ca3af] ${
              index === adminHeadLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <Link to={`/${head.path}`}>{head.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-right'>
        <ul className='list-none flex justify-end items-right flex-1'>
          {adminHeadLinks.map((head, index) => (
            <li
              key={head.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-[#9ca3af] ${
                index === adminHeadLinks.length - 1 ? 'mr-0' : 'mr-5'
              }`}
            >
              <Link to={`/${head.path}`}>{head.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
