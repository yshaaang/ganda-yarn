import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { headLinks } from '../constants';
import AccountContext from '../context/AccountContext';

const SiteHeader = () => {
  const { session, logout } = useContext(AccountContext);

  return (
    <div className='w-full flex py-1 justify-between items-center z-100'>
      <ul className='list-none sm:flex hidden justify-end items-right mx-10 flex-1'>
        {!session ? (
          headLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-[#9ca3af] ${
                index === headLinks.length - 1 ? 'mr-0' : 'mr-10'
              }`}
            >
              <Link to={`/${nav.path}`}>{nav.title}</Link>
            </li>
          ))
        ) : (
          <div className='dropdown dropdown-bottom dropdown-end'>
            <label
              tabIndex={0}
              className='font-poppins font-normal cursor-pointer text-[16px] text-[#9ca3af]'
            >
              {session.user.firstName}
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
              style={{ zIndex: 1 }}
            >
              <li>
                <Link to={'/orders'}>Orders</Link>
              </li>
              <li>
                <a
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-right'>
        <ul className='list-none flex justify-end items-right flex-1'>
          {!session ? (
            headLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-[#9ca3af] ${
                  index === headLinks.length - 1 ? 'mr-0' : 'mr-10'
                }`}
              >
                <Link to={`/${nav.path}`}>{nav.title}</Link>
              </li>
            ))
          ) : (
            <div className='dropdown dropdown-bottom dropdown-end'>
              <label
                tabIndex={0}
                className='font-poppins font-normal cursor-pointer text-[16px] text-[#9ca3af]'
              >
                {session.user.firstName}
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                style={{ zIndex: 1 }}
              >
                <li>
                  <a>Orders</a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SiteHeader;
