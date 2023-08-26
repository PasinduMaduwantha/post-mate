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
    disabled
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
                autoComplete={type}
                disabled={disabled}
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