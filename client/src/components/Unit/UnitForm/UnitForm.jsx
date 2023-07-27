import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { saveUnit } from '../../../redux/actions/unitsActions'
import { Button, Input, Title } from '../../UI'


const UnitForm = ({ onReady }) => {
    const [unit, setUnit] = useState({ name: '', })
    const dispatch = useDispatch()

    const handleOnInputChange = (id, value, isValid) => {
        const updatedUnit = Object.assign(Object.create(Object.getPrototypeOf(unit)), unit)
        switch (id) {
            case 'name':
                updatedUnit.name = value
                break
            default:
                break
        }
        setUnit(updatedUnit)
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        try {
            const resUnit = await dispatch(saveUnit(unit))
            if (onReady && resUnit) {
                onReady(resUnit)
            }
        } catch (errors) {
            console.log(errors)
        }
    }

    return (
        <form>
            <div className="unit-form">
                <Title>
                    Unit Form
                </Title>
                <div className="unit-form-inputs">
                    <Input
                        id='name'
                        name='name'
                        onChange={handleOnInputChange}
                        label='Name'
                        value={unit.name}
                    />
                </div>
                <div>
                    <Button type="submit" onClick={handleOnSubmit}>
                        Save
                    </Button>
                    <Button type="reset">
                        Cancel
                    </Button>
                </div>
            </div>
        </form>
    )
}

UnitForm.routeName = '/new'

export default UnitForm