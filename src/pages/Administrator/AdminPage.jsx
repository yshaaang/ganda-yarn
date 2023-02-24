import React from 'react';
import styles from '../../style';
import CRUD from './CRUD';
import AdminHeader from './AdminHeader';
import AdminNavbar from './AdminNavbar';

const AdminPage = () => {
  return (
    <div>
      <div className='bg-[#dbf1fe] w-full overflow-hidden'>
        <div className='bg-[#eff6ff] w-full overflow-hidden'>
          <div className={styles.paddingX}>
            <div className={styles.flexStart}>
              <div className={styles.boxWidth}>
                <AdminHeader />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#ffffff] border-b border-t w-full overflow-hidden'>
          <div className={styles.paddingX}>
            <div className={styles.flexCenter}>
              <div className={styles.boxWidth}>
                <AdminNavbar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CRUD />
    </div>
  );
};

export default AdminPage;
