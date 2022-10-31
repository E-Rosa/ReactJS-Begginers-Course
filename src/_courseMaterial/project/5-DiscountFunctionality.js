import { useState, useEffect } from "react";
import "../materials/shopping-cart-html-css/ProductsPage.css";
import "../materials/shopping-cart-html-css/Product.css";
import productsData from "../../data/productsData";
import PurchaseDataTagComp from "./_components/PurchaseDataTag/PurchaseDataTag";
import ProductComp from "./_components/Product/Product.js";
import discountCodes from "../../data/discountCodes";

/*Now, we're going to add the discount logic. */
function ProductsPage5(){
    const [products, setProducts] = useState(productsData);
    const [purchase, setPurchase] = useState({
        discount: 0,
        delivery: 0,
        subtotal: 0,
        total: 0,
        codeUsed: false
    });
    //first, create a discountInput state to represent the discount.
    const [discountInput, setDiscountInput] = useState();
    //also, create a message state that will display to the user depending on the result
    //of the discount, whether it was applied or not.
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
        //resets our message whenever product changes
        setMessage("")
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
    //checks if code provided exists, applies discount and sends message to user
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
    //Whenever input changes, update discountInput state.
    function handleChange(e){
        setDiscountInput(e.target.value);
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
                    <PurchaseDataTagComp label="Discount" labelValue={` $${purchase.discount}`} />
                    <PurchaseDataTagComp label="Delivery" labelValue={` $${purchase.delivery}`} />
                    <PurchaseDataTagComp label="Subtotal" labelValue={` $${purchase.subtotal}`} />
                    <PurchaseDataTagComp label="Total" labelValue={` $${purchase.total}`} />
                </div>
                <div className="shopping-cart-footer">
                    <form className="discount-form">
                    <div className="discount-form-container-1">
                        {/*Associate handleChange() with onChange event */}
                        <input type="text" name="promo-code" className="discount-input" onChange={handleChange}></input>
                        {/*associate handleDiscount() to onClick in discount button*/}
                        <button className="discount-button" onClick={handleDiscount}>Apply discount</button>
                    </div>
                    {/*add message state to DOM */}
                    {message}
                    </form>
                    <button className="checkout-button">Checkout</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductsPage5;