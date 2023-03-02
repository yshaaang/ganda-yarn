import React from 'react';

const CRUD = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-8 sm:py-15 lg:max-w-none lg:py-6'>
          <h2 className='text-[30px] text-center font-bold text-gray-900'>
            Database
          </h2>
          <div className=''>
            <div className='mx-auto px-4 pt-10 pb-10 '>
              <div className='overflow-x-auto'>
                <table className='table table-compact w-full'>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>company</th>
                      <th>location</th>
                      <th>Last Login</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover'>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Littel, Schaden and Vandervort</td>
                      <td>Canada</td>
                      <td>12/16/2020</td>
                      <td>Blue</td>
                    </tr>
                    <tr className='hover'>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Zemlak, Daniel and Leannon</td>
                      <td>United States</td>
                      <td>12/5/2020</td>
                      <td>Purple</td>
                    </tr>
                    <tr className='hover'>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Carroll Group</td>
                      <td>China</td>
                      <td>8/15/2020</td>
                      <td>Red</td>
                    </tr>
                    <tr className='hover'>
                      <th>4</th>
                      <td>Marjy Ferencz</td>
                      <td>Office Assistant I</td>
                      <td>Rowe-Schoen</td>
                      <td>Russia</td>
                      <td>3/25/2021</td>
                      <td>Crimson</td>
                    </tr>
                    <tr className='hover'>
                      <th>5</th>
                      <td>Yancy Tear</td>
                      <td>Community Outreach Specialist</td>
                      <td>Wyman-Ledner</td>
                      <td>Brazil</td>
                      <td>5/22/2020</td>
                      <td>Indigo</td>
                    </tr>
                    <tr className='hover'>
                      <th>6</th>
                      <td>Irma Vasilik</td>
                      <td>Editor</td>
                      <td>Wiza, Bins and Emard</td>
                      <td>Venezuela</td>
                      <td>12/8/2020</td>
                      <td>Purple</td>
                    </tr>
                    <tr className='hover'>
                      <th>7</th>
                      <td>Meghann Durtnal</td>
                      <td>Staff Accountant IV</td>
                      <td>Schuster-Schimmel</td>
                      <td>Philippines</td>
                      <td>2/17/2021</td>
                      <td>Yellow</td>
                    </tr>
                    <tr className='hover'>
                      <th>8</th>
                      <td>Sammy Seston</td>
                      <td>Accountant I</td>
                      <td>O'Hara, Welch and Keebler</td>
                      <td>Indonesia</td>
                      <td>5/23/2020</td>
                      <td>Crimson</td>
                    </tr>
                    <tr className='hover'>
                      <th>9</th>
                      <td>Lesya Tinham</td>
                      <td>Safety Technician IV</td>
                      <td>Turner-Kuhlman</td>
                      <td>Philippines</td>
                      <td>2/21/2021</td>
                      <td>Maroon</td>
                    </tr>
                    <tr className='hover'>
                      <th>10</th>
                      <td>Zaneta Tewkesbury</td>
                      <td>VP Marketing</td>
                      <td>Sauer LLC</td>
                      <td>Chad</td>
                      <td>6/23/2020</td>
                      <td>Green</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className='btn-group mt-5'
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <button className='btn'>«</button>
                <button className='btn'>Page 22</button>
                <button className='btn'>»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRUD;
