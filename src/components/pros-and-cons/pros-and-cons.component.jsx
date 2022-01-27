import React from 'react';

import { FaCheck, FaTimes } from 'react-icons/fa';

import tenangWord from '../../assets/tenang-word-color-nh.png';

import './pros-and-cons.styles.scss';

const ProsAndCons = () => (
  <div className='prosAndCons'>
    <div className='pros'>
      <div className='title-wrapper'>
        <div className='icon-wrapper'>
          <FaCheck className='icon' />
        </div>
        <div className='title'>
          <img alt='tenang' src={tenangWord} />
        </div>
      </div>

      <div className='content'>
        <ul>
          <li>Lebih nyaman dan efisien karena dapat dilakukan dimana saja</li>
          <li>Fleksibel karena menyesuaikan dengan ketersediaan waktumu</li>
          <li>
            Rahasia dan anonimitas terjaga karena dilakukan melalui teks, audio
            maupun video
          </li>
          <li>Lebih hemat sampai 75% dari konseling tatap muka</li>
          <li>Efektivitas sama dengan konseling tatap muka</li>
        </ul>
      </div>
    </div>
    <div className='cons'>
      <div className='title-wrapper'>
        <div className='icon-wrapper'>
          <FaTimes className='icon' />
        </div>
        <div className='title'>
          <h1>Konseling tatap muka</h1>
        </div>
      </div>

      <div className='content'>
        <ul>
          <li>Harus hadir di kantor layanan psikologi</li>
          <li>
            Sulit menyepakati jadwal dan menyepakati kembali apabila berhalangan
          </li>
          <li>Interaksi langsungmungkin membuat tidak nyaman dan aman</li>
          <li>Berkisar antara Rp 300.000 hingga Rp 1.000.000 per pertemuan</li>
          <li>Efektivitas sama tapi lebih fleksible dan aman</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ProsAndCons;
