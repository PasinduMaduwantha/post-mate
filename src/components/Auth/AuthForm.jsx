// 'use client';
// import Button from '@/app/components/Button';
// import Input from '@/app/components/Inputs/Input';
// import { useCallback, useState } from 'react';
// import { useForm , FieldValues, SubmitHandler} from 'react-hook-form';
// import AuthSocialButton from './AuthSocialButton';
// import {BsGithub, BsGoogle} from 'react-icons/bs'
import './AuthForm.css'


const AuthForm = () => {
    // const [Varient, setVarient] = useState<Varient>('LOGIN')
    // const [isLoading, setIsLoading] = useState(false)

    // const toggleVarient = useCallback(() => {
    //     if (Varient === 'LOGIN') {
    //         setVarient('REGISTER')
    //     } else {
    //         setVarient('LOGIN')
    //     }
    // },[Varient])

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // }=useForm<FieldValues>({
    //     defaultValues: { 
    //         name: '',
    //         email: '',
    //         password: '',
    //     }
    // })

    // const onSubmit: SubmitHandler<FieldValues> = (data) =>{
    //     setIsLoading(true)

    //     if (Varient === 'REGISTER') {
    //         // Axios Register
    //     }
    //     if (Varient === 'LOGIN') {
    //         // NextAuth Signin
    //     }
    // }

    // const socialAction = (action:string) => {
    //     setIsLoading(true)

    //     // NextAuth Social Signin
    // }

    return ( 
        <div className="auth-background" >
            <div
            className="
             bg-white
             px-4
             py-8
             sm:rounded-lg
                sm:px-10
            "
            >
                {/* <form
                className='space-y-6'
                onSubmit={handleSubmit(onSubmit)}
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
                <div className='mt-6'>
                    <div className='relative'>
                        <div
                            className='
                            absolute 
                            inset-0 
                            flex 
                            items-center'
                        > 
                            <div className='
                            w-full border-t 
                            border-gray-300'
                            />
                        </div>
                        <div
                            className='relative flex justify-center text-sm'>
                            <span className='px-2 bg-white text-gray-500'>
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className='mt-6 flex gap-2'>
                           <AuthSocialButton
                           icon={BsGithub}
                            onClick={() => socialAction('github')}
                           /> 
                           <AuthSocialButton
                           icon={BsGoogle}
                            onClick={() => socialAction('google')}
                           /> 
                    </div>
                </div>
                <div className='
                flex
                justify-center
                text-sm
                text-gray-500
                px-2
                gap-2
                mt-6'>
                    <div>
                        {Varient === 'LOGIN' ? "New to Messenger?" : 'Already have an account?'}
                    </div>
                    <div
                    onClick={toggleVarient}
                    className='underline cursor-pointer'
                    >
                        {Varient === 'LOGIN' ? 'Create an account' : 'Sign In'}
                    </div>
                </div> */}
            </div>   
        </div>
     );
}
 
export default AuthForm;