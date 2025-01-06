import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>AI Agent for ECom</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Partnered with Zipchat AI, a cutting-edge SaaS solution, to rebrand, redesign, and develop their website on Webflow, delivering an AI-driven experience
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
