import { Link, useNavigate } from "react-router-dom"
import NavBar from "../Shared/NavBar/NavBar"
import { useContext, useState } from "react"
import { AiOutlineEye } from "react-icons/ai";
import { authContext } from "../../AuthProvider/AuthProvider"

const Register = () => {

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(true)
    const naiget = useNavigate()
    const { createUser } = useContext(authContext)

    const handleRegister = e => {

        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const name = form.get('full-name')
        const password = form.get('password')
        const photoUrl = form.get('pic-url')
        setSuccess('')
        setError('')
        if (password.length < 6) {
            setError('Password Mustbe in 6 latter!')
            return
        }

        createUser(email, password)
            .then(result => {
                const logUser = result.user;

                setSuccess('User SUccessfully Created!')
                console.log(logUser)
                naiget("/")
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        {success && <p className="text-green-400 text-center">{success}</p>}
                        {error && <p className="text-red-400 text-center">{error}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="full-name" placeholder="Full name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Pic URL</span>
                            </label>
                            <input type="text" name="pic-url" placeholder="Profile Pic URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            
                                <input type={show ? "password":"text"} name="password" placeholder="password" className="input input-bordered" required />
                                <AiOutlineEye onClick={()=>setShow(!show)} className="absolute top-[50px] right-2 text-xl" ></AiOutlineEye>
                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <small>Already have account? <Link className="text-bold text-blue-600" to='/login'>Login</Link></small>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register