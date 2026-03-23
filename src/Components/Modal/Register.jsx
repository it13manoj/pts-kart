import { useState } from "react";
import image from "../../images/logo.png";
import axios from "axios";
import URL from "../config/API";
import { Link, useNavigate } from "react-router-dom";

function Register({ setIslogin }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const eventHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`${URL.BASE_URL}/register`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Optional: auto login after register
      if (res?.data?.token) {
        localStorage.setItem("token", res.data.token);
        setIslogin && setIslogin(true);
        navigate("/home");
      } else {
        navigate("/"); // go to login page
      }
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className="user-form-part">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">

            <div className="user-form-logo">
              <Link to="/">
                <img src={image} alt="logo" />
              </Link>
            </div>

            <div className="user-form-card">
              <div className="user-form-title">
                <h2>create account</h2>
                <p>Register using your mobile number</p>
              </div>

              <div className="user-form-group">
                <form className="user-form" onSubmit={registerSubmit}>

                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your full name"
                      onChange={eventHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      placeholder="Enter mobile number"
                      onChange={eventHandler}
                      required
                    />
                  </div>

                  

                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={eventHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm password"
                      onChange={eventHandler}
                      required
                    />
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label" htmlFor="TermsAndConditions">
                      I agree to the <Link to="/TermCondition">Terms & Conditions</Link>
                    </label>
                  </div>

                  <div className="form-button">
                    <button type="submit">register</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="user-form-remind">
              <p>
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>

            <div className="user-form-footer">
              <p>
                Greeny | &COPY; Copyright by <a href="#">Mironcoder</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
