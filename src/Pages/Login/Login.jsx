import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

import { AiOutlineEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const location = useLocation()
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(true)
    const naiget = useNavigate()

    const {LoginUser} = useContext(authContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        setSuccess('')
        setError('')
        LoginUser(email, password)
        .then(result =>{
            const user = result.user 
            naiget(location?.state ? location.state : "/")
        })
        .catch(error =>{
            setError(error.message)
        })

    }

    return (
        <div className="mt-6">
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        {success && <p className="text-green-400 text-center">{success}</p>}
                        {error && <p className="text-red-400 text-center">{error}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "password":"text"} name="password" placeholder="password" className="input input-bordered" required />
                            <AiOutlineEye onClick={() => setShow(!show)} className="absolute top-[50px] right-2 text-xl" ></AiOutlineEye>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <small>Do not have account? <Link className="text-bold text-blue-600" to='/register'>Register</Link></small>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;