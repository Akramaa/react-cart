import React from 'react'
import { useDispatch } from 'react-redux'




const img1 = "https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"
const img2 = "https://m.media-amazon.com/images/I/71IPLY7Y6IL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"

function Home({alert}) {
   
   let productList = [{
    name:"Macbook",
    price: 1200,
    image: img1,
    id: 58565
   },
   {
    name:"Shoes",
    price: 120,
    image: img2,
    id:8076678
   }
  ]
  const dispatch = useDispatch()

  const addToCart = (option)=>{
       console.log(option);
       dispatch({type: "addToCart",payload: option});
       dispatch({
        type : "calculate"
      })
     
} 

return (
   <>
    <div className='main'>
      {
        productList.map((item)=>(
          <ProductCard name={item.name} price={item.price} image={item.image} key={item.id} handle={addToCart} id={item.id} alert={alert}/>
        ))
      }
    </div>
    </>
  )
} 

const ProductCard = ({name, price, id, handle, image , qty=1, alert}) =>(
  <div className='card'> 
  <img src={image} alt='logo'/>
  <p>{name}</p>
  <p>$ {price}</p>
  <button onClick={()=>{handle({name, price, id, image, qty}); alert("SuccessFully!", " Added ")}}>Add to Cart</button>
 </div>

)

export default Home