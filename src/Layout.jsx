import React from 'react';
import styles from './style';
import { Outlet } from 'react-router-dom';
import { SiteHeader, Navbar, Footer } from './components';

const Layout = () => {
  return (
    <div>
      <div className='bg-[#dbf1fe] w-full overflow-hidden'>
        <div className='bg-[#eff6ff] w-full overflow-hidden'>
          <div className={styles.paddingX}>
            <div className={styles.flexStart}>
              <div className={styles.boxWidth}>
                <SiteHeader />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#ffffff] w-full overflow-hidden'>
          <div className={styles.paddingX}>
            <div className={styles.flexCenter}>
              <div className={styles.boxWidth}>
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <Outlet />

      <div className='bg-[#161415] w-full overflow-hidden'>
        <div className={styles.paddingX}>
          <div className={styles.flexStart}>
            <div className={styles.boxWidth}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
