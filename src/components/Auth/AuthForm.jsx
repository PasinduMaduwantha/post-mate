
import Button from '../Buttons/Buttons';
import Input from '../Inputs/input';
import { useCallback, useState, useRef, useEffect } from 'react';
import { useForm , FieldValues, SubmitHandler} from 'react-hook-form';
import {Navigate, useNavigate} from 'react-router-dom';
import { toast } from "react-hot-toast";

import './AuthForm.css'
import axios from '../../API/axios';

const AuthForm = () => {
    const navigate = useNavigate()

    const [variant, setVariant] = useState('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVarient = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    },[variant])

    const {
        register,
        handleSubmit,
        formState: { errors },
    }=useForm({
        defaultValues: { 
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
        }
    })

    const validate= (data) => {
        const errors = {};
    
        if (data.password !== data.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
    
        return errors;
    }

    const onSubmit = (data) => {
        const { confirmpassword, ...others } = data
    
        console.log(data)
        setIsLoading(true);
        validate(data);
        if (variant === 'REGISTER') {

          axios.post('/api/auth/register', others)
          .then(response => {
              if (response.status === 201) {
                  toast.success('Registration successful!');
                  navigateToRegister() // Redirect to login page after successful registration
                } else {
                    toast.error('Registration failed. Please check your details.');
                }
            })
            .catch(error => {
            console.error('Error during registration:', error);
            toast.error('Something went wrong during registration.');
        })
        .finally(() => setIsLoading(false))
    }
    
    if (variant === 'LOGIN') {
        const {email, ...withoutEmail} = others
        axios.post('/api/auth/login', withoutEmail)
        .then(response => {
                console.log(response)
            if (response.status === 200) {
                toast.success('Login successful!');
                if (response.data.isAdmin) {
                    navigateToAdminDashboard()
                } else {
                    navigateToUserDashboard()
                }
            } else {
                toast.error('Invalid credentials. Please try again.');
            }
            })
            .catch(error => {
            console.error('Error during login:', error);
            toast.error('Something went wrong during login.');
            })
            .finally(() => setIsLoading(false));
            
        }
      }


    const navigateToRegister = ()=> {
        navigate('/register')
    }

    const navigateToUserDashboard = ()=> {
        navigate('/userhome')
    }

    const navigateToAdminDashboard = ()=> {
        navigate('/admindashboard')
    }




    return ( 
        <div className="auth-background" >
            <div
            className="custom-card">
                <form style={{"margin-top": "1.5rem"}}
                onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                    <>
                        <h2 className="home-title">
                        Creat an Account
                        </h2>
                    
                        <Input 
                        id='username'
                        name='username'
                        type='text'
                        label='Username'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                        placeholder='Enter Username'/>
                        <Input 
                        id='email'
                        name='email'
                        type='email'
                        label='Email Address'
                        register={register}
                        errors={errors}
                        placeholder='Enter Email Address'
                        disabled={isLoading}
                        />
                        <Input 
                        id='createpassword'
                        type='password'
                        label='Password'
                        name='password'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                        placeholder='Enter Password'
                        />
                        <Input 
                        id='confirmpassword'
                        type='password'
                        name='confirmpassword'
                        label='Confirm Password'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                        placeholder='Confirm Password'
                        />
                    </>
                    ) }
                    {variant === 'LOGIN' && (
                        <>
                        <h2 className="home-title">
                            Sign In to your Account
                            </h2>
                            <Input 
                        id='name'
                        name='username'
                        type='text'
                        label='Username'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                        placeholder='Username'/>
                        <Input 
                        id='password'
                        type='password'
                        name='password'
                        label='Password'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                        placeholder='Password'
                    />
                            </>
                    )}
                    <div>
                        <Button
                        disabled={isLoading}
                        fullWidth
                        type='submit'
                        
                        >
                            {variant === 'LOGIN' ? 'Sign In' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="custom-lower">
                    <div>
                        {variant === 'LOGIN' ? "Don't have an account?" : 'Already have an account?'}
                    </div>
                    <div
                    onClick={toggleVarient}
                    style={{'text-decoration': 'underline','cursor': 'pointer'}}
                    >
                        {variant === 'LOGIN' ? 'Create an account' : 'Sign In'}
                    </div>
                </div>
            </div>   
        </div>
     );
}
 
export default AuthForm;