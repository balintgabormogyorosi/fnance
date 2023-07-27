import React from 'react'
import { Switch } from 'react-router-dom'

import AuthenticatedRoute from '../../hoc/Routes/AuthenticatedRoute'
import CategoryListPage from './CategoryListPage'
import CategoryFormPage from './CategoryFormPage'
import UserLayout from '../../hoc/Layout/UserLayout'
import CategoryDetailPage from './CategoryDetailPage'


const CategoriesPage = ({ match }) => {
    return (
        <UserLayout>
            <Switch>
                <AuthenticatedRoute path={`${match.url}${CategoryListPage.routeName}`} component={CategoryListPage} exact />
                <AuthenticatedRoute path={`${match.url}${CategoryFormPage.routeName}`} component={CategoryFormPage} />
                <AuthenticatedRoute path={`${match.url}${CategoryDetailPage.routeName}`} component={CategoryDetailPage} />
            </Switch>
        </UserLayout>
    )
}

CategoriesPage.routeName = '/categories'

export default CategoriesPage