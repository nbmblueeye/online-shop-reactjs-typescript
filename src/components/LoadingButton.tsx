import { ImSpinner11 } from "react-icons/im";

type Props = {
    aFunction:(data:any) => void, 
    data: any
    text: string, 
    loading:boolean,
}

const LoadingButton = ({ aFunction, data, text, loading }: Props) => {
  return (
    <button type="button" className={`loading-button ${loading ? "disable" : ""}`} onClick={() => aFunction(data)} disabled = {loading ? true:false}>
        {!loading ? 
        text 
        : 
        <><ImSpinner11 className="spinner" />&nbsp; Adding...</> }
    </button>
  )
}

export default LoadingButton