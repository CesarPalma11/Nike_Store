import React from 'react'
import './shop.css'
import {AiFillHeart, AiFillEye} from 'react-icons/ai'
import {GrRadialSelected} from 'react-icons/gr'
const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
  return (
    <>
    <div className='shop'>
      <h2> Shop</h2>
      <div className='container'>
        <div className='left_box'>
          <div className='category'>
              <h2>All Categories</h2>
            <div className='box'>
                  <ul>
                    <li onClick={() => allcatefilter ()}><GrRadialSelected className='icon_selected'/> all</li>
                    <li onClick={() => Filter ("man")}><GrRadialSelected className='icon_selected'/> man</li>
                    <li onClick={() => Filter ("woman")}><GrRadialSelected className='icon_selected'/> woman</li>
                    <li onClick={() => Filter ("unisex")}><GrRadialSelected className='icon_selected'/> unisex</li>
                  </ul>
            </div>
          </div>
          <div className='banner'>
            <div className='img_box'>
              <img src='img/banner_left2.png' alt=''></img>
            </div>
          </div>
        </div>
        <div className='right_box'>
          <div className='banner'>
            <div className='img_box'>
              <img src='img/banner_right.jpg' alt=''></img>
            </div>
          </div>
          <div className='product_box'>
            <h2>Shop Products</h2>
            <div className='product_container'>
              {
                shop.map((curElm) =>
                {
                  return(
                    <>
                    <div className='box'>
                      <div className='img_box'>
                        <img src={curElm.image} alt=''></img>
                        <div className='icon'>
                        <li><AiFillHeart/></li>
                        <li><AiFillEye/></li>
                        </div>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>${curElm.price}</p>
                        <button onClick={() => addtocart (curElm)}>Add To Cart</button>
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
    </>
  )
}

export default Shop