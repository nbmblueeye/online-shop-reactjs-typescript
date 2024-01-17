import { useAppDispatch } from "../app/hooks";
import { setProduct } from "../features/productSlide";
import PriceFormat from "../utils/PriceFormat";
import StarRating from "../utils/StarRating";
import UpperCaseFirst from "../utils/UpperCaseFirst";
import { Product } from "../types/type";
import { Link } from "react-router-dom";

type Props = {
    product: Product,
}

const ProductItem = ({product}:Props) => {
  return (
    <div className="product-item">
        <Link to={`/${product.id}`}>
          <div className="product-item-img-box">
              <img src={product.image} alt={product.title} loading="lazy"/>
          </div>
        </Link>
        <p className="product-item-category">
          <span>Category: </span><Link to={`/category/${product.category}`}><UpperCaseFirst text={product.category}/></Link>
        </p>
        <div className="product-item-info-box">
            <h1 className="name">{product.title}</h1>
             <div className="product-item-info">
                <p className="rating"><StarRating rate={product.rating.rate}/></p>
                <p className="price"><PriceFormat price={product.price}/></p>
             </div>
        </div>
    </div>
  )
}

export default ProductItem