import React from 'react'
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  
  return <section className='hero'>
    <div className="hero-center">
      <article className='hero-info'>
        <h1>Payments infrastructure for the internet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quis, consectetur asperiores fugit ipsam consequatur hic fuga minima soluta quasi a quaerat minus nulla nostrum! Laudantium nesciunt dolore illum doloribus.
        </p>
        <button className="btn">
          start now
        </button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} alt="phone"  className='phone-img'/>
      </article>
    </div>
  </section>
}

export default Hero;
