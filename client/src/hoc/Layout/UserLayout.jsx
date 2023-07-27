import React, { useState } from 'react'

import UserMenu from '../../components/Navigation/UserMenu/UserMenu'
import { fetchData } from '../../fetchData'
import Loading from '../../components/Loading/Loading'

import './UserLayout.scss'
import Brand from '../../components/Navigation/Brand/Brand'


const UserLayout = ({ children, ...props }) => {
    const [loaded, setLoaded] = useState(localStorage.getItem('loaded'))
    if (!loaded) {
        fetchData()
            .then(() => {
                setLoaded(true)
                localStorage.setItem('loaded', true)
            })
    }

    return (
        <div className="user-layout">
            <aside className="user-layout-sidebar">
                <Brand />
                <UserMenu className="user-layout-menu" />
            </aside>
            <main className="user-layout-main">
                {loaded ?
                    children
                    :
                    <Loading />
                }
            </main>
        </div>
    );
}

export default UserLayout