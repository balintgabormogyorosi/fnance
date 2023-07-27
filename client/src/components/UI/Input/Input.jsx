import React from 'react'

import './Input.scss'


const Input = ({ id, label, onChange, placeholder, type, value, }) => {
    const handleOnChange = (event) => {
        onChange(id, event.target.value)
    }

    return (
        <div className="input">
            <input
                className="input-control"
                onChange={handleOnChange}
                type={type}
                value={value}
            />
            {!value ?
                <span className="input-label">{label}</span>
                :
                null
            }
        </div>
    )
}

export default Input