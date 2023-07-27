import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'

import TransactionsPage from '.'
import TransactionForm from '../../components/Transaction/TransactionForm/TransactionForm'


const TransactionFormPage = () => {
    const match = useRouteMatch()
    const history = useHistory()
    const transactions = useSelector(state => state.transactions)
    const [transaction, setTransaction] = useState(null)

    useEffect(() => {
        const { transaction } = match.params
        setTransaction(transactions.list.find(t => t._id === transaction))
    }, [match, transactions])

    return (
        <>
            <TransactionForm
                onReady={(transaction) => history.push(`${TransactionsPage.routeName}/${transaction._id}`)}
                transactionEdited={transaction}
            />
        </>
    )
}

TransactionFormPage.routeName = '/:transaction/edit'

export default TransactionFormPage