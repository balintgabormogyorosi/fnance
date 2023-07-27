import React, { useState } from 'react'

import { Icon, Modal } from '../UI'

import './IconSelector.scss'


const IconSelector = ({ icons, id, color, onChange, name, value, idPrefix }) => {
    const [open, setOpen] = useState(false)

    const selectIcon = (value) => {
        setOpen(false)
        onChange(id, value)
    }

    const selectedIcon = icons.find(i => i.value === value)

    console.log(selectedIcon)

    return (
        <div className="icon-selector">
            <div className="icon selected-icon" style={{ color: color || (selectedIcon && selectedIcon.color) }} onClick={() => setOpen(true)}>
                {selectedIcon ?
                    <React.Fragment>
                        <Icon
                            className="icon-img"
                            name={selectedIcon.name}
                        />
                        {selectedIcon.label && <span className="icon-name">{selectedIcon.label}</span>}
                    </React.Fragment>
                    :
                    <React.Fragment>
                        No Icon selected
                    </React.Fragment>
                }
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div >
                    {icons.map(icon => (
                        <div key={icon.name}>
                            <label className="icon" style={{ color: color || icon.color }}>
                                <input
                                    type="radio"
                                    name={name}
                                    id={`${idPrefix}_${icon.name}`}
                                    value={icon.value}
                                    onChange={() => selectIcon(icon.value)}
                                    style={{ position: 'absolute', opacity: 0, }}
                                />
                                <Icon
                                    className="icon-img"
                                    name={icon.name}
                                />
                                {icon.label && <span className="icon-name">{icon.label}</span>}
                            </label>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default IconSelector