import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7206/api/Product").then(function (response) {
      setProducts(response.data);
    }).catch(function (e) {
      console.error(e)
    });
  }, []);

  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-8 sm:py-15 lg:max-w-none lg:py-6'>
          <h2 className='text-2xl font-bold text-gray-900'>Collections</h2>

          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products.map((product) => {
              const prices = product.productAttributes.map((attr) => attr.price);
              const min = Math.min(...prices);
              const max = Math.max(...prices);

              return <div key={product.id} className='group relative'>
                <Link to={`/product/${product.id}`}>
              <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                <img
                  src={product.previewImageLink}
                  alt={product.name}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm text-gray-700'>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {product.name}
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    {product.productAttributes.map((attr) => attr.variant).join(", ")}
                  </p>
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  {min === max ? `₱${min}` : `₱${min}-₱${max}`}
                </p>
              </div>
                    </Link>
            </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;