import React, { useState,useEffect  } from 'react'
import { useForm } from "react-hook-form";
import {Alert} from 'reactstrap'


function LogInToggle(props) {

     const [alertShow] = useState(false);
    const [alertText] = useState(null);
    const [alertType] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();


     const onSubmit = (data) => {
        


        console.log(data);
        reset();
        props.showAlert("successfully Sign Up" , "success")
          
    };


    return (
        <div style={{width:"96%",margin:"0 auto"}}>

              <div className="row justify-content-sm-center ">

              {/* <Alert isOpen={alertShow} color={alertType}> {alertText} </Alert> */}
            <div className="shadow round pb-3">
               
                 <form onSubmit={handleSubmit(onSubmit)}>
                   
                 
                    <div className="form-group">
                        <label className="col-form-label">Email:</label>
                        <input
                            type="text"
                            className={`form-control ${errors.email && "invalid"}`}
                            {...register("email", { required: "Email is Required" ,
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                            }})}
                            onKeyUp={() => {
                            trigger("email");
                            }}
                        />
                        {errors.email && (
                            <small className="text-danger">{errors.email.message}</small>
                        )}
                    </div>
                     <div className="form-group">
                        <label className="col-form-label">Password:</label>
                        <input
                            type="tepasswordxt"
                            className={`form-control ${errors.password && "invalid"}`}
                            {...register("password", { required: "Password is Required" })}
                            onKeyUp={() => {
                            trigger("password");
                            }}
                        />
                        {errors.password && (
                            <small className="text-danger">{errors.password.message}</small>
                        )}
                    </div>
                   
                    <button
                    type="submit"
                    className="btn btn-primary  my-3"
                    style={{position : " block" ,width:"100%"}}
                    >Log In</button>
                </form>
            </div>
        </div>
            
        </div>
    )
}

export default LogInToggle
