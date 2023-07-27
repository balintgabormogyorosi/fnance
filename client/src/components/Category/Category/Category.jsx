import React from 'react'

import { Icon } from '../../UI'


import './Category.scss'


const Category = ({ category, onClick }) => {
    return (
        <div className="category" style={{ color: category.color }} onClick={onClick}>
            <Icon
                className="category-icon"
                color={category.color}
                name={category.icon}
            />
            <div className="category-name">{category.name}</div>
        </div>
    )
}

export default Category