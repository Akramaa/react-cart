import React from 'react';
import '../style/Cart.scss';
import {AiFillDelete} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';



function Cart({alert}) {
  const {cartItems, subTotal, shipping, tax, total} = useSelector((state)=>state.cart)

  const dispatch = useDispatch();

  const Increament =(id)=>{
  dispatch({
    type : "addToCart",
    payload : {id}
  });
  dispatch({
    type : "calculate"
  })
  }
  const decreament =(id)=>{
    dispatch({
      type : "decreament",
      payload : id
    });
    dispatch({
      type : "calculate"
    })
  }
  const deleteHandler =(id)=>{
    dispatch ({
      type: "delete",
      payload: id
    });
    dispatch({
      type : "calculate"
    })
  }

 
  return (
    <div className='cart'>
  <main>
     
       {
        cartItems.length > 0 ? cartItems.map((i)=>(
          <CartItems name={i.name} price={i.price}
          image={i.image} id={i.id} qty={i.qty} key={i.id}
          Increament={Increament} decreament={decreament} deleteHandler={deleteHandler} alert = {alert}/>
        )):(<h1> No Items yet</h1>)
       }
    
  </main>
  <aside>
    <h2>Subtotal ${subTotal}</h2>
    <h2>shipping ${shipping}</h2>
    <h2>Tax ${tax}</h2>
    <h2>Total ${total}</h2>
  </aside>
  </div>
  )
}

  const CartItems = ({name, price, image, qty, Increament, decreament, deleteHandler, id, alert}) =>(
  <div className='cartItem'>
    <img src={image} alt='shoes'/>
    <article>
    <p>{name}</p>
    <p>{price}</p>
    <p>Qty - {qty}</p>
    </article>
    <div>
      <button onClick={()=> Increament(id)}>+</button>
      <p>{qty}</p>
      <button onClick={()=> decreament(id)}>-</button>
    </div>
    <AiFillDelete onClick={()=> {deleteHandler(id); alert("Successfully !", "deleted")}}/>
  </div>
  )


export default Cart