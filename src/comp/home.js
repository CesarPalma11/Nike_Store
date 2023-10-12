import React, { useState } from 'react'
import './home.css'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import {AiFillEye, AiFillHeart} from 'react-icons/ai'
const Home = ({addtocart}) => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  const filtercate = (x) =>
  {
    const filtercate = Homeproduct.filter((curElm) =>
    {
      return curElm.type === x
    })
    setTrendingProduct(filtercate)
  }

    const allTrendingProduct = () =>
    {
      setTrendingProduct(Homeproduct)
    }

  return (
    <>
    <div className='home'>
        <div className='top_banner'>
        
            <div className='contant'>
            <img src='./img/banner.webp' alt=''></img>
            <Link to='/shop' className='link' > Shop Now <BsArrowRight className='arrow'/></Link>
            </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct()}>Trending Products</h2>
                </div>
                <div className='category'>
                  <h3 onClick={() => filtercate('new')}>New</h3>
                  <h3 onClick={() => filtercate('offer')}>Offer</h3>
                  <h3 onClick={() => filtercate('top')}>Top Selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) =>
                    {
                      return (
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={curElm.image} alt=''></img>
                            <div className='icon'>
                              <div className='icon_box'>
                              <AiFillEye/>
                              </div>
                              <div className='icon_box'>
                              <AiFillHeart/>
                              </div>
                            </div>
                          </div>
                          <div className='info'>
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <button className='btn' onClick={() => addtocart (curElm)}>Add to cart</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home