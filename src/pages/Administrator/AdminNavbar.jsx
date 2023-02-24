import { useState } from 'react';
import { logo, menu, close } from '../../assets';
import { Link } from 'react-router-dom';
import { adminNavLinks } from '../../constants/admin';

const AdminNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Link to='/'>
        <img src={logo} alt='ganda yarn' className='w-[124-px] h-[32px]' />
      </Link>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 mr-8'>
        {adminNavLinks.map((adNav, index) => (
          <li
            key={adNav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
              index === adminNavLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <Link to={`/${adNav.path}`}>{adNav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
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
            {adminNavLinks.map((adNav, index) => (
              <li
                key={adNav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
                  index === adminNavLinks.length - 1 ? 'mr-0' : 'mb-4'
                }`}
                onClick={() => setToggle(false)}
              >
                <Link to={`/${adNav.path}`}>{adNav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
