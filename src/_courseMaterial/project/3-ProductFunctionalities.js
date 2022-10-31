import { useState } from "react";
import "../materials/shopping-cart-html-css/ProductsPage.css";
import "../materials/shopping-cart-html-css/Product.css";
import productsData from "../../data/productsData";
import PurchaseDataTagComp from "./_components/PurchaseDataTag/PurchaseDataTag";
import ProductComp from "./_components/Product/Product.js";

/*Now, we're going to add the counter and remove button functionalities. */
function ProductsPage3(){
    const [products, setProducts] = useState(productsData);
    const productCards = products.map((product)=>{
        //lets add the functions we created below to our props.
        return (
            <ProductComp 
                title={product.title}
                price={product.price}
                imgSrc={product.imgSrc}
                count={product.quantity}
                key={product.id}
                id={product.id}
                addCounterClick={addCounter}
                subCounterClick={subCounter}
                removeClick={removeProduct}
            />
        )
    })
    //checks for the product.id clicked and adds +1 to its quantity
    function addCounter(e){
        e.preventDefault();
        setProducts((prevProducts)=>{
            return prevProducts.map((product)=>{
                if (product.id === Number(e.target.id)){
                    return (
                        {
                            ...product,
                            quantity: product.quantity+1
                        }
                    )
                }
                else{return ({...product})}
            })
        })
    }
    //checks for the product.id clicked and subtracts 1 to its quantity
    function subCounter(e){
        e.preventDefault();
        setProducts((prevProducts)=>{
            return prevProducts.map((product)=>{
                if (product.id === Number(e.target.id)){
                    if(product.quantity <= 0){
                        return (
                            {
                                ...product,
                                quantity: product.quantity
                            }
                        )
                    }
                    else{
                        return (
                            {
                                ...product,
                                quantity: product.quantity-1
                            }
                        )
                    }
                   
                }
                else{return ({...product})}
            })
        })
    }
    //checks for the product.id clicked takes it out of the array
    function removeProduct(e){
        e.preventDefault();
        setProducts((prevProducts)=>{
            return prevProducts.filter((product)=>{
                return product.id !== Number(e.target.id)
            })
        })
    }
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
                {productCards}
                <div className="purchase-data-container">
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

export default ProductsPage3;