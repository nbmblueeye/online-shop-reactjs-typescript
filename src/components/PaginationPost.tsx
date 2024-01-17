import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../app/hooks";
import ProductItem from "./ProductItem";

const PaginationPost = () => {

    const products = useAppSelector((state) => state.products.products);
    const [postPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const productListRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(products && products.length > 10){
            let activeNumber = Math.ceil(products.length/postPerPage);
            setTotalPages(activeNumber);
        }
    },[products]);

    const lastPageIndex = postPerPage * currentPage;
    const firstPageIndex = lastPageIndex - postPerPage;
    const paginationProducts = products.slice(firstPageIndex, lastPageIndex);

    let pages = [];
    if(totalPages > 1){
      for(let i = 0; i < totalPages; i++){
        pages[i] = i + 1;
      }
    }

    const setActivePage = (activeNumber:number) => {
      setCurrentPage(activeNumber);
      window.scrollTo({
        top:productListRef.current?.scrollTop,
        behavior:"smooth"
      })
    }

    const setNPActivePage = (dir:string) => {
      if(currentPage > 1 && dir == "prev"){
        setCurrentPage(() => currentPage - 1);
        window.scrollTo({
          top:productListRef.current?.scrollTop,
          behavior:"smooth"
        })
      }else if(currentPage < totalPages && dir == "next"){
        setCurrentPage(() => currentPage + 1);
        window.scrollTo({
          top:productListRef.current?.scrollTop,
          behavior:"smooth"
        })
      }
    }

    return (
      <>
        <div className="products-list" ref={productListRef}>
          {
            paginationProducts.map((product, index) => {
              return (
                <ProductItem product={product} key={index}/>
              )})
          }
        </div>
       
          {
            totalPages > 1 && 
            <div className="pagination-wrapper">
              <div className="pagination-box">
                <button className="pagination-item" onClick={() => setNPActivePage('prev') }>Prev</button>
                {
                  pages.map((page, index) =>{
                    return(
                      <button className={`pagination-item ${currentPage == page ? "active-page":""}`} key={index} onClick={() => setActivePage(page) }>
                        {page}
                      </button>
                    )
                  })
                }
                <button className="pagination-item" onClick={() => setNPActivePage('next') }>Next</button>
              </div>
            </div>
          }
        
      </>
    )
}

export default PaginationPost