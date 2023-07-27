import React from 'react'
import Button from '../Button/Button'

import './Title.scss'


const Title = ({ children, component: Component = 'h1', button }) => {
    return (
        <div className="title">
            <Component>
                {children}
            </Component>
            {button &&
                <Button {...button} />
            }
        </div>
    )
}

export default Title