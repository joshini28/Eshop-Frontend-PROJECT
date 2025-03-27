import React,{useEffect, useState} from 'react'
import styles from "./styles.module.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Formik,Form,ErrorMessage,Field } from 'formik'
import * as Yup from "yup"
const Index = () => {
    const navigate = useNavigate();
    
    const [requstResponse, setRequestRespose] =useState({
        message: "",
        alertClassName: "",
      });
    const initialValues={
        email:"",
        password:""
    }
    const onsubmit=(values)=>{
        
        const Values={
            ...values,
            usernameOrEmail:values.email
        };
         axios
         .post("http://localhost:8080/api/auth/login",Values)
         .then(
            (response)=>{
                setRequestRespose({
                    message: "user login successfully",
                    alertClassName: "alert alert-success",
                });
                localStorage.setItem("token",response.data);
                navigate("/")
            },
            (error)=>{
                console.log(error);
          setRequestRespose({
            message: 'Invalid email or password',
            alertClassName: "alert alert-danger",
          });
            })
            .catch((error)=>console.log(error));
         
        console.log(values)
    }
    useEffect(()=>{
            if(localStorage.getItem("token")){
                navigate("/");
            }
    },[])
    const validationSchema=Yup.object({
        email: Yup.string().required('Please enter email')
        .email("PLease enter valid email"),
        password: Yup.string()
        .required("Password is requred")
        .min(6,"password must be atleast 6 characters")
    })
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div><div className="col-md-6">
                <div className={styles.wrapper}>
                <div class={requstResponse.alertClassName} role="alert">
              {requstResponse.message}
            </div>
                    <h2>Login</h2>
                    <hr />
                    <Formik
                    initialValues={initialValues}
                    onSubmit={onsubmit}
                    validationSchema={validationSchema}
                    validateOnMount
                    >
                        {(formik)=>{
                            return(
                                <Form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <Field type="email" name="email" className={formik.errors.email&&formik.touched.email?"form-control is-invalid":"form-control"}/>
                            <ErrorMessage name="email" component="small" className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <Field type="password" name="password" className={formik.errors.password&&formik.touched.password?"form-control is-invalid":"form-control"} />
                            <ErrorMessage name="password" component="small" className='text-danger'/>
                        </div>
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index