import React from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

import TransactionsPage from '../../../containers/TransactionsPage'
import Transaction from '../../Transaction/Transaction/Transaction'
import Value from '../../Value/Value'


const TransactionList = ({ transactions, }) => {
    const history = useHistory()

    if (!transactions || transactions.length === 0) {
        return (
            <div>
                <p>
                    No transactions have been added yet!
                </p>
            </div>
        )
    }

    const TransactionDate = ({ date, value }) => {
        return (
            <div>
                <strong>
                    {moment(date).format('MMMM DD, YYYY')}
                </strong>
                <Value value={value} />
            </div>
        )
    }

    const createDateBlock = (performedOn, value, tempList, list) => {
        list.push(
            <TransactionDate
                key={performedOn}
                date={performedOn}
                value={value}
            />
        )
        list.push(...tempList)
        return list
    }

    let performedOn
    let tempValue
    let tempList = []
    let list = []

    for (let transaction of transactions.sort((a, b) => moment(a.performedOn).isBefore(b.performedOn) ? 1 : -1)) {
        if (transaction.performedOn !== performedOn) {
            if (performedOn) {
                list = createDateBlock(performedOn, tempValue, tempList, list)
            }
            performedOn = transaction.performedOn
            tempList = []
            tempValue = 0
        }
        tempList.push(
            <Transaction
                key={transaction._id}
                transaction={transaction}
                onClick={() => history.push(`${TransactionsPage.routeName}/${transaction._id}`)}
            />
        )
        tempValue += transaction.value
    }
    // Add the last date block
    createDateBlock(performedOn, tempValue, tempList, list)

    return (
        <div>
            <div>
                {list}
            </div>
        </div>
    )
}

export default TransactionList