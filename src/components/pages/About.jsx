import React from 'react'
import Layout from '../Layout'
import './About.css'
import award1 from '../../img/award1.jpg'
import award2 from '../../img/award2.webp'
import award3 from '../../img/award3.jpeg'
import yell from '../../img/about.png';
function About() {
  return (
    <Layout>    
      <div className="about" id="about">
        <h1 className="heading"><span>about</span> us</h1>
        <div className='row'>
        <div className="imag">
            <img  src={yell}  alt="Arrow"/>
          </div>
          <div className="conabout">
 
          <h3>What makes our coffee special?</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea
ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem?
Quod nemo facilis cupiditate. Ex, vel?</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod
veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
          </div>

        </div>
        <div className='popular2'>
        <h2><span>OUR</span> AWARDS</h2>
        <div className='products2'>
          <div className='product2'>
            <div className='square2'>
              <img src={award1} />
            </div>
           <h3>TESTY COFFEE STIMY</h3> 
          </div>
          <div className='product2'>
            <div className='square2'>
              <img src={award2} />
            </div>
            <h3>AMERICANO PURE </h3>
          </div>
          <div className='product2'>
            <div className='square2'>
              <img src={award3} />
            </div>
            <h3>INDIAN ROASTING</h3> 
          </div>

        </div>

 
      </div>
      </div>
      </Layout>

  )
}

export default About
