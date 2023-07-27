import React from 'react'
import { useHistory } from 'react-router-dom'

import CategoriesPage from '.'
import CategoryForm from '../../components/Category/CategoryForm/CategoryForm'


const CategoryFormPage = () => {
    const history = useHistory()

    return (
        <>
            <CategoryForm
                onReady={() => history.push(`${CategoriesPage.routeName}`)}
            />
        </>
    )
}

CategoryFormPage.routeName = '/new'

export default CategoryFormPage