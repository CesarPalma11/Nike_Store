import React from 'react'
import './footer.css'
import {FaPiggyBank , FaShippingFast, FaHeadphones, FaWallet} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left_box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank/>
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>Lorem ipsum </p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast/>
                    </div>
                    <div className='detail'>
                        <h3>Free delivery</h3>
                        <p>Lorem ipsum </p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphones/>
                    </div>
                    <div className='detail'>
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum </p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet/>
                    </div>
                    <div className='detail'>
                        <h3>Money Back</h3>
                        <p>Lorem ipsum </p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                     <Link to="/"><img src='img/logo_orange.png' alt=''></img></Link>
                    </div>
                    <div className='bottom'>
                        <div className='box'>
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>Sales</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3>Products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track oder</li>
                                <li>New Product</li>
                                <li>Old product</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3>Contact us</h3>
                            <ul>
                                <li>Buenos Aires, Argentina</li>
                                <li>+54 9 11 6018-5717</li>
                                <li>cesarpalmag16@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer