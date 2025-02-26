// Cartitems Component
import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import './Cartitem.css';

const Cartitems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div key={item.id} className="cartitems-format">
                            <img src={item.image} alt={item.name} className="carticon-product-icon" />
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <p>{cartItems[item.id]}</p>
                            <p>${item.new_price * cartItems[item.id]}</p>
                            <img 
                                src={remove_icon} 
                                onClick={() => removeFromCart(item.id)} 
                                alt='remove' 
                                className="cartitems-remove-icon"
                            />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="cartitems-checkout">Proceed to Checkout</button>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code, enter it here</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder="Promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartitems;