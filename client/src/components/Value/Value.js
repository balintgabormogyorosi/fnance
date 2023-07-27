import React from 'react'


const Value = ({ value }) => {
    return (
        <div style={{
            flex: '0 1 auto',
            fontFamily: 'Roboto Mono, monospace',
            fontWeight: 700,
            textAlign: 'right',
        }}>
            <span style={{ color: value >= 0 ? 'darkgreen' : 'darkred' }}>
                {value}
            </span>
        </div>
    )
}

export default Value