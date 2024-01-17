import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import UpperCaseFirst from "../utils/UpperCaseFirst";

type Props = {
    cate: string|undefined, 
    product: string|undefined, 
}
const BreadCrumb = ({cate, product}:Props) => {

    return (
        <ul className="breadcrumb-box">
            <li className="breadcrumb-item">
                <Link to="/">Home</Link>
            </li>
            { cate &&
            <>
                <li className="breadcrumb-item"><GoArrowRight size={20}/></li>
                <li className="breadcrumb-item category">
                    { product ? <Link to={`/category/${cate}`}><UpperCaseFirst text={cate}/></Link> : <UpperCaseFirst text={cate}/>}
                </li>
            </>
            }
            {product && 
            <>
                <li className="breadcrumb-item"><GoArrowRight size={20}/></li>
                <li className="breadcrumb-item product">{product}</li>
            </>
            }
        </ul>
    )
}

export default BreadCrumb