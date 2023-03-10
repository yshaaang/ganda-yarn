import styles from '../style';
import { featuredProducts } from '../constants';
import { Link } from 'react-router-dom';

const Featured = () => (
  <section
    id='featured'
    className={`flex md:flex flex-col justify-center items-center ${styles.paddingY}`}
  >
    <div>
      <h2 className='font-poppins font-semibold text-center text-[#3EADCF]'>
        Featured Products
      </h2>
      <h2 className='font-poppins font-semibold text-center text-primary ss:text-[30px] text-[28px] ss:leading-[40px] leading-[40px] mb-6'>
        Time to add to cart!
      </h2>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {featuredProducts.map((featured) => (
        <div className='card h-70 w-64 shadow-md rounded-xl mr-7 mb-7 border border-[#d9d9d9] cursor-pointer'>
          <figure>
            <img
              src={featured.imageSrc}
              className='h-[340px] hover:opacity-75'
              alt={featured.imageAlt}
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#000000]'>{featured.name}</h2>

            <div className='card-actions justify-between mt-6'>
              <h1 className='font-poppins font-medium py-3 text-[#ff55ee]'>
                {featured.price}
              </h1>
              <Link to={`/${featured.path}`}>
                <button className='btn bg-[#ff55ee] btn-circle border-[#ff55ee]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='#ffffff'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Featured;
