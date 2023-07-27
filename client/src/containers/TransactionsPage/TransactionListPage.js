import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import TransactionsPage from '.'
import TransactionFormPage from './TransactionFormPage'
import { Title } from '../../components/UI'
import TransactionList from '../../components/Transaction/TransactionList/TransactionList'


const TransactionListPage = () => {
    const history = useHistory()
    const date = useSelector(state => state.date)
    const transactions = useSelector(state => state.transactions)

    console.log(transactions)

    return (
        <>
            <Title
                component="h2"
                button={{ children: 'New Transaction', onClick: () => history.push(`${TransactionsPage.routeName}${TransactionFormPage.routeName}`), color: 'primary', variant: 'contained', }}
            >
                Transactions
            </Title>
            <TransactionList transactions={transactions.list || []} />
        </>
    )
}

TransactionListPage.routeName = '/'

export default TransactionListPage