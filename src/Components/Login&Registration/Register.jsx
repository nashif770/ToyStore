import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const {createUser, userUpdate} = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // console.log(name, email, password, photo);
    createUser(email, password)
    .then(result =>{
        const createdUser = result.user;
        console.log(createdUser);

        // adding photo and display name
        setTimeout(()=>{
            userUpdate(name, photo)
            .then(()=>{
                // console.log('User Profile has been Updated')
            })
            .catch(error =>{
                console.log(error)
            });
        }, 500)
    })
    .catch(error => {
        console.log(error)
    })
  };
//   -------------------------------
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-1/2">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-5xl font-bold text-center">Register!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <p className="text-center mt-3">
                  Already Have an Account?
                  <Link to="/login" className="text-red-400">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
