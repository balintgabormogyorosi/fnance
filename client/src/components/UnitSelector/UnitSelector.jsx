import React, { useState } from 'react'
import { Modal } from '../UI'
import Unit from '../Unit/Unit/Unit'

import './UnitSelector.scss'


const UnitSelector = ({ id, units, onChange, name, value, idPrefix }) => {
    const [open, setOpen] = useState(false)

    const selectUnit = (e) => {
        setOpen(false)
        onChange(id, e.target.value)
    }

    const selectedUnit = units.find(i => i.value === value)

    console.log(selectedUnit)

    return (
        <div className="unit-selector">
            <Unit
                unit={selectedUnit}
                className="selected-unit" onClick={() => setOpen(true)}
            />
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div>
                    {units.map(unit => (
                        <label key={unit.value}>
                            <input
                                type="radio"
                                name={name}
                                id={`${idPrefix}_${unit.name}`}
                                value={unit.value}
                                onChange={selectUnit}
                                style={{ position: 'absolute', opacity: 0, }}
                            />
                            <Unit
                                unit={unit}
                            />
                        </label>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default UnitSelector