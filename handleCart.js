const cart = [];

const handleCart = (state = cart, action) =>{
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":return[
            //check if product is Already Exist
            //const exist =state.find((x) => x.id === product.id);
            //if(exist){
                //Increase the Quantity
              //  return state.map((x) => x.id === product.id ?{...x,qty : x.qty + 1}: x);
            //}else{
              //  const product = action.payload;
                //return[
                  //  ...state,
                    //{
                      //  ...product,
                        //qty: 1
                   // }
                //]
            //}
                ...state,
                {...product,subtotal:product.price,count:1}
        ]
            break;
        case "DELITEM":
         //   const exist1 = state.find((x) => x.id === product.id);
           // if(exist1.qty === 1){
             //   return state.filter((x) => x.id !== exist1.id);
            //}else{
              //  return state.map((x) => x.id === product.id ? {...x,qty: x.qty - 1}: x);
            //}

            return state = state.filter((x) =>{
                return x.id !== product.id
            })
            break;
          case "MODIFYITEM":
            const index=state.cart.findIndex((pro)=> pro.id === product.id)
            
            return [
              state.cart=[...state.cart.slice(0,index),
                {...state.cart[index],count:product.count,subtotal:product.subtotal*product.count},
              ...state.cart.slice(index+1)]
            ]
        default: 
            return state;
            break;
    }
}

export default handleCart;