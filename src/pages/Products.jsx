import React from 'react';
import { baguettebags_brown } from '../assets/gy_products/Baguette Bags';
import { bandana_lightblue } from '../assets/gy_products/Bandana';
import { buckethat_frogprint } from '../assets/gy_products/Bucket Hat';
import { Marguerite_Cardigan_green } from '../assets/gy_products/Cardigan';
import { Flower_Earings_Stud } from '../assets/gy_products/Earrings';
import { Flower_multiplerosebouquet } from '../assets/gy_products/Flowers/Rose';
import { HandSanitizer_Fruits } from '../assets/gy_products/Hand Sanitizer Holder';
import { tulipkeychain_violet } from '../assets/gy_products/Keychains';
import { Lip_balm_Holder_DarkerShade } from '../assets/gy_products/Lip Balm Holder';
import { phoneholder_red } from '../assets/gy_products/Phone Holder';
import { SprayBottle_Holder } from '../assets/gy_products/Spray Bottle Holder';
import { Patterned_Tote_bag_green } from '../assets/gy_products/Tote Bags';
import { tumblerholder_pink } from '../assets/gy_products/Tumbler Holder';
import { wallets_assorted } from '../assets/gy_products/Wallets';

import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div class='mx-auto max-w-2xl py-8 sm:py-15 lg:max-w-none lg:py-6'>
          <h2 class='text-2xl font-bold text-gray-900'>Collections</h2>

          <div class='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={baguettebags_brown}
                  alt='Baguette Bag Brown'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_baguette_bags'>
                  <span class='absolute inset-0 '></span>
                  Baguette Bags
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Stylish Accessory
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={bandana_lightblue}
                  alt='Bandana Light Blue'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_bandana'>
                  <span class='absolute inset-0'></span>
                  Bandana
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={buckethat_frogprint}
                  alt='Bucket Hat Frog Print'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_bucket_hats'>
                  <span class='absolute inset-0'></span>
                  Bucket Hats
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Journals and note-taking
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={Marguerite_Cardigan_green}
                  alt='Marguerite Cardigan Green'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_cardigan'>
                  <span class='absolute inset-0'></span>
                  Cardigan
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={Flower_Earings_Stud}
                  alt='Flower Earrings Stud'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_earrings'>
                  <span class='absolute inset-0'></span>
                  Earrings
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={Flower_multiplerosebouquet}
                  alt='Multiple Rose Bouquet'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_flowers'>
                  <span class='absolute inset-0'></span>
                  Flowers
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={HandSanitizer_Fruits}
                  alt='Hand Sanitizer Fruits'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_hand_sanitizer_holder'>
                  <span class='absolute inset-0'></span>
                  Hand Sanitizer Holder
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={tulipkeychain_violet}
                  alt='Tulip Keychain Violet'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_keychains'>
                  <span class='absolute inset-0'></span>
                  Keychains
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={Lip_balm_Holder_DarkerShade}
                  alt='Lip Balm Holder Dark'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_lip_balm_holder'>
                  <span class='absolute inset-0'></span>
                  Lip Balm Holder
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={phoneholder_red}
                  alt='Phone Holder Red'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_phone_holder'>
                  <span class='absolute inset-0'></span>
                  Phone Holder
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={SprayBottle_Holder}
                  alt='Spray Bottle Holder'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_spray_bottle_holder'>
                  <span class='absolute inset-0'></span>
                  Spray Bottle Holder
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={Patterned_Tote_bag_green}
                  alt='Patterned Tote Bag Green'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_tote_bags'>
                  <span class='absolute inset-0'></span>
                  Tote Bags
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={tumblerholder_pink}
                  alt='Tumbler Holder Pink'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_tumbler_holder'>
                  <span class='absolute inset-0'></span>
                  Tumbler Holder
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>

            <div class='group relative'>
              <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <img
                  src={wallets_assorted}
                  alt='Wallers Assorted'
                  class='h-full w-full object-cover object-center'
                />
              </div>
              <h3 class='mt-6 text-sm text-gray-500'>
                <Link to='/category_wallets'>
                  <span class='absolute inset-0'></span>
                  Wallets
                </Link>
              </h3>
              <p class='text-base font-semibold text-gray-900 mb-6'>
                Daily commute essentials
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
