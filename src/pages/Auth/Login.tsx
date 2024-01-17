import { useRef, useState } from "react"
import BreadCrumb from "../../components/BreadCrumb"
import { User } from "../../types/type";
import HelmetSEO from "../../components/HelmetSEO";


const Login = () => {

    const loginRef = useRef<HTMLDivElement | null>(null);
    const [user, setUser] = useState({} as User);

    const { email, password } = user;
    const _setUser = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value})
    }


    return (
        <div className="container">
            <HelmetSEO title="Login" keywords="Electronics, Jewelery, Men's clothing, Women's clothing"/>
            <BreadCrumb cate="Login" product=""/>
            <div className="login-content" ref={loginRef}>
                <form className="form-control">
                    <div className="form-header">
                        <h1>User Login</h1>
                    </div> 
                    <div className="form-group">
                        <input type="text" placeholder="User Email" name="email" id="user-email" className="user-email" value={email} onChange={(e) => _setUser(e)}/>
                    </div> 
                    <div className="form-group">
                        <input type="text" placeholder="Password" name="password" id="user-password" className="user-password" value={password} onChange={(e) => _setUser(e)}/>
                    </div>  
                    <button type="submit" className="btn btn-white">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login