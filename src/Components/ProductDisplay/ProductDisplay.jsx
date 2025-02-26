import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useContext(ShopContext);

    // Handle size selection
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    }

    // Handle quantity changes
    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity > 0) {
            setQuantity(newQuantity);
        }
    }

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-left-image-list'>
                    <img src={product.image} alt="" className="thumbnail active"/>
                    <img src={product.image} alt="" className="thumbnail"/>
                    <img src={product.image} alt="" className="thumbnail"/>
                    <img src={product.image} alt="" className="thumbnail"/>
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt={product.name}/>
                </div>
            </div>
            <div className='productdisplay-right'>
                <div className="productdisplay-right-header">
                    <h1>{product.name}</h1>
                    <div className='productdisplay-right-stars'>
                        <div className="star-container">
                            <img src={star_icon} alt="Rating" />
                            <img src={star_icon} alt="Rating" />
                            <img src={star_icon} alt="Rating" />
                            <img src={star_icon} alt="Rating" />
                            <img src={star_dull_icon} alt="Rating" />
                        </div>
                        <p className="review-count">(122 reviews)</p>
                    </div>
                </div>
                
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-prices-old'>${product.old_price}</div>
                    <div className='productdisplay-right-prices-new'>${product.new_price}</div>
                    <div className="price-discount">
                        {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}% OFF
                    </div>
                </div>
                
                <div className='productdisplay-right-description'>
                    <p>A lightweight, usually woven fabric that is typically made from cotton, polyester, or nylon. It is a soft, breathable material that is easy to clean and maintain.</p>
                </div>
                
                <div className='productdisplay-right-size'>
                    <div className="size-header">
                        <p>Select Size</p>
                        <span className="size-guide">Size Guide</span>
                    </div>
                    <div className='productdisplay-right-size-options'>
                        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                            <div 
                                key={size}
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="productdisplay-right-quantity">
                    <p>Quantity:</p>
                    <div className="quantity-selector">
                        <span className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</span>
                        <span className="quantity-value">{quantity}</span>
                        <span className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</span>
                    </div>
                </div>
                
                <div className="productdisplay-right-actions">
                    <button onClick={() => {addToCart(product.id)}} className="add-to-cart-btn">Add to Cart</button>
                    <button className="buy-now-btn">Buy Now</button>
                </div>
                
                <div className="productdisplay-right-meta">
                    <p className='productdisplay-right-category'><span>Category: </span>{product.category || 'Women, T-Shirt, Crop top'}</p>
                    <p className='productdisplay-right-tags'><span>Tags: </span>Modern, Latest</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay