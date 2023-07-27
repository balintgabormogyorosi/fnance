import axios from 'axios'
import moment from 'moment'

import { setErrors } from './errorsAction'
import { DELETE_TRANSACTION, INSERT_TRANSACTION, SET_TRANSACTIONS, UPDATE_TRANSACTION } from './actionTypes'


export const fetchTransactions = (callback) => dispatch => {
    return axios
        .get(`/api/transactions?from=${moment().startOf('month').format('YYYY-MM-DD')}&to=${moment().add(1, 'day').format('YYYY-MM-DD')}`)
        .then(res => {
            dispatch({
                type: SET_TRANSACTIONS,
                payload: res.data
            })
            if (callback) return callback(res.data)
        })
        .catch(err => dispatch(setErrors(err.response.data)))
}

export const fetchTransaction = (_id, callback) => dispatch => {
    axios
        .get(`/api/transactions/${_id}`)
        .then(res => dispatch({
            type: 'SET_TRANSACTION',
            payload: res.data,
        }))
        .catch(err => dispatch(setErrors(err.response.data)))
}

export const saveTransaction = (transaction) => {
    return async dispatch => {
        let resTransaction
        if (transaction._id) {
            resTransaction = await dispatch(updateTransaction(transaction))
        } else {
            resTransaction = await dispatch(createTransaction(transaction))
        }
        return resTransaction
    }
}

const createTransaction = (transaction) => {
    return async dispatch => {
        try {
            const res = await axios.post('/api/transactions', transaction)
            const { data } = res
            await dispatch({
                type: INSERT_TRANSACTION,
                payload: data,
            })
            console.log(data)
            return data
        } catch (errors) {
            console.log(errors.response.data)
        }
    }
}

const updateTransaction = (transaction) => {
    return async dispatch => {
        try {
            const res = await axios.put(`/api/transactions/${transaction._id}`, transaction)
            const { data } = res
            await dispatch({
                type: UPDATE_TRANSACTION,
                payload: data,
            })
            return data
        } catch (errors) {
            console.log(errors)
        }
    }
}

export const deleteTransaction = (transaction) => {
    return async dispatch => {
        try {
            const res = await axios.delete(`/api/transactions/${transaction._id}`)
            const { data } = res
            await dispatch({
                type: DELETE_TRANSACTION,
                payload: data,
            })
            return data
        } catch (errors) {
            console.log(errors)
        }
    }
}