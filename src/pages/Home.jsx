import styles from "../style";
import { useContext } from "react";
import { Hero, Services, Featured } from "../components";
import AccountContext from "../context/AccountContext";

const Home = () => {
  const { session } = useContext(AccountContext);

  return (
    <section id="products" className={`flex md:flex-row flex-col`}>
      <div className="bg-[#dbf1fe] w-full overflow-hidden">
        <div className={styles.flexStart}>
          <div className={styles.boxWidth}>
            <Hero />
          </div>
        </div>

        <div className="bg-[#ffffff] w-full overflow-hidden">
          <div className={styles.paddingX}>
            <div className={styles.flexStart}>
              <div className={styles.boxWidth}>
                <Services />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] w-full overflow-hidden">
          <div className={styles.paddingX}>
            <div className={styles.flexStart}>
              <div className={styles.boxWidth}>
                <Featured />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
