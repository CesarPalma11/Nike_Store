import React, {useState} from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home_product'

const App = () => {
  //ADD TO CART
  const [cart, setCart] = useState([])
//PAGE PRODUCT
  const [shop, setShop] = useState(Homeproduct)
//CATEGORY FILTER
  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) =>
    {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }

 //SEARCH FILTER SHOP
 const [search, setSearch] = useState ('')

  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if (searchlength)
  {
    alert("Please search something!")
    setShop(Homeproduct)
  }
  else {
    
 
    const searchfilter = Homeproduct.filter((x) =>
    {
      return x.cat === search
    })
    setShop(searchfilter)
 
  }
}

//ADD TO CART 

const addtocart = (product) =>
{
  const exist = cart.find((x) => {
    return x.id === product.id
  })
  if (exist) 
  {
    alert("this product is alleardy added in cart")
  }
  else {
    setCart([...cart, {...product, qty:1}])
    alert("added to cart")
  }
  
  
}
console.log(cart)
  return (
    <>
      <BrowserRouter>
      <React.Fragment>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
      </React.Fragment>
      <Rout setCart={setCart} cart={cart}shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App