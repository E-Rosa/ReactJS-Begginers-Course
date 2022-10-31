import { useState, useEffect } from "react";
import "../materials/shopping-cart-html-css/ProductsPage.css";
import "../materials/shopping-cart-html-css/Product.css";
import productsData from "../../data/productsData";
import PurchaseDataTagComp from "./_components/PurchaseDataTag/PurchaseDataTag";
import ProductComp from "./_components/Product/Product.js";

/*Now, we're going to add the purchase logic. */
function ProductsPage4(){
    const [products, setProducts] = useState(productsData);

    //We're going to start by creating a state that represents this data.
    const [purchase, setPurchase] = useState({
        discount: 0,
        delivery: 0,
        subtotal: 0,
        total: 0,
        codeUsed: false
    });

    //Here we define a useEffect that executes whenever the products state changes.
    useEffect(()=>{
        //reset the purchase
        setPurchase((prevPurchase)=>{
            return(
                {
                    discount: 0,
                    delivery: 0,
                    subtotal: 0,
                    total: 0,
                    codeUsed: prevPurchase.codeUsed
                }
            )
        })  
        //calculate purchase
        setPurchase((prevPurchase)=>{
            let discount = prevPurchase.discount;
            let total = prevPurchase.total;
            let delivery = prevPurchase.delivery;
            let subtotal = prevPurchase.subtotal;
            products.forEach((product)=>{
                if(product.quantity > 0){
                    subtotal = subtotal + Math.round((product.price * product.quantity));
                    delivery = delivery + product.deliveryCost;
                    discount = discount + (Math.round((product.price/100) * product.discountValue)*product.quantity);
                    total = total + (Math.round((subtotal) + delivery - discount));
                }
            })
            return (
                {
                    discount: discount,
                    total: total,
                    delivery: delivery,
                    subtotal: subtotal
                }
            )
        })
    }, [products])

    const productCards = products.map((product)=>{
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
                    {/*Here we change the labelValue prop to our state */}
                    <PurchaseDataTagComp label="Discount" labelValue={` $${purchase.discount}`} />
                    <PurchaseDataTagComp label="Delivery" labelValue={` $${purchase.delivery}`} />
                    <PurchaseDataTagComp label="Subtotal" labelValue={` $${purchase.subtotal}`} />
                    <PurchaseDataTagComp label="Total" labelValue={` $${purchase.total}`} />
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

export default ProductsPage4;