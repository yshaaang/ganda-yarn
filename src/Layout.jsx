import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, SiteHeader, SlideCart } from "./components";
import styles from "./style";

const Layout = () => {
  return (
    <div>
      <div className="bg-[#dbf1fe] w-full">
        <div className="bg-[#eff6ff] w-full">
          <div className={styles.paddingX}>
            <div className={styles.flexStart}>
              <div className={styles.boxWidth}>
                <SiteHeader />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] w-full overflow-hidden">
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

      <div className="bg-[#161415] w-full overflow-hidden">
        <div className={styles.paddingX}>
          <div className={styles.flexStart}>
            <div className={styles.boxWidth}>
              <Footer />
            </div>
          </div>
        </div>
      </div>

      <SlideCart />
    </div>
  );
};

export default Layout;
