import React from 'react'
import { Title } from '../../components/UI'

import UserLayout from '../../hoc/Layout/UserLayout'


const AccountsPage = ({ match }) => {
    return (
        <UserLayout>
            <Title>
                Accounts
            </Title>
        </UserLayout>
    )
}

AccountsPage.routeName = '/accounts'

export default AccountsPage