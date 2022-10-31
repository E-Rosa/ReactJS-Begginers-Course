import {useState, useEffect} from "react";
import "./ProductsPage.css";
import "../Product/Product.css";
import Product from "../Product/Product";
import productsData from "../../data/productsData";
import PurchaseDataTag from "./PurchaseDataTag/PurchaseDataTag.js";
import discountCodes from "../../data/discountCodes";

function ProductsPage(){
    const [purchase, setPurchase] = useState({
        discount: 0,
        delivery: 0,
        subtotal: 0,
        total: 0,
        codeUsed: false
    });
    const [products, setProducts] = useState(productsData); 
    const [discountInput, setDiscountInput] = useState();
    const [message, setMessage] = useState();
    
    useEffect(()=>{
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
        setMessage("");
    }, [products])
    
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
    function handleChange(e){
        setDiscountInput(e.target.value);
    }
    function handleDiscount(e){
        e.preventDefault();
        let codeFound = discountCodes.find((code)=>{return code.id === discountInput});
        if(codeFound !== undefined){
            if(purchase.codeUsed !== true){
                setPurchase((prevPurchase)=>{
                    return (
                        {
                            ...prevPurchase,
                            discount: prevPurchase.discount + codeFound.value,
                            total: prevPurchase.total - codeFound.value,
                            codeUsed: true
                        }
                    )
                });
                setMessage(`You have applied a $${codeFound.value} discount!`)
            }
        }
        else{
            setMessage("The code provided is not valid")
        }
    }   
    function handleCheckout(e){
        e.preventDefault();
        setPurchase((prevPurchase)=>{
            return(
                {
                    discount: 0,
                    delivery: 0,
                    subtotal: 0,
                    total: 0,
                    codeUsed: false
                }
            )
        })  
        setProducts((prevProducts)=>{
            return prevProducts.map((product)=>{
                return (
                    {
                        ...product,
                        quantity:0
                    }
                )
            })
        })
    }
    const productCards = products.map((product)=>{
        return (
            <Product 
                title={product.title}
                price={product.price}
                addCounterClick={addCounter}
                subCounterClick={subCounter}
                removeClick={removeProduct}
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
                {productCards}
                <div className="purchase-data-container">
                    <PurchaseDataTag label="Discount" labelValue={` $${purchase.discount}`} />
                    <PurchaseDataTag label="Delivery" labelValue={` $${purchase.delivery}`} />
                    <PurchaseDataTag label="Subtotal" labelValue={` $${purchase.subtotal}`} />
                    <PurchaseDataTag label="Total" labelValue={` $${purchase.total}`} />
                </div>
                <div className="shopping-cart-footer">
                    <form className="discount-form">
                        <div className="discount-form-container-1">
                            <input type="text" name="promo-code" className="discount-input" onChange={handleChange}></input>
                            <button className="discount-button" onClick={handleDiscount}>Apply discount</button>
                        </div>
                        {message}
                    </form>
                    <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductsPage;