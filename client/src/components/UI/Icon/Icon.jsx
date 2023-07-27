import React from 'react'
import * as Icons from 'react-ionicons'

const Icon = ({ className, color, name, size = 36 }) => {
    const Component = Icons[name]
    if (!Component) return null
    return (
        <div className="icon-wrapper">
            <Component
                color={color}
                width={`${size}px`}
                height={`${size}px`}
            />
        </div>
    )
}

export default Icon