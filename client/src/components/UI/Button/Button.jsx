import React from 'react'

import './Button.scss'


const Button = ({ children, className, color = 'primary', onClick, type = 'button', }) => {
    return (
        <button className={[`button button-${color}`, className].filter(Boolean).join(' ')} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button