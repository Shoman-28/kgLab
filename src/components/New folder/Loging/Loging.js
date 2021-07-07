import React, { useContext } from "react";
import "./Loging.css";
import { userContext } from "../../../App";
import {
  handleGoogleLoging,
  insializUserLoging,
} from "../firebase/FirebaseAuth";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useLocation, useHistory } from "react-router-dom";
import loginImage from "../../../images/loginBg.png";

const Loging = () => {
  const { setLoggedInUser, admin, setAdmin } = useContext(userContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  insializUserLoging();
  const handleGoogleSignIn = () => {
    handleGoogleLoging()
      .then((res) => {
        setLoggedInUser(res);

        const adminEmail = {
          email: res.email,
        };
        fetch("https://peaceful-redwood-04783.herokuapp.com/checkAdmin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              setAdmin(true);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        history.replace(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">Email or Phone number</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>          
          <div className="from-group mt-4">
            <Button variant="primary" className="login-button" onClick="">
              Log In
            </Button>
            
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">
              Forgot password?
            </label>
          </div>
          <div className="from-group mt-3">
            <Button className="google-signIn-btn" onClick={handleGoogleSignIn}>
              Google Sign In
            </Button>
          </div>
          <div className="from-group mt-2">
            <Button className="create-account" onClick="{handleGoogleSignIn}">
              Create New Account
            </Button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Loging;
