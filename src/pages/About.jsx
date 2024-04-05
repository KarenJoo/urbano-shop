import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <div className='parentContainer'>
      <div className='childContainer'>
        <div className={styles.aboutImage}></div>
        <div className={styles.aboutContent}>
          <h1>We are Urbano</h1>
          <p>
            Your ultimate destination for trendy and high-quality gadgets! At
            Urbano, we're all about bringing you the latest and products that
            not only elevate your style but also enhance your everyday life.
          </p>

          <p>
            Our mission at Urbano is simple: to cater to the needs of the modern
            urbanite who values style, quality, and innovation. Whether you're
            looking to upgrade your tech game with the latest gadgets or seeking
            the perfect gift for that special someone, Urbano has you covered.
          </p>

          <p>Explore Urbano today and shop with confidence.</p>
        </div>
      </div>
    </div>
  )
}
