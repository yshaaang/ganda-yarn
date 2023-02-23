import { addtocart, facebook, instagram, linkedin, twitter } from '../assets';
import { baguettebags_brown } from '../assets/gy_products/Baguette Bags';
import { tulipkeychain_violet } from '../assets/gy_products/Keychains';
import {
  Flora_Tote_Bag_pastel_brown,
  Vintage_Crochet_Bag_white,
} from '../assets/gy_products/Tote Bags';
import { Flower_singlebouquet } from '../assets/gy_products/Flowers/Rose';
import { buckethat_cowprint } from '../assets/gy_products/Bucket Hat';
import { phoneholder_red } from '../assets/gy_products/Phone Holder';
import { wallets_assorted } from '../assets/gy_products/Wallets';

export const headLinks = [
  {
    id: 'signup',
    path: 'create_an_account',
    title: 'CREATE AN ACCOUNT',
  },
  {
    id: 'login',
    path: 'login',
    title: 'LOGIN',
  },
];

export const ShopCart = [
  {
    id: 'add-to-cart',
    path: '',
    icon: addtocart,
    title: 'Add to Cart',
  },
];

export const navLinks = [
  {
    id: 'home',
    path: '',
    title: 'Home',
  },
  {
    id: 'products',
    path: 'products',
    title: 'Products',
  },
  {
    id: 'about',
    path: 'about',
    title: 'About',
  },
  {
    id: 'contact',
    path: 'contact',
    title: 'Contact',
  },
];

export const ProdCategories = [
  {
    id: 'category_baguette_bags',
    path: 'category_baguette_bags',
    title: 'Baguette Bags',
  },
  {
    id: 'category_bandana',
    path: 'category_bandana',
    title: 'Bandana',
  },
  {
    id: 'category_bucket_hatss',
    path: 'category_bucket_hats',
    title: 'Bucket Hats',
  },
  {
    id: 'category_cardigan',
    path: 'category_cardigan',
    title: 'Cardigan',
  },
  {
    id: 'category_earrings',
    path: 'category_earrings',
    title: 'Earrings',
  },
  {
    id: 'category_flowers',
    path: 'category_flowers',
    title: 'Flowers',
  },
  {
    id: 'category_hand_sanitizer_holder',
    path: 'category_hand_sanitizer_holder',
    title: 'Hand Sanitizer Holder',
  },
  {
    id: 'category_keychains',
    path: 'category_keychains',
    title: 'Keychains',
  },
  {
    id: 'category_lip_balm_holder',
    path: 'category_lip_balm_holder',
    title: 'Lip Balm Holder',
  },
  {
    id: 'category_phone_holder',
    path: 'category_phone_holder',
    title: 'Phone Holder',
  },
  {
    id: 'category_spray_bottle_holder',
    path: 'category_spray_bottle_holder',
    title: 'Spray Bottle Holder',
  },
  {
    id: 'category_tote_bags',
    path: 'category_tote_bags',
    title: 'Tote Bags',
  },
  {
    id: 'category_tumbler_holder',
    path: 'category_tumbler_holder',
    title: 'Tumbler Holder',
  },
  {
    id: 'category_wallets',
    path: 'category_wallets',
    title: 'Wallets',
  },
];

export const products = [
  {
    id: 'TK1',
    name: 'Tulip Keychain',
    path: 'category_keychains',
    imageSrc: tulipkeychain_violet,
    imageAlt: 'Tulip Keychain Violet',
    price: '₱90',
    variants: 'Pink, Violet, Green, Yellow',
    category: 'tulip-keychain',
    variant: 'Violet',
    quantity: 1,
  },
  {
    id: 'PH1',
    name: 'Phone Holder',
    path: '',
    imageSrc: phoneholder_red,
    imageAlt: 'Phone Holder in Red',
    price: '₱130',
    variants: 'Baby Pink, Red, White',
    category: 'phone-holder',
    variant: 'Red',
    quantity: 1,
  },
  {
    id: 'WL1',
    name: 'Wallet',
    path: '',
    imageSrc: wallets_assorted,
    imageAlt: 'Wallets assorted',
    price: '₱150',
    variants: 'Blue, Pink, Green, White, Brown',
    category: 'phone-holder',
    variant: 'Assorted',
    quantity: 1,
  },
  {
    id: 'BH1',
    name: 'Bucket Hat',
    path: '',
    imageSrc: buckethat_cowprint,
    imageAlt: 'Cow Bucket Hat',
    price: '₱300',
    variants: 'Frog, Cow, Duck',
    category: 'bucket-hat',
    variant: 'Cow',
    quantity: 1,
  },

  {
    id: 'BB1',
    name: 'Baguette Bags',
    path: 'category_baguette_bags',
    imageSrc: baguettebags_brown,
    imageAlt: 'Baguette Bag in Color Brown',
    price: '₱300',
    variants: 'Brown, Pink, Violet',
    category: 'baguette-bags',
    variant: 'Brown',
    quantity: 1,
  },
  {
    id: 'RB1',
    name: 'Rose Bouquet',
    path: '',
    imageSrc: Flower_singlebouquet,
    imageAlt: 'Rose Bouquet',
    price: '₱400',
    variants: 'Single, Multiple',
    category: 'flower-rose-bouquet',
    variant: 'Single',
    quantity: 1,
  },
  {
    id: 'TB1',
    name: 'Flora Tote Bag',
    path: '',
    imageSrc: Flora_Tote_Bag_pastel_brown,
    imageAlt: 'Flora Tote Bag',
    price: '₱400',
    variants: 'Mint Green, Pastel Brown',
    category: 'flora-tote-bag',
    variant: 'Pastel Brown',
    quantity: 1,
  },
  {
    id: 'TB2',
    name: 'Vintage Tote Bag',
    path: '',
    imageSrc: Vintage_Crochet_Bag_white,
    imageAlt: 'Vintage Tote Bag',
    price: '₱500',
    variants: 'Brown, Gray, White',
    category: 'vintage-tote-bag',
    variant: 'White',
    quantity: 1,
  },
];

export const shoppingCart = [
  {
    id: 'TK1',
    name: 'Tulip Keychain',
    path: 'category_keychains',
    imageSrc: tulipkeychain_violet,
    imageAlt: 'Tulip Keychain Violet',
    price: '₱90',
    variants: 'Pink, Violet, Green, Yellow',
    category: 'tulip-keychain',
    variant: 'Violet',
    quantity: 1,
  },
  {
    id: 'PH1',
    name: 'Phone Holder',
    path: '',
    imageSrc: phoneholder_red,
    imageAlt: 'Phone Holder in Red',
    price: '₱130',
    variants: 'Baby Pink, Red, White',
    category: 'phone-holder',
    variant: 'Red',
    quantity: 1,
  },
  {
    id: 'WL1',
    name: 'Wallet',
    path: '',
    imageSrc: wallets_assorted,
    imageAlt: 'Wallets assorted',
    price: '₱150',
    variants: 'Blue, Pink, Green, White, Brown',
    category: 'phone-holder',
    variant: 'Pink',
    quantity: 1,
  },
];

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.gandayarn.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.gandayarn.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.gandayarn.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.gandayarn.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.gandayarn.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.gandayarn.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.gandayarn.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.gandayarn.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.gandayarn.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.gandayarn.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.gandayarn.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.gandayarn.com/become-a-partner/',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
];
