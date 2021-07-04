import React, { useContext } from "react";
import "./Loging.css";
import { userContext } from "../../../App";
import {
    handleGoogleLoging,
    insializUserLoging,
} from "../firebase/FirebaseAuth";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useLocation, useHistory } from "react-router-dom";


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


      const adminEmail={
         email:res.email
      }
                fetch("https://peaceful-redwood-04783.herokuapp.com/checkAdmin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(adminEmail)
                })
                .then(res=>res.json())
                .then(data=>{
                     if(data.length > 0){

                        setAdmin(true)

                     }
                   
                })
                .catch(err=>{
                    console.log(err)
                })
                history.replace(from);
                
            })
            .catch((err) => {
                console.log(err);
            });
    }





  return (
    <div>
       <div className="signing-button">
            <div className="signing mt-5">
                <Button variant="primary" onClick={handleGoogleSignIn}>                  
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faGoogle} /> Log-ing 
                </Button>
            </div>
            <i class="fab fa-google-plus-g"></i>
        </div>
    </div>
    
  );
};

export default Loging;
