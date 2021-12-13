import React, { useState,useEffect  } from 'react'
import { useForm } from "react-hook-form";
import {Alert} from 'reactstrap'


function SignUpToggle(props) {

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
                        <label className="col-form-label">First Name:</label>
                        <input
                            type="text"
                            className={`form-control ${errors.fname && "invalid"}`}
                            {...register("fname", { required: "First Name is Required" })}
                            onKeyUp={() => {
                            trigger("fname");
                            }}
                        />
                        {errors.fname && (
                            <small className="text-danger">{errors.fname.message}</small>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Last Name:</label>
                        <input
                            type="text"
                            className={`form-control ${errors.lname && "invalid"}`}
                            {...register("lname", { required: "Last Name is Required" })}
                            onKeyUp={() => {
                            trigger("lname");
                            }}
                        />
                        {errors.lname && (
                            <small className="text-danger">{errors.lname.message}</small>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Age:</label>
                        <input
                            type="text"
                            className={`form-control ${errors.age && "invalid"}`}
                            {...register("age", {
                            required: "Age is Required",
                            min: {
                                value: 13,
                                message: "Minimum Required age is 13",
                            },
                            max: {
                                value: 65,
                                message: "Maximum allowed age is 65",
                            },
                            pattern: {
                                value: /^[0-9]*$/,
                                message: "Only numbers are allowed",
                            }
                            })}
                            onKeyUp={() => {
                            trigger("age");
                            }}
                        />
                        {errors.age && (
                            <small className="text-danger">{errors.age.message}</small>
                        )}
                    </div>
                       <div className="form-group">
                        <label className="col-form-label">Phone:</label>
                        <input
                            type="text"
                            className={`form-control ${errors.phone && "invalid"}`}
                            {...register("phone", { required: "Phone is Required",
                            pattern: {
                            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: "Invalid phone no",
                            },
                        })}
                        onKeyUp={() => {
                            trigger("phone");
                        }}
                        />
                        {errors.phone && (
                            <small className="text-danger">{errors.phone.message}</small>
                        )}
                    </div>
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
                    >Sign Up</button>
                </form>
            </div>
        </div>
            
        </div>
    )
}

export default SignUpToggle
