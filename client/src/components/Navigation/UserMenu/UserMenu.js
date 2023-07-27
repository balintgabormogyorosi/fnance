import React from 'react'
import { NavLink } from 'react-router-dom'

import AccountsPage from '../../../containers/AccountsPage'
import Dashboard from '../../../containers/Dashboard'
import TransactionsPage from '../../../containers/TransactionsPage'
import CategoriesPage from '../../../containers/CategoriesPage'
import UnitsPage from '../../../containers/UnitsPage'

import './UserMenu.scss'


const UserMenu = ({ className, }) => {
    return (
        <nav className={["user-menu", className].filter(Boolean).join(' ')}>
            <NavLink className="user-menu-item" to={AccountsPage.routeName}>
                Accounts
            </NavLink>
            <NavLink className="user-menu-item" to={Dashboard.routeName}>
                Dashboard
            </NavLink>
            <NavLink className="user-menu-item" to={TransactionsPage.routeName}>
                Transactions
            </NavLink>
            <NavLink className="user-menu-item" to={CategoriesPage.routeName}>
                Categories
            </NavLink>
            <NavLink className="user-menu-item" to={UnitsPage.routeName}>
                Units
            </NavLink>
            <NavLink className="user-menu-item" to={'/settings'}>
                Settings
            </NavLink>
        </nav>
    )
}

export default UserMenu