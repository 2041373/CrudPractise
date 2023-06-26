import React from 'react';
import Doctors from '../../assets/Doctor.png';

export default function IntroductionContainer() {
  return (
    <div style={{ backgroundColor: '#F8FAFB', display: 'flex', flexDirection: 'column', padding: 20, height: '100vh'}}>

      <h1 style={{ width: '50%', textAlign: 'center', alignSelf: 'center' }}>Welcome to Loreum Ipsum Doctor Surgery </h1>

      <img src={Doctors}  alt='doctor' width={500} height={500} style={{ objectFit: 'contain', alignSelf: 'center' }} />

    </div>
  );
}
