import { useEffect } from "react"
import { removeSelectedProduct, setProducts } from "../features/productSlide";
import { useAppDispatch, useAppSelector } from '../app/hooks'
import PaginationPost from "../components/PaginationPost";
import HomeBanner from "../components/HomeBanner";
import HelmetSEO from "../components/HelmetSEO";

const Index = () => {

  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts());
    dispatch(removeSelectedProduct());
  },[]);

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
    <>
      <HelmetSEO title="Online Shop" keywords="Electronics, Jewelery, Men's clothing, Women's clothing"/>
      <HomeBanner/>
      <div className="product-lists container">
        {
          data
        }
      </div>
    </>
  )
}

export default Index