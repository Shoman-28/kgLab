import React, { useEffect, useState } from 'react';
import Sidebar from '../Deshboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from "axios";


const AddDoctor = () => {

   
    const [imgURL, setImgURL] = useState(null);
    const [imgUploadedNotification, setImgUploadedNotification] = useState(false);
    const [response, setResponse] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const hendelImageUploaded = (e) => {
        const imageData = new FormData();
        imageData.set("key", "e07f7c56d7dcb2d44dd6ce310c8761bc");
        imageData.append("image", e.target.files[0]);
        axios.post("https://api.imgbb.com/1/upload", imageData)
          .then((response) => {
            setImgURL(response.data.data.display_url);
            setImgUploadedNotification(true);
          })
          .catch((error) => {
            console.log("img error", error);
          });
      };

    const onSubmit = (data) => {
        const servicesInfo = {
            name: data.name,
            email: data.email,
            img: imgURL,
        };

    
        fetch('https://peaceful-redwood-04783.herokuapp.com/addADoctore', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify(servicesInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
                console.log("post success")
              setResponse(data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
    };

      useEffect(() => {
          
        setInterval(() => {
          setImgUploadedNotification(false);
          setResponse(false);
        }, 8000);
      }, [setImgUploadedNotification, setResponse]);
    
  

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor</h5>

                {response && (
                    <h5 className="text-success">Service added successfully </h5>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email"  name="email" {...register("email", { required: true })} placeholder="Enter email" />
                        {errors.email && (<span className="text-danger">Field is required</span>)}
                    </div>
                    <div className="form-group">
                    
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" name="name" {...register("name", { required: true })} placeholder="Name" />
                        {errors.name && (<span className="text-danger">Field is required</span>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image  {imgUploadedNotification && (<span className="text-success">image successfully uploaded</span>)}</label>
                        <input onChange={hendelImageUploaded} name="image" accept="image/*" type="file" {...register("image", { required: true })} className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        {errors.image && (<span className="text-danger">Field is required</span>)}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;