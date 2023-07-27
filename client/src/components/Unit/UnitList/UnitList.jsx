import React from 'react'
import { useHistory } from 'react-router-dom'

import UnitsPage from '../../../containers/UnitsPage'
import Unit from '../Unit/Unit'


const UnitList = ({ units }) => {
    const history = useHistory()

    return (
        <div>
            {units.map(unit => (
                <Unit
                    key={unit._id}
                    unit={unit}
                    onClick={() => history.push(`${UnitsPage.routeName}/${unit._id}`)}
                />
            ))}
        </div>
    )
}

export default UnitList