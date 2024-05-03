import React from 'react'
// import beans from "./img/beans.png";
// import cup from "./img/cup.jfif";
// import process from "./img/process.png";
// import ground from "./img/ground.png";
// import arrow from "./img/arrow.png";
import stimy from "../../img/stimy.png";
import americano from "../../img/americano.png";
import indian from "../../img/indian.png";
import bangladesh from "../../img/bangladesh.png";
import arvica from "../../img/arvica.png";
import { Link } from "react-router-dom";
function Prod() {
  return (
    <div className='popular'>
        <h2>OUR POPULAR<br></br>PRODUCTS</h2>
        <div className='products'>
          <div className='product'>
            <div className='square'>
              <img src={stimy} />
            </div>
           <h3>TESTY COFFEE STIMY</h3> 
          </div>
          <div className='product'>
            <div className='square'>
              <img src={americano} />
            </div>
            <h3>AMERICANO PURE GRADES</h3>
          </div>
          <div className='product'>
            <div className='square'>
              <img src={indian} />
            </div>
            <h3>INDIAN ROASTING</h3> 
          </div>
          <div className='product'>
            <div className='square'>
              <img src={bangladesh} />
            </div>
            <h3>BANGLADESHI ORGANIC</h3>  
          </div>
          <div className='product'>
            <div className='square'>
              <img src={arvica} />
            </div>
            <h3>ARVICA COFFEE PACK</h3> 
          </div>
        </div>

        <div className="all-products">
          <button><Link href='/order_now'>See All Products</Link></button>
        </div>
      </div>
  )
}

export default Prod
