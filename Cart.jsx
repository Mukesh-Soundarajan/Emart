import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart,modifyitem } from '../redux/action';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const list = useSelector((state) => state.handleCart);
  const dispatch = useDispatch()

const handleClose =(item)=>{
  dispatch(delCart(item))
}
//const [cart, setCart] = useState([])
const handleDecrement=(item) => {
  dispatch(modifyitem({...item, count: item.count-1,subtotal:item.price}))
  //setCart((cart) =>
    //list.map((data) =>
      //card_id === data.id ? {...data,count: data.count-1}: data
    //)
    //)
}
const handleIncrement=(item) => {
  dispatch(modifyitem({...item, count: item.count+1,subtotal:item.price}))

  // setCart(cart =>
  //   list.map((data) =>
  //     card_id === data.id ? {...data,count: data.count+1}: data
  //   )
  //   )
}

const CartItems = (data) =>{
    return(
        <div className="px-4 my-5 bg-light rounded-3" key={data.id}>
          <div className="container py-4 position-relative">
            <button onClick={()=>handleClose(data)} className="btn-close " aria-label='Close'></button>
            <div className="row justify-content-center ">
              <div className="col-md-3">
                <img src={data.image} alt={data.title} style={{height:"200px", width:"180px"}} />
              </div>
              <div className="col-md-7 d-flex">
              <div className='d-flex justify-content-center align-items-center'>
                <h5 className='me-2'>{data.title}</h5>
                <p className='lead fw-bold'>${data.price}</p>
              </div>
                  <div className='d-flex justify-content-center align-items-center ms-3 px-3'>
                <button className='btn btn-danger d-flex justify-content-center align-items-center me-2' onClick={() =>handleDecrement(data.id)}  style={{height:"30px", width:"30px"}}>-</button>
                <h6>{data.count}</h6>
                <button className='btn btn-danger d-flex justify-content-center align-items-center ms-2' onClick={() =>handleIncrement(data.id)} style={{height:"30px", width:"30px"}}>+</button>
                <h4>{data.subtotal}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }

  const emptyCart = ()=>{
    return(
      <>
         <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row">
              <h1>Your Cart Is Empty</h1>
            </div>
          </div>
        </div>
      </>
    )
  }
  const checkOut = () =>{
    return(
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To Checkout</NavLink>
        </div>
      </div>
    )
  }
  return(
    <>
      {list.length === 0 && emptyCart()}
      {list.map(CartItems)}
      {list.length !== 0 && checkOut()}
    </>
  )
}
            
  

export default Cart
