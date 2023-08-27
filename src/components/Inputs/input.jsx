'use client'

import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from "react-hook-form";

import './input.css'

     
const Input = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled,
    placeholder,
    name,
}) => {
    return (  
        <div>
            <label
            htmlFor={id}
            className="custom-text" >
                {label}
            </label>
            <div style={{'marginTop':'0.5rem'}}>
                <input
                id={id}
                type={type}
                name={name}
                autoComplete={type}
                disabled={disabled}
                placeholder={placeholder}
                {...register(name,id, { required })}
                className={clsx(
                    `custom-form-input`,
                    errors[id] && 'focus:ring-rose-500',
                    disabled && 'opacity-50 cursor-default'
                )}   
            >

                </input>

            </div>
        </div>
    );
}
 
export default Input;