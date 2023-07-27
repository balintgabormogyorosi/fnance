import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import CategoriesPage from '.'
import CategoriesFormPage from './CategoryFormPage'
import CategoryList from '../../components/Category/CategoryList/CategoryList'
import { Title } from '../../components/UI'


const CategoryListPageFC = () => {
    const categories = useSelector(state => state.categories)
    const history = useHistory()

    return (
        <>
            <Title
                component="h2"
                button={{ children: 'New Category', onClick: () => history.push(`${CategoriesPage.routeName}${CategoriesFormPage.routeName}`), color: 'primary', variant: 'contained' }}
            >
                Categories
            </Title>
            <div>
                <CategoryList categories={categories.list} />
            </div>
        </>
    )
}

CategoryListPageFC.routeName = '/'

export default CategoryListPageFC