
import { useState } from "react"
import image from "../../images/logo.png"
import axios from "axios";
import URL from "../config/API";
import { Link } from "react-router-dom";


function Login({ setIslogin }) {
    const [login, setLogin] = useState();
    
    const [form, setform] = useState({
        email: "",
        password: ""
    })



    const eventHendler = (e) => {
        setform(preState => ({ ...preState, [e.target.name]: e.target.value }))
    }

    const loginSubmit = (e) => {
        e.preventDefault();


        axios.post(`${URL.BASE_URL}/login`, form, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            localStorage.setItem("token", res?.data?.token)
            localStorage.setItem("ptsAuthUser", JSON.stringify(res?.data?.user))
            setIslogin(true)
        })
    }




    return (
        <>
            <section className="user-form-part">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
                            <div className="user-form-logo">
                                <a href='index.html'><img src={image} alt="logo" /></a>
                            </div>
                            <div className="user-form-card">
                                <div className="user-form-title">
                                    <h2>welcome!</h2>
                                    <p>Use your credentials to access</p>
                                </div>
                                <div className="user-form-group">
                                    <ul className="user-form-social">
                                        <li><a href="#" className="google" onClick={() =>
                                            window.open("http://localhost:4000/auth/google", "_self")
                                        }><i className="fab fa-google"></i>login with google</a></li>
                                    </ul>
                                    <div className="user-form-divider">
                                        <p>or</p>
                                    </div>
                                    <form className="user-form" onSubmit={loginSubmit}>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" placeholder="Enter your email" onChange={eventHendler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control" placeholder="Enter your password" onChange={eventHendler} />
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="check" />
                                            <label className="form-check-label" for="check">Remember Me</label>
                                        </div>
                                        <div className="form-button">
                                            <button type="submit">login</button>
                                            <p>Forgot your password?<a href='reset-password.html'>reset here</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="user-form-remind">
                                <p>Don't have any account?<Link to="/Register">Register</Link></p>
                            </div>
                            <div className="user-form-footer">
                                <p>Greeny | &COPY; Copyright by <a href="#">Mironcoder</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login
