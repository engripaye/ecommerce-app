import product from '@/sanity_ecommerce/schemas/product';
import {client} from '../lib/client';
import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components';

const Home = ([ products, bannerData ]) => {
  <div>
    <HeroBanner />
    {console.log(bannerData)}

    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Fashion Materials of many variations</p>
    </div>

    <div className='products-container'>
      {products?.map(
        (product) => product)}
    </div>

    <FooterBanner /> 
    
    </div>
  
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props: { products, bannerData }
  }
}
export default Home;
