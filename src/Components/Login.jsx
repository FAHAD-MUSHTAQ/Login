import React, { useRef } from "react";
import styles from "./Login.module.css";
const Login = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    if (!formRef.current.checkValidity()) {
      e.preventDefault();
    }
    formRef.current.classList.add("was-validated");
  };

  return (
    <>
      <div
        className={` ${styles["c-container"]} container .bg-dark.bg-gradient  p-3 `}
      >
        <center>
          <h1 className="fw-bold pb-3 text-dark">Login </h1>
        </center>
        <form ref={formRef} noValidate onSubmit={handleSubmit}>
          <label for="email" className="form-label">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="form-control"
            required
          />
          <label for="password" className="Password">
            Password
          </label>
          <input
            type="text"
            placeholder="Password"
            id="password"
            className="form-control"
            required
          />
          <div className="input-group gap-5">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox"
                required
              ></input>
              <label for="checkbox" className="form-check-label">
                Remember me
              </label>
            </div>
            <a href="#" role="button">
              Forget Password
            </a>
          </div>

          <div className="d-grid pt-2">
            <button className="btn btn-light  btn-sm">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
