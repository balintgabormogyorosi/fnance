import React from 'react'

import Value from '../Value/Value'


const BalanceBlock = ({ income, expense, title }) => {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                <span>Income</span>
                <Value
                    value={income}
                />
            </div>
            <div>
                <span>Expense</span>
                <Value
                    value={expense}
                />
            </div>
            <div>
                <span>Balance</span>
                <Value
                    value={income + expense}
                />
            </div>
        </div>
    )
}

export default BalanceBlock