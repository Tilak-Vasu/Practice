// /components/Cart

import { useSelector } from "react-redux";

function Cart(){
    const items = useSelector((state)=>state.cart.items);

    return(
        <div className="cart">
            <h1>Your Cart</h1>
            {items.length === 0 ? 
            (
                <p>Cart is empty</p>
            ):(
                items.map((item)=>(
                    <div key={item.id}>
                        {item.name} X {item.quantity} = ${item.price*item.quantity}
                        </div>
                ))
            )
}
        </div>
    );
}

export default Cart;