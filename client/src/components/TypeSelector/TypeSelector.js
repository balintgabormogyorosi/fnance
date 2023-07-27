import React from 'react'
import Type from './Type'


// const useStyles = makeStyles(theme => ({
//     typeSelector: {
//         display: 'flex',
//         flexFlow: 'row nowrap',
//         width: '100%',
//         border: '1px solid transparent',
//         borderColor: theme.palette.primary.main,
//         borderRadius: theme.spacing(0.5),
//         boxShadow: theme.shadows[2],
//         color: theme.palette.primary.main,
//     },
// }))

const TypeSelector = ({ id, value, onChange, name, idPrefix }) => {
    return (
        <div>
            <Type
                id={id}
                value="INCOME"
                label="Income"
                name={name}
                selectedValue={value}
                onChange={onChange}
            />
            <Type
                id={id}
                value="EXPENSE"
                label="Expense"
                name={name}
                selectedValue={value}
                onChange={onChange}
            />
        </div>
    )
}

export default TypeSelector