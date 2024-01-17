import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeSelectedProduct, setProductsByCategory } from "../features/productSlide";
import { useParams } from "react-router-dom";
import PaginationPost from "../components/PaginationPost";
import UpperCaseFirst from "../utils/UpperCaseFirst";
import BreadCrumb from "../components/BreadCrumb";

const Categories = () => {

    const { category } = useParams();
    const products = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();

    const categoryRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
        if(category){
            dispatch(setProductsByCategory(category));
            dispatch(removeSelectedProduct());

            window.scrollTo({
              top:categoryRef.current?.scrollTop,
              behavior:"smooth"
            })
        }
    },[category]);
  
    let data:any = "";
    if(products.isLoading){
      data = <div className="loader-box"><div className="loader"></div></div>
    }else{
      if(products.products.length > 0 ){
        data = <PaginationPost/>
      }else{
        data = <p>No Products available</p>
      }
    }

  return (
    <div className="container">
      <BreadCrumb cate={category} product=""/>
      <div className="product-lists" ref = {categoryRef}>
        <h1 className="page-title"><UpperCaseFirst text={category ? category:"Category"}/></h1>
        {
            data
        }
      </div>
    </div>
  )
}

export default Categories