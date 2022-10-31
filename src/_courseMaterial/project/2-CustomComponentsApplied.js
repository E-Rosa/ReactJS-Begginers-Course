import { useState } from "react";
import "../materials/shopping-cart-html-css/ProductsPage.css";
import "../materials/shopping-cart-html-css/Product.css";
import productsData from "../../data/productsData";
import PurchaseDataTagComp from "./_components/PurchaseDataTag/PurchaseDataTag";
import ProductComp from "./_components/Product/Product.js";

/*Having created our custom components, we're going to add them to our page. */
function ProductsPage2(){
    //setting data in a state
    const [products, setProducts] = useState(productsData);
    
    //mapping the state to produce array of products
    const productCards = products.map((product)=>{
        return (
            <ProductComp 
                title={product.title}
                price={product.price}
                imgSrc={product.imgSrc}
                count={product.quantity}
                key={product.id}
                id={product.id}
            />
        )
    })
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
                {/*rendering products array on DOM */}
                {productCards}
                <div className="purchase-data-container">
                    {/*rendering tags on DOM */}
                    <PurchaseDataTagComp label="Discount" labelValue={` 0`}/>
                    <PurchaseDataTagComp label="Delivery" labelValue={` 0`}/>
                    <PurchaseDataTagComp label="Subtotal" labelValue={` 0`} />
                    <PurchaseDataTagComp label="Total" labelValue={` 0`} />
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

export default ProductsPage2;