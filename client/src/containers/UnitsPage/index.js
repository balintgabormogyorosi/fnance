import React from 'react'
import { Switch, useRouteMatch } from 'react-router-dom'

import AuthenticatedRoute from '../../hoc/Routes/AuthenticatedRoute'
import UnitListPage from './UnitListPage'
import UnitFormPage from './UnitFormPage'
import UserLayout from '../../hoc/Layout/UserLayout'


const UnitsPage = () => {
    const match = useRouteMatch()

    return (
        <UserLayout>
            <Switch>
                <AuthenticatedRoute path={`${match.url}${UnitListPage.routeName}`} component={UnitListPage} exact />
                <AuthenticatedRoute path={`${match.url}${UnitFormPage.routeName}`} component={UnitFormPage} />
            </Switch>
        </UserLayout>
    )
}

UnitsPage.routeName = '/units'

export default UnitsPage