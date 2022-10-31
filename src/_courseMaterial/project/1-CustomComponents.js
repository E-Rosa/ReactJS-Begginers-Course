import "../materials/shopping-cart-html-css/ProductsPage.css";
import "../materials/shopping-cart-html-css/Product.css";
import productsData from "../../data/productsData";

/*
Below you'll see our project's HTML laid out with no functionality yet implemented.
When we are at this stage of the development process, we can think clearly about functionalities
and how they may be implemented.

Thinking in React terms, the first step would be to take a look at the page and think about
what parts of it are repeatable and make them Custom Components.
*/

function ProductsPage(){
    return(
        <div className="ProductsPage">
            <h1 className="page-title">Shopping Cart</h1>
            <div className="shopping-cart-container">
                <div className="shopping-cart-header">
                    <span className="header-label">Description</span>
                    <span className="header-label">Size</span>
                    <span className="header-label">Quantity</span>
                    <span className="header-label">Remove</span>
                    <span className="header-label">Price</span>
                </div>
                {/*We'll start by making this Product element a custom component.
                   See project/_components/Product/Product.js
                 */}
                <div className="Product">
                    <div className="product-headlines-container">
                        <img src={productsData[0].imgSrc} className="product-image" alt={productsData[0].title}></img>
                        <div className="product-data-container">
                            <span className="product-title">{productsData[0].title}</span>
                            <span className="product-code">Product Code: {productsData[0].code}</span>
                        </div>
                    </div>
                    <select className="size-select" defaultValue={productsData[0].size}>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                    </select>
                    <div className="counter-container">
                        <button className="counter-button">-</button>
                        <span className="counter-number">0</span>
                        <button className="counter-button">+</button>
                    </div>
                    <button className="remove-button">x</button>
                    <span className="price-tag">{productsData[1].price}</span>
                </div>
                <div className="Product">
                    <div className="product-headlines-container">
                        <img src={productsData[1].imgSrc} className="product-image" alt={productsData[1].title}></img>
                        <div className="product-data-container">
                            <span className="product-title">{productsData[1].title}</span>
                            <span className="product-code">Product Code: {productsData[1].code}</span>
                        </div>
                    </div>
                    <select className="size-select" defaultValue={productsData[1].size}>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                    </select>
                    <div className="counter-container">
                        <button className="counter-button">-</button>
                        <span className="counter-number">0</span>
                        <button className="counter-button">+</button>
                    </div>
                    <button className="remove-button">x</button>
                    <span className="price-tag">{productsData[1].price}</span>
                </div>
                <div className="purchase-data-container">
                    {/*We're also going to make these data tags a custom component 
                      See project/_components/ProductDataTag/ProductDataTag.js
                    */}
                    <div className="purchase-data-tag">
                        <span className="header-label">Discount</span>
                        <span className="header-label price">$0.00</span>
                    </div>
                    <div className="purchase-data-tag">
                        <span className="header-label">Delivery</span>
                        <span className="header-label price">$0.00</span>
                    </div>
                    <div className="purchase-data-tag">
                        <span className="header-label">Subtotal</span>
                        <span className="header-label price">$0.00</span>
                    </div>
                    <div className="purchase-data-tag">
                        <span className="header-label">Total</span>
                        <span className="header-label price">$0.00</span>
                    </div>
                </div>
                <div className="shopping-cart-footer">
                    <form className="discount-form">
                        <div className="discount-form-container-1">
                            <input type="text" name="promo-code" className="discount-input"></input>
                            <button className="discount-button">Apply discount</button>
                        </div>
                    </form>
                    <button className="checkout-button">Checkout</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductsPage;