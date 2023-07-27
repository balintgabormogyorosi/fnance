import React from 'react'

import './ColorSelector.scss'


const ColorSelector = ({ id, name, value, onChange }) => {
    const handleOnColorChange = (event) => {
        onChange(id, event.target.value)
    }

    return (
        <div className="color-selector">
            <label htmlFor={id}>
                <div
                    className="color-box"
                    style={{ backgroundColor: value }}
                />
                <input
                    type="color"
                    className="color-input"
                    id={id}
                    name={name}
                    value={value}
                    onChange={handleOnColorChange}
                />
            </label>
        </div>
    )
}

export default ColorSelector