import React from 'react'
import { useHistory } from 'react-router-dom'

import CategoriesPage from '../../../containers/CategoriesPage'
import Category from '../Category/Category'


const CategoryList = ({ categories, }) => {
    const history = useHistory()

    return (
        <div>
            {categories.map(category => (
                <Category
                    key={category._id}
                    category={category}
                    onClick={() => history.push(`${CategoriesPage.routeName}/${category._id}`)}
                />
            ))}
        </div>
    )
}

export default CategoryList