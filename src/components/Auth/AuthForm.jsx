// 'use client';
import Button from '../Buttons/Buttons';
import Input from '../Inputs/input';
import { useCallback, useState } from 'react';
import { useForm , FieldValues, SubmitHandler} from 'react-hook-form';
// import AuthSocialButton from './AuthSocialButton';
// import {BsGithub, BsGoogle} from 'react-icons/bs'
import './AuthForm.css'


const AuthForm = () => {
    const [Varient, setVarient] = useState('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVarient = useCallback(() => {
        if (Varient === 'LOGIN') {
            setVarient('REGISTER')
        } else {
            setVarient('LOGIN')
        }
    },[Varient])

    const {
        register,
        handleSubmit,
        formState: { errors },
    }=useForm({
        defaultValues: { 
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit= (data) =>{
        setIsLoading(true)

        if (Varient === 'REGISTER') {
            // Axios Register
        }
        if (Varient === 'LOGIN') {
            // NextAuth Signin
        }
    }

    return ( 
        <div className="auth-background" >
            <div
            className="custom-card">
                <form style={{"margin-top": "1.5rem"}}
                onSubmit={(onSubmit)}
                >
                    {Varient === 'REGISTER' && (
                    <Input 
                        id='name'
                        type='text'
                        label='Name'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    )}
                    <Input 
                        id='email'
                        type='email'
                        label='Email'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input 
                        id='password'
                        type='password'
                        label='Password'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div>
                        <Button
                        disabled={isLoading}
                        fullWidth
                        type='submit'
                        >
                            {Varient === 'LOGIN' ? 'Sign In' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="custom-lower">
                    <div>
                        {Varient === 'LOGIN' ? "New to Messenger?" : 'Already have an account?'}
                    </div>
                    <div
                    onClick={toggleVarient}
                    style={{'text-decoration': 'underline','cursor': 'pointer'}}
                    >
                        {Varient === 'LOGIN' ? 'Create an account' : 'Sign In'}
                    </div>
                </div>
            </div>   
        </div>
     );
}
 
export default AuthForm;