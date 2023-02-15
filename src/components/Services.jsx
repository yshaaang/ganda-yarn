import styles from '../style';
import { fastdelivery, moneyguarantee, securedpayment } from '../assets';

const Services = () => (
  <section
    id='services'
    className={`flex md:flex flex-col justify-center items-center ${styles.paddingY}`}
  >
    <div>
      <h2 className='font-poppins font-semibold text-center text-[#3EADCF]'>
        Our Services
      </h2>
      <h2 className='font-poppins font-semibold text-center text-primary ss:text-[30px] text-[28px] ss:leading-[40px] leading-[40px] mb-6'>
        We will provide the best services <br /> for our customers.
      </h2>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div class='card h-65 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9]'>
        <figure class='px-10 pt-10'>
          <img src={fastdelivery} alt='Fast-Delivery' />
        </figure>
        <div class='card-body items-center text-center'>
          <h2 class='card-title text-[#3EADCF] font-bold'>Fast Delivery</h2>
          <p>Fast Delivery for your orders.</p>
        </div>
      </div>

      <div class='card h-65 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9]'>
        <figure class='px-10 pt-10'>
          <img src={securedpayment} alt='Secured-Payment' />
        </figure>
        <div class='card-body items-center text-center'>
          <h2 class='card-title text-[#3EADCF] font-bold'>Secured Payment</h2>
          <p>We accept different modes of payment</p>
        </div>
      </div>

      <div class='card h-65 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9]'>
        <figure class='px-10 pt-10'>
          <img src={moneyguarantee} alt='Money-Guarantee' />
        </figure>
        <div class='card-body items-center text-center'>
          <h2 class='card-title text-[#3EADCF] font-bold'>Money Guarantee</h2>
          <p>30 days money back</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
