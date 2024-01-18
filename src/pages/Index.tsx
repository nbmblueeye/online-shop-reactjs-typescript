import { useEffect } from "react"
import { setProducts } from "../features/productSlide";
import { useAppDispatch, useAppSelector } from '../app/hooks'
import PaginationPost from "../components/PaginationPost";
import HomeBanner from "../components/HomeBanner";
import HelmetSEO from "../components/HelmetSEO";

const Index = () => {

  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts());
  },[]);

  if(products.isLoading){
    return <div className="loader-box"><div className="loader"></div></div>
  }

  return (
    <>
      <HelmetSEO title="Online Shop" keywords="Electronics, Jewelery, Men's clothing, Women's clothing"/>
      <HomeBanner/>
      <div className="product-lists container">
        {
          products.products.length > 0 ?
          <PaginationPost products={products.products}/>
        :
          <p>No Products available</p>
        }
      </div>
    </>
  )
}

export default Index