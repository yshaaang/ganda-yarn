import styles from '../style';
import { Hero, Services, Featured } from '../components';

const Home = () => {
  return (
    <div className='bg-[#dbf1fe] w-full overflow-hidden'>
      <div className={styles.flexStart}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>

      <div className='bg-[#ffffff] w-full overflow-hidden'>
        <div className={styles.paddingX}>
          <div className={styles.flexStart}>
            <div className={styles.boxWidth}>
              <Services />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#ffffff] w-full overflow-hidden'>
        <div className={styles.paddingX}>
          <div className={styles.flexStart}>
            <div className={styles.boxWidth}>
              <Featured />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
