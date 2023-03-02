import React from 'react';
import styles from '../style';

import { FiMapPin, FiPhoneCall, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className='bg-[#dbf1fe] w-full overflow-hidden'>
      <div className='mx-auto'>
        <div className='container py-8 mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-20'>
          <div className='content'>
            <div className='left-side'>
              <div className='address details'>
                <FiMapPin className='icon1 ' />
                <div className='topic'>Address</div>
                <div className='text-one'>
                  915 Aurora Boulevard Cor. Albany Street, Cubao
                </div>
                <div className='text-two'>Quezon City, Metro Manila</div>
              </div>
              <div className='phone details'>
                <FiPhoneCall className='icon2' />
                <div className='topic'>Phone</div>
                <div className='text-one'> +63(2)9135669</div>
                <div className='text-two'>+63(2)9121912</div>
              </div>
              <div className='email details'>
                <FiMail className='icon3' />
                <div className='topic'>Email</div>
                <div className='text-one'>GandaYarnPh@gmail.com</div>
                <div className='text-two'>YarnGandaph@gmail.com</div>
              </div>
            </div>
            <div className='right-side'>
              <div className='topic-text mb-3'>Send us a message</div>
              <p className='text-[#6b7280] text-justify mb-5'>
                We would love to hear from you! If you have any questions,
                comments, or feedback, please don't hesitate to contact us. We
                value your feedback and want to hear from you! Please don't
                hesitate to reach out to us - we're always here to help.
              </p>
              <form action='#'>
                <div className='input-box border border-[#0ea5e9] rounded-md'>
                  <input type='text' placeholder='Enter your name'></input>
                </div>
                <div className='input-box border border-[#0ea5e9] rounded-md'>
                  <input type='text' placeholder='Enter your email'></input>
                </div>
                <div className='input-box border border-[#0ea5e9] rounded-md'>
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
