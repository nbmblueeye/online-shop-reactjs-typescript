import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import PriceFormat from "../utils/PriceFormat";
import StarRating from "../utils/StarRating";
import UpperCaseFirst from "../utils/UpperCaseFirst";
import { useEffect, useRef, useState } from "react";
import { addProductToCart, setProduct } from "../features/productSlide";
import { toast } from 'react-toastify';
import ProductQuantity from "../components/ProductQuantity";
import { ProductCart } from "../types/type";
import LoadingButton from "../components/LoadingButton";
import BreadCrumb from "../components/BreadCrumb";
import HelmetSEO from "../components/HelmetSEO";

const Single = () => {

  const { productId } = useParams();
  const products = useAppSelector((state) => state.products);
  const dispatch  = useAppDispatch();

  const productRef = useRef<HTMLDivElement | null>(null);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if(productId){
      dispatch(setProduct(productId));
      window.scrollTo({
        top:productRef.current?.scrollTop,
        behavior:"smooth"
      })
    }
  },[productId]);

  const addToCartHandle = (item:ProductCart) => {
    if(products.productCart.find(product => product.id == item.id)){
      toast.error("Product was already added to Cart");
      return false;
    }else{
      dispatch( addProductToCart(item));
      toast.success("Product is added to Cart");
      setAdding(true);
      setTimeout(() =>{
        setAdding(false);
      },1000);
    }
  };

  if(products.isLoading){
    return <div className="loader-box"><div className="loader"></div></div>
  }

  return (
    <div className="container">
      <HelmetSEO title={Object.keys(products.product).length > 0 ? products.product.title: "No Product"} keywords={Object.keys(products.product).length > 0 ? products.product.category:""}/>
      <BreadCrumb cate={Object.keys(products.product).length > 0 ? products.product.category:""} product={Object.keys(products.product).length > 0 ? products.product.title:"No Product"}/>
      <div className="single-content" ref={productRef}>
        { 
          Object.keys(products.product).length > 0 ?
          <div className="product-content">
            <div className="product-image-box">
                <img src={products.product.image} alt={products.product.title} />
            </div>
            <div className="product-information-box">
                <h1 className="product-title">{products.product.title}</h1>
                <p className="product-rating"> <StarRating rate={products.product.rating.rate}/></p>
                <p className="product-price"><PriceFormat price={products.product.price}/></p>
                <p className="product-description"><UpperCaseFirst text={products.product.description}/></p>
                <p className="product-category"><strong>Category:</strong> <UpperCaseFirst text={products.product.category}/></p>
                <div className="product-quantity">
                  <ProductQuantity product={products.product} isCart={false}/>
                </div>
                <div className="product-add-to-cart">
                  <LoadingButton aFunction={addToCartHandle} data={products.product} text="Add Product to Cart" loading={adding}/>
                </div>
            </div>
          </div>
          :
          <p>No Product available</p>
        }
      </div>
    </div>
  )
}
export default Single