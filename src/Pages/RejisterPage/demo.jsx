import React from 'react'
import styles from "./styles.module.css"
import {useFormik} from "formik"
import * as Yup from "yup"
const Demo = () => {
    const initialValues={
        name:"",
        email:""
    }
    const onSubmit=(values)=>{
        console.log(values)
    }
    const validationSchema=Yup.object({
        name:Yup.string()
        .required("name is required"),
        email:Yup.string()
        .email("invalid email format")
        .required("email is required")
    })
    
    const formik= useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        
    })

  return (
    <div className="container">
        <div className="row"><div className="col-md-3"></div>
        <div className="col-md-6">
            <div className={styles.wrapper}>
                <h2>Rejister</h2>
                <h1>{formik.values.name}</h1>
                <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>name</label>
                    <input type="text" className={`form-control ${formik.errors.name && formik.touched.name?"is-invalid":null}`}  name="name" value={formik.values.name} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name?<small className='text-danger'>{formik.errors.name}</small>:null}
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input type="email" name="email"  className={`form-control ${formik.errors.email && formik.touched.email?"is-invalid":""}`} 
                    value={formik.values.email}
                    onChange={formik.handleChange
                    } onBlur={formik.handleBlur}/>{formik.errors.email && formik.touched.email?<small className='text-danger'>{formik.errors.email}</small>:null}
                </div>
                <input type="submit" value="register" className='btn btn-primary'/>
                </form></div></div></div>
    </div>
  )
}

export default Demo