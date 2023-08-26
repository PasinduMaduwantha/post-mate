'use client';

import './Buttons.css'
import clsx from "clsx";

const Button= ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
}) => {
    return (  
        <div>
            <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(
                `custom-button`,
                disabled && "disabled",
                fullWidth && "full-width",
                secondary ? "text-gray-900 ": "text-white",
                danger && 'danger-button-styles',
                !secondary && !danger && 'primary-button-styles'
                )}
            >
                {children}
            </button>
        </div>
    );
}
 
export default Button;