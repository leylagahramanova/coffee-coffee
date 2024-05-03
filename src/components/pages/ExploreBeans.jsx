import React from 'react'
import './ExploreBeans.css'
import './About.css'
import Layout from '../Layout'
import green from "../../img/greenbeans.webp"
import grey from "../../img/grey-beans.webp"
function ExploreBeans() {
  return (
    <div><Layout>   <div className="about" id="about">
    <h1 className="heading">EXPLORE OUR BEANS</h1>
    <p>There's over 120 varieties of coffee plants and each produces a different type of coffee bean, however the majority of the coffee we consume comes from just two variants, Robusta (also known as Coffea Robusta or Coffea Canephora) or Arabica (Coffea Arabica) or a blend of the two. The two varieties differ in taste, growing conditions, and price.</p>
    
    <div className='row'>
    <div className="imag">
        <img  src={green} style={{borderRadius:'25px'}}  alt="Arrow"/>
      </div>
      <div className="conabout">
<p>Arabica coffee beans is one of the most popular types and it's 
    believed to be one of the first coffee species ever grown with 
    roots dating back to 1,000BC. The beans are generally oval in shape,
     have a pronounced centre crease and are larger than 
     Robusta beans.</p>
<p>Known for their vibrant and complex flavours,
     these beans are loved by coffee connoisseurs because
      they tend to have a sweeter, softer taste, with tones of 
    fruits, florals, chocolate and nuts, although their acidity 
    is higher.</p>
    <p>Generally, it is more expensive than Robusta. 
        This is because it is much more delicate 
        and needs more specific cultivation requirements, 
        such as weather and altitude, to grow. Typically, Arabica coffee 
        beans are grown at altitudes between 500m and 2500m and have low 
        caffeine content. Latin America, specifically Brazil, is currently 
        the largest producer of Arabica coffee.</p>
      </div>

    </div>
    <div className='row'>
    <div className="imag">
        <img  src={grey}  style={{borderRadius:'25px'}} alt="Arrow"/>
      </div>
      <div className="conabout">
<p>Commonly grown in Africa, Vietnam and Indonesia, Robusta has lower 
    acidity levels than Arabica coffee, meaning it generally tastes much
     less sweet. Due to its simpler acidity and deeper and stronger 
     flavour compounds, Robusta can produce tones of wood or burnt 
     rubber. It's a popular choice
     for espressos due to the rich flavour and 
     layer of crema it gives.</p>
<p>Robustas are grown in altitudes of no more than 1000m,
     and they produce fruit much more quickly than the Arabicas,
      which need several years to come to maturity, and they yield
       more crop per tree. They are less vulnerable to pests and weather
        conditions and this is the main reason why they are on average
         cheaper than Arabicas. One other aspect to bear
     in mind is that Robusta coffee beans have a higher caffeine
      content.</p>
    <p>Coffee beans from the Robusta species are generally smaller
         and more circular than Arabica beans, they
         are also usually paler, and the centre crease is
          less pronounced.</p>
      </div>

    </div>
    
        </div></Layout></div>
  )
}

export default ExploreBeans