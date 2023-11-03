import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

import google from "../../assets/icons/google.svg";

const SignUp = () => {
  const { newUser, googlePopUp } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    newUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };

  const handlePopUp = () => {
    googlePopUp()
      .then((res) => console.log(res.result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero my-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-5">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up!</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center flex justify-center my-4 items-center">
              <p>
                Or Sign Up with{" "}
                <button onClick={handlePopUp} className=" ml-4">
                  <img src={google} alt="google" />
                </button>
              </p>
            </div>
            <p className="text-center">
              Already an user{" "}
              <Link className="font-medium text-orange-600" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
