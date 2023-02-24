import React from 'react';
import styles from '../style';

import { FiMapPin, FiPhoneCall, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className='bg-[#dbf1fe] w-full overflow-hidden'>
      <div className='mx-auto'>
        <div class='container py-8 mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-20'>
          <div class='content'>
            <div class='left-side'>
              <div class='address details'>
                <FiMapPin className='icon1 ' />
                <div class='topic'>Address</div>
                <div class='text-one'>
                  915 Aurora Boulevard Cor. Albany Street, Cubao
                </div>
                <div class='text-two'>Quezon City, Metro Manila</div>
              </div>
              <div class='phone details'>
                <FiPhoneCall className='icon2' />
                <div class='topic'>Phone</div>
                <div class='text-one'> +63(2)9135669</div>
                <div class='text-two'>+63(2)9121912</div>
              </div>
              <div class='email details'>
                <FiMail className='icon3' />
                <div class='topic'>Email</div>
                <div class='text-one'>GandaYarnPh@gmail.com</div>
                <div class='text-two'>YarnGandaph@gmail.com</div>
              </div>
            </div>
            <div class='right-side'>
              <div class='topic-text mb-3'>Send us a message</div>
              <p class='text-[#6b7280] text-justify mb-5'>
                We would love to hear from you! If you have any questions,
                comments, or feedback, please don't hesitate to contact us. We
                value your feedback and want to hear from you! Please don't
                hesitate to reach out to us - we're always here to help.
              </p>
              <form action='#'>
                <div class='input-box border border-[#0ea5e9] rounded-md'>
                  <input type='text' placeholder='Enter your name'></input>
                </div>
                <div class='input-box border border-[#0ea5e9] rounded-md'>
                  <input type='text' placeholder='Enter your email'></input>
                </div>
                <div class='input-box border border-[#0ea5e9] rounded-md'>
                  <input type='text' placeholder='Enter your message'></input>
                </div>
                <div className='mt-10 mb-8'>
                  <button className='btn btn-secondary btn-wide rounded-full'>
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
