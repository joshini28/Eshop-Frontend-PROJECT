import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import {  useFormik } from "formik"
import * as Yup from 'yup';
import axios from 'axios';

const Index = () => {
    const [requestRespnse,SetrequestRespnse]= useState(
        {
            message:"",
            alertClassname:"",
        }
    );
    // const [firstName,SetFirstName]=useState("")
    // const [LastName,SetlastName]=useState("")

    // const onChangeandler = (event) => {
    //     setUser({
    //         ...user,
    //         [event.target.name]: event.target.value
    //     })
    // }
    // const handler = (event) => {
    //     event.preventDefault();
    //     console.log(user);
    // }

    const initialValues = {
        firstName: "",
        name:"",
        lastName:"",
        email: "",
        mobile: "",
        password: "",
        username:"",
        
    }
    const onSubmit = async(values) => {
        const newvalues={
            ...values,
            username:`${values.firstName}`,
            name:`${values.firstName}${values.lastName}`
            


        };
        try{
                const response = await axios.post("http://localhost:8080/api/auth/register",newvalues);
                SetrequestRespnse({
                    message: 'user registered successfully',
            alertClassName: "alert alert-success"
                })
                
        }
        catch(error){
           
            
            SetrequestRespnse({
                message: error.response.data.message,
                alertClassName: "alert alert-danger"
              })
              
              
        }
        
        

        
    }
    useEffect(() => {
        console.log(requestRespnse);
    }, [requestRespnse]);

    // const validate = (values) => {
    //     let errors = {};
    //     if (!values.firstName) {
    //         errors.firstName = "first name is required";
    //     }
    //     if (!values.lastName) {
    //         errors.lastName = "last name is required";
    //     }

    //     if (!values.email) {
    //         errors.email = "email is required";
    //     } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = "Invalid email format";
    //     }

    //     if (!values.mobile) {
    //         errors.mobile = "mobile is required";
    //     }

    //     if (!values.password) {
    //         errors.password = "password is required";
    //     }

    //     return errors;
    // };
    const validationSchema = Yup.object({
        firstName:Yup.string().required("First name is required"),
        
        lastName:Yup.string().required("Last name is required"),
        email: Yup.string()
        .email("invalid email fromat")
        .required("email is required"),
        mobile: Yup.string().required("mobile is required"),
        password:Yup.string()
        .required("password is requred")
        .min(6,"minimum 6 characters are required")

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema,
        validateOnMount:true,
    });
    return (
        <div className='container'>
            <div className='row'>
                 <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className={styles.wrapper}>
                    <div class={ requestRespnse.alertClassName } role="alert">
              { requestRespnse.message }
            </div>
                        {/* <h1>{formik.values.name}</h1> */}
                        <h2>Register</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                
                                <label >first name</label>
                                
                                <input type="text"
                                    name='firstName'
                                    className={`form-control ${formik.errors.firstName && formik.touched.firstName?"is-invalid":null}`} 
                                    value={formik.values.firstName} onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                            {formik.errors.firstName && formik.touched.firstName?(<small className="text-danger">{formik.errors.firstName}</small>):null}
                            </div><div className="form-group"><label >last name</label>
                                <input type="text"
                                    name='lastName' className={`form-control ${formik.errors.lastName && formik.touched.lastName?"is-invalid":null}`}  
                                    value={formik.values.lastName} 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                    {formik.errors.lastName && formik.touched.lastName?(<small className="text-danger">{formik.errors.lastName}</small>):null}
                            </div> <div className="form-group"><label>email</label>
                                <input type="email" name='email' className={`form-control ${formik.errors.email && formik.touched.email?"is-invalid":null}`}  value={formik.values.email} onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}/>
                                {formik.errors.email && formik.touched.email?(<small className="text-danger">{formik.errors.email}</small>):null}
                            </div>
                            <div className="form-group">
                                <label>number</label>
                                <input type="number" name='mobile' className={`form-control ${formik.errors.mobile  && formik.touched.mobile?"is-invalid":null}`}  value={formik.values.mobile} onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}/> {formik.errors.mobile && formik.touched.mobile?(<small className="text-danger">{formik.errors.mobile}</small>):null}
                               
                            </div>
                            <div className="form-group"><label>password</label>
                                <input type="password" name='password' className={`form-control ${formik.errors.password && formik.touched.password?"is-invalid":null}`}  value={formik.values.password} onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}/>
                                {formik.errors.password && formik.touched.password?(<small className="text-danger">{formik.errors.password}</small>):null}
                            </div>

                            <input type="submit" value="Register" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index