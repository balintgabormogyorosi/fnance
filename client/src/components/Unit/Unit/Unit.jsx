import React from 'react'

import './Unit.scss'


const Unit = ({ onClick, unit }) => {
    const handleOnClick = () => {
        if (unit) {
            onClick(unit._id)
        } else {
            onClick()
        }
    }

    return (
        <div
            className="unit"
            onClick={handleOnClick}
        >
            <span>
                {unit ?
                    unit.name
                    :
                    'No unit selected'
                }
            </span>
        </div>
    )
}

export default Unit