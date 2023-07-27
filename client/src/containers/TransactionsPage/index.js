import React from 'react'
import { Switch } from 'react-router-dom'

import AuthenticatedRoute from '../../hoc/Routes/AuthenticatedRoute'
import UserLayout from '../../hoc/Layout/UserLayout'
import TransactionListPage from './TransactionListPage'
import TransactionFormPage from './TransactionFormPage'
import TransactionDetailPage from './TransactionDetailPage'
import MonthSelector from '../../components/MonthSelector/MonthSelector'
import TransactionEditPage from './TransactionEditPage'


const TransactionsPage = ({ match }) => {
    return (
        <UserLayout>
            {/* <MonthSelector /> */}
            <Switch>
                <AuthenticatedRoute path={`${match.url}${TransactionListPage.routeName}`} component={TransactionListPage} exact />
                <AuthenticatedRoute path={`${match.url}${TransactionFormPage.routeName}`} component={TransactionFormPage} />
                <AuthenticatedRoute path={`${match.url}${TransactionEditPage.routeName}`} component={TransactionEditPage} />
                <AuthenticatedRoute path={`${match.url}${TransactionDetailPage.routeName}`} component={TransactionDetailPage} />
            </Switch>
        </UserLayout>
    )
}

TransactionsPage.routeName = '/transactions'

export default TransactionsPage