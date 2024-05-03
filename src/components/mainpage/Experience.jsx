import React from 'react'
import { Link } from "react-router-dom";

import explosion from '../../img/explosion.png'
import twobeans from '../../img/two-beans.png'


function Experience() {
  return (
    <>
      <section className="section"
      >

        <div className='experience'>
          <h1>Experience the Finest<br/> Artisanal Coffee Roasting</h1>
          <p>"Indulge in the Perfect Cup of Perfection"</p>
          <div className='explos'>
            <img className="explosion" src={explosion} id="exp1" />    
<button>
  <Link to="/order_now">SHOP NOW</Link>
</button>
            <img className="explosion" id="exp2" src={explosion} />
          </div>

        </div>
      </section>
      <div className='description'>
        <div className='white'>
          <p>Non-Volatile Environment Temperatures in Nordic Coffee Roasting Style</p>
          <div className='cups'></div>
        </div>
        <div className='black'>
          <p>Our commitment to excellence begins with the selection of the most extraordinary coffee beans from exclusive plantations around the globe.</p>
          <div className="twobeans"></div>
        </div>
      </div>
    </>

  )
}

export default Experience
