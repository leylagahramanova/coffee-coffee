import React from 'react'
import beans from '../../img/beans.png';
import process from '../../img/process.png';
import ground from '../../img/ground.png';
import cup from '../../img/cup.jfif';
import arrow from '../../img/arrow.png';
import twobeans from '../../img/two-beans.png'
import coffeecup from '../../img/coffeecup.png'
function ZigZag() {
  return (
    <div className="zigzag-timeline">
      <h2>PROCESS</h2>
      <div className="exolosion">
        <img className="beans" src={twobeans}  />
      </div>
    <div className="zig-zag">
    
      <div className="zigzag-item">
        <div className="content">
          <img className="circle" src={beans} alt="Event 1" />
          <h4 className="right" style={{   width: '50%'  }}>Beans are the seeds of the coffee cherry</h4>
       
        </div>
      </div>

      <div className="arrow" id="first">
        <img src={arrow} alt="Arrow" />
      </div>
      <div className="exolosion">
        <img className="cup" src={coffeecup}  />
      </div>
      <div className="zigzag-item">
   
    <div className="content" style={{ }}>
      <div className="text">
        <h4 className='first' style={{  width: '50%' }}>They are cleaned, triaged, and processed.</h4>
        <img className="circle" style={{  }}src={process} alt="Event 2" />
        <h4 className='second' style={{ width: '50%' }}>They go through a roasting process.</h4>
      </div>
    </div>
  </div>
  
      <div className="arrow" id="second">
        <img src={arrow} alt="Arrow" />
      </div>
  
      <div className="zigzag-item">
        <div className="content-1">
          <h4>Beans are Ground</h4>
          <img src={ground} alt="Event 3" />
        </div>
      </div>
  
      <div className="arrow" id="third">
        <img src={arrow} alt="Arrow" />
      </div>
  
      <div style={{ }} className="zigzag-item">
      <div className="exolosion">
        <img className="beans2" src={twobeans}  />
      </div>
    <div className="content-second">
      <h4 style={{  width: '50%' }}>Freshly roasted beans make the best cup of coffee.</h4>
      <img className="last" style={{ borderRadius: '25px' }} src={cup} alt="Event 3" />
    </div>
   
  </div>
  <div className="exolosion">
        <img className="cup2" src={coffeecup}  />
      </div>
  </div>
  </div>
  );
}
export default ZigZag
