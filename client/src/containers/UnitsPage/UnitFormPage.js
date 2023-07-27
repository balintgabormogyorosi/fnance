import React from 'react'
import { useHistory } from 'react-router-dom'

import UnitsPage from '.'
import UnitForm from '../../components/Unit/UnitForm/UnitForm'


const UnitFormPage = () => {
    const history = useHistory()

    return (
        <>
            <UnitForm 
                onReady={() => history.push(`${UnitsPage.routeName}`)}
            />
        </>
    )
}

UnitFormPage.routeName = '/new'

export default UnitFormPage