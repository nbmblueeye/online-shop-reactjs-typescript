import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeSelectedProduct } from "../features/productSlide";
import ProductQuantity from "../components/ProductQuantity";
import PriceFormat from "../utils/PriceFormat";
import BreadCrumb from "../components/BreadCrumb";

const Cart = () => {
    
    const { productCart } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(removeSelectedProduct());
    },[]);

    return (
        <div className="container">
            <BreadCrumb cate="Cart" product=""/>
            <div className="cart-content">
                <h1 className="page-title">Cart Page</h1>
                <div className="table-wrapper">
                    <table>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Image</th>
                            <th>Product Title</th>
                            <th>Product Quantity</th>
                            <th>Product Price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                productCart.length > 0 ?
                                productCart.map((product) => {
                                    return (
                                        <tr key={product.id}>
                                            <td className="product-id">{product.id}</td>
                                            <td>
                                                <div className="cart-image-box">
                                                    <img src={product.image} alt={product.title} />
                                                </div>
                                            </td>
                                            <td>{product.title}</td>
                                            <td className="product-quantity"><ProductQuantity product={product} isCart={true}/></td>
                                            <td>
                                                <PriceFormat price={product.price}/>
                                            </td>
                                            <td>
                                                <PriceFormat price={product.quantity * product.price}/>
                                            </td>
                                        </tr>    
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={6}>There're no Product in your Cart</td>
                                </tr>
                            }
                            <tr>
                                <td colSpan={4}></td>
                                <td className="cart-total-title">Total: </td>
                                <td className="cart-total-value">
                                    <PriceFormat price={productCart.reduce((acc, item) => acc + item.price * item.quantity, 0)}/>  
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart