import React from 'react'

import UserLayout from '../hoc/Layout/UserLayout'
import { Title } from '../components/UI'


const Dashboard = () => {
    return (
        <UserLayout>
            <Title>
                Dashboard
            </Title>
        </UserLayout>
    )
}

Dashboard.routeName = '/dashboard'

export default Dashboard