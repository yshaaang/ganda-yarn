import React from 'react';
import styles from '../style';

import { GrWorkshop } from 'react-icons/gr';
import { GrAchievement } from 'react-icons/gr';
import { GrGlobe } from 'react-icons/gr';

const About = () => {
  return (
    <section id='ABOUT' className='bg-[#dbf1fe] w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <h2 className='text-2xl font-bold text-gray-900 mb-5'>About Us</h2>
          <p className='text-poppins text-regular text-black text-justify mb-5'>
            Welcome to our Ganda Yarn! We're a team of passionate artisans who
            believe that every product should be made with care and attention to
            detail. Our crochet products are crafted using high-quality
            materials and traditional techniques, ensuring that each item is
            both beautiful and durable. From cozy cardigans to stylish hats, our
            collection features a wide variety of unique and handmade crochet
            products that are perfect for any occasion. Whether you're looking
            to add a pop of color to your home or give a thoughtful gift to
            someone special, we're confident that you'll find something you love
            in our store. Thank you for choosing our handmade crochet products
            and supporting Ganda Yarn!
          </p>
          <div id='about-2'>
            <div className='content-box-lg'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='about-item text-center'>
                    <GrWorkshop className='icons' />
                    <h3 className='text-poppins text-regular text-[#3eadcf]'>
                      MISSION
                    </h3>
                    <p className='text-poppins text-regular text-black text-justify'>
                      {' '}
                      Ganda Yarn's mission is to bring joy and beauty into the
                      lives of our customers through our unique and handcrafted
                      products. We strive to offer a curated selection of
                      high-quality crochet items that are not only visually
                      stunning, but also ethically made with care and attention
                      to detail. We believe that every customer deserves to
                      experience the warmth and comfort that comes from owning a
                      handmade crochet item, and we aim to provide a shopping
                      experience that is both personal and enjoyable. Our goal
                      is to build a community of like-minded individuals who
                      appreciate the artistry and craftsmanship of handmade
                      products, and to support the livelihoods of our talented
                      artisans who pour their hearts into each creation.
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='about-item text-center'>
                    <GrGlobe className='icons' />
                    <h3 className='text-poppins text-regular text-[#3eadcf]'>
                      VISION
                    </h3>

                    <p className='text-poppins text-regular text-black text-justify'>
                      {' '}
                      Ganda Yarn's vision is to become a leading online
                      destination for unique and high-quality crochet products,
                      while upholding our commitment to ethical and sustainable
                      practices. We strive to offer a diverse range of handmade
                      crochet items that cater to the needs and preferences of
                      our customers, and to continuously innovate and improve
                      our product offerings. Our goal is to foster a community
                      of passionate and creative individuals who share our love
                      for handmade products and our values of quality,
                      craftsmanship, and sustainability. We envision a future
                      where our handmade crochet products continue to bring joy
                      and beauty into the lives of our customers, while also
                      making a positive impact on the world around us.{' '}
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='about-item text-center'>
                    <h3>
                      {' '}
                      <GrAchievement className='icons' />
                    </h3>
                    <h3 className='text-poppins text-regular text-[#3eadcf]'>
                      ACHIEVEMENTS
                    </h3>

                    <p className='text-poppins text-regular text-black text-justify'>
                      {' '}
                      As Ganda Yarn's is just a starting business, we are proud
                      to have already achieved several milestones and
                      accomplishments. These include:
                      <p>
                        1. <b>Building a loyal customer base:</b>{' '}
                        We are grateful to have a growing community of customers who
                        appreciate the quality and craftsmanship of our handmade
                        crochet products. We've received positive feedback and
                        testimonials, which motivates us to continue providing
                        the best service possible.
                      </p>
                      <p>
                        2. <b>Showcasing unique and high-quality products:</b>{' '}
                        Our crochet products are made with attention to detail
                        and are designed to last. We take pride in using
                        sustainable and eco-friendly materials to ensure that
                        our products are not only visually stunning but also
                        responsible.
                      </p>
                      <p>
                        3. <b>Supporting local artisans:</b>{' '}
                        We have partnered with skilled artisans who specialize in handmade crochet
                        to create our unique products. By collaborating with
                        these artisans, we support their livelihoods and help
                        preserve the art of handmade crochet.
                      </p>
                      <p>
                        4. <b>Continuous growth:</b>{' '}
                        We have been expanding our product range and are continuously seeking new and
                        innovative ways to bring handmade crochet products to
                        our customers.
                      </p>
                      <br />
                      We are committed to continuing to achieve and exceed our
                      goals and look forward to what the future holds for our
                      handmade crochet ecommerce store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;