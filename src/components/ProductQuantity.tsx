import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useAppDispatch } from "../app/hooks";
import { addProductQuantity, minusProductQuantity } from "../features/productSlide";
import { ProductCart } from "../types/type";

type Props = {
  product: ProductCart,
  isCart: boolean,
}

const ProductQuantity = ({product, isCart}:Props) => {

  const dispatch = useAppDispatch();

  return (
    <div className='product-quantity-box'>
        <button className="product-quantity-btn add-quantity" onClick={() => dispatch(addProductQuantity([{id:product.id},{isCart:isCart}]))}><FaPlus size={16}/></button>
        <div className="product-quantity-text">{product.quantity}</div>
        <button className="product-quantity-btn minus-quantity" onClick={() => dispatch(minusProductQuantity([{id:product.id},{isCart:isCart}]))}><FaMinus size={16}/></button>
    </div>
  )
}

export default ProductQuantity