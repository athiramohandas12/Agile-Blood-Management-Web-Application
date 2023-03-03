import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        Gender: "",
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        const { name, email, date, password } = inpval;
    }
    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-6 p-6" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control type="phone" name='phone' onChange={getdata} placeholder="Phone" />
                                                  </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicGender">

                                   <Form.Control type="gender" name='gender' onChange={getdata} placeholder="Gender" />
                                                  </Form.Group>
                                                 
               
                                                  

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicAge">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicConfirm_Password">

<Form.Control type="cpassword" name='cpassword' onChange={getdata} placeholder="Confirm password" />
               </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(23, 126, 235)" }} type="submit">
                               Create Account
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home