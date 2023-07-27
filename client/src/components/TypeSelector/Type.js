import React from 'react'


// const useStyles = makeStyles(theme => ({
//     type: {
//         flex: 1,
//         cursor: 'pointer',
//     },
//     typeInput: {
//         position: 'absolute',
//         opacity: 0,
//         pointerEvents: 'none',
//     },
//     typeLabel: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignContent: 'center',
//         alignItems: 'center',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         padding: theme.spacing(1),
//         cursor: 'pointer',
//     },
//     selected: {
//         backgroundColor: theme.palette.primary.main,
//         color: "white",
//     },
// }))

const Type = ({ id, value, label, name, selectedValue, onChange, icon: Icon }) => {
    return (
        <div>
            <div onClick={() => onChange(id, value)}>
                <p>
                    {label}
                </p>
            </div>
        </div>
    )
}

export default Type