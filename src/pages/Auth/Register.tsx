import { useRef, useState } from "react"
import BreadCrumb from "../../components/BreadCrumb";
import { User } from "../../types/type";
import HelmetSEO from "../../components/HelmetSEO";

const Register = () => {
 
    const registerRef = useRef<HTMLDivElement | null>(null);
    const [user, setUser] = useState({} as User);

    const {  name, email, password, passwordConfirmation } = user;
    const _setUser = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <HelmetSEO title="Register" keywords="Electronics, Jewelery, Men's clothing, Women's clothing"/>
            <BreadCrumb cate="Register" product=""/>
            <div className="register-content" ref={registerRef}>
                <form className="form-control">
                    <div className="form-header">
                        <h1>User Register</h1>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="User Name" name="name" id="user-name" className="user-name" value={name} onChange={(e) => _setUser(e)}/>
                    </div>  
                    <div className="form-group">
                        <input type="text" placeholder="User Email" name="email" id="user-email" className="user-email" value={email} onChange={(e) => _setUser(e)}/>
                    </div> 
                    <div className="form-group">
                        <input type="text" placeholder="Password" name="password" id="user-password" className="user-password" value={password} onChange={(e) => _setUser(e)}/>
                    </div> 
                    <div className="form-group">
                        <input type="text" placeholder="Password confirmation" name="passwordConfirmation" id="user-passwordConfirmation" className="user-passwordConfirmation" value={passwordConfirmation} onChange={(e) => _setUser(e)}/>
                    </div> 
                    <button type="submit" className="btn btn-white">Register</button>
                </form>
            </div>
        </div>
    )
  
}

export default Register