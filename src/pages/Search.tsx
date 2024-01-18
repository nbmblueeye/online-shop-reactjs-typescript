import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { searchProducts } from '../features/productSlide';
import BreadCrumb from '../components/BreadCrumb';
import PaginationPost from '../components/PaginationPost';

const Search = () => {

  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [searching, setSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let query = searchParams.get('s');
    if(query) {
      setSearching(true);
      dispatch(searchProducts(query));
      window.scrollTo({
        top:searchRef.current?.scrollTop,
        behavior:"smooth"
      })
    }
    setTimeout(() => {
      setSearching(false);
    }, 500);

    return () => {
      dispatch(searchProducts(''));
    }
  },[searchParams]);

 
  if(searching){
    return <div className="loader-box"><div className="loader"></div></div>
  }

  return (
    <div className="container">
      <BreadCrumb cate="Search" product=""/>
      <div className="product-lists" ref = {searchRef}>
        <h1 className="page-title">Search Result for "{searchParams.get('s')}"</h1>
        {
          products.searchProducts.length > 0 ?
          <PaginationPost products={products.searchProducts}/>
        :
          <p>No Product were found</p>
        }
      </div>
    </div>
  )
}

export default Search
