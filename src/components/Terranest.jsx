import React from 'react'
import { terranest} from '../assets'
import styles, { layout } from '../style'

const Terranest = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={terranest}
          alt='TERRANEST'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>TERRANEST</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Terranest is a conceptual 3D interactive website showcasing modern furniture with a classic touch. Explore timeless design, innovation, and elegance reimagined for today.
        </p>
      </div>  
    </section>
  )
}

export default Terranest
