import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import UnitsPage from '.'
import UnitFormPage from './UnitFormPage'
import { Title } from '../../components/UI'
import UnitList from '../../components/Unit/UnitList/UnitList'


const UnitListPage = () => {
    const history = useHistory()
    const units = useSelector(state => state.units)

    return (
        <>
            <Title
                component="h2"
                button={{ children: 'New Unit', onClick: () => history.push(`${UnitsPage.routeName}${UnitFormPage.routeName}`), color: 'primary', variant: 'contained' }}
            >
                Units
            </Title>
            <div>
                <UnitList units={units.list} />
            </div>
        </>
    )
}

UnitListPage.routeName = '/'

export default UnitListPage