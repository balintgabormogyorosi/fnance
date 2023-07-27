import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import BalanceBlock from './BalanceBlock'
import { previousMonth, nextMonth } from '../../redux/actions/dateActions'


const MonthSelector = () => {
    const transactions = useSelector(state => state.transactions)
    const date = useSelector(state => state.date)
    const dispatch = useDispatch()

    const monthlyTransactions = transactions.dictionary[`${date.year}-${date.month}`] || []
    const allTransactions = Object.values(transactions.dictionary).reduce((all, month) => ([...all, ...month]), [])

    return (
        <div>
            <div onClick={() => dispatch(previousMonth())}>
                &lt;
            </div>
            <div>
                <BalanceBlock
                    title={moment(`${date.year}-${date.month}`).format("MMMM, YYYY")}
                    income={
                        monthlyTransactions.reduce((sum, t) => {
                            if (t.value > 0) return sum + t.value
                            else return sum
                        }, 0)
                    }
                    expense={
                        monthlyTransactions.reduce((sum, t) => {
                            if (t.value < 0) return sum + t.value
                            else return sum
                        }, 0)
                    }
                />
                <BalanceBlock
                    title="All Time"
                    income={
                        allTransactions.reduce((sum, t) => {
                            if (t.value > 0) return sum + t.value
                            else return sum
                        }, 0)
                    }
                    expense={
                        allTransactions.reduce((sum, t) => {
                            if (t.value < 0) return sum + t.value
                            else return sum
                        }, 0)
                    }
                />
            </div>
            <div onClick={() => dispatch(nextMonth())}>
                &gt;
            </div>
        </div>
    )
}

export default MonthSelector