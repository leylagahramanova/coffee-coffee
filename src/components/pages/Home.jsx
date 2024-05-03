import React from 'react'
import Experience from '../mainpage/Experience';
import Lux from '../mainpage/Luxury';
import ZigZag from '../mainpage/ZigZag'
import Prod from '../mainpage/Products';
import Comments from '../mainpage/Comments';
import Touch from '../mainpage/Touch'
import Mind from '../mainpage/Mind';
import Layout from '../Layout';

function Home() {
  return (
        <Layout>
        <Experience />
        <ZigZag />
        <Lux />
        <Prod />
        <Comments />
        <Touch /> 
        <Mind />
        </Layout>
            
  )
}

export default Home
