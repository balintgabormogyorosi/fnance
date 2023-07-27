import React from 'react'

import './Modal.scss'


const Modal = ({ children, onClose, open }) => {
    if (!open) return null
    return (
        <div className="modal">
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}

export default Modal