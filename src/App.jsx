import Layout from './Layout';
import { Home, About, Contact, Products } from './pages';
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  </div>

  /*<div className='bg-[#dbf1fe] w-full overflow-hidden'>
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

    <div className='bg-[#161415] w-full overflow-hidden'>
      <div className={styles.paddingX}>
        <div className={styles.flexStart}>
          <div className={styles.boxWidth}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
              </div>  */
);

export default App;
