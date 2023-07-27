import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import TransactionDetail from '../../components/Transaction/TransactionDetail/TransactionDetail'


const TransactionDetailPage = () => {
    const match = useRouteMatch()
    const transactions = useSelector(state => state.transactions)
    const [transaction, setTransaction] = useState(false)

    useEffect(() => {
        const { transaction } = match.params
        setTransaction(transactions.list.find(t => t._id === transaction))
    }, [match, transactions.list])

    return (
        <>
            <TransactionDetail
                transaction={transaction}
            />
        </>
    )
}

TransactionDetailPage.routeName = '/:transaction'


export default TransactionDetailPage