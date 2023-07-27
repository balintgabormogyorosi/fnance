import { SET_TRANSACTIONS, SET_TRANSACTION, DELETE_TRANSACTION, INSERT_TRANSACTION, UPDATE_TRANSACTION } from '../actions/actionTypes'


const initialState = {
    list: [],
    listFetched: null,
    item: {},
    itemFetched: null,
}

export default function (state = initialState, action) {
    let list
    switch (action.type) {
        case SET_TRANSACTIONS:
            return {
                ...state,
                list: action.payload,
                listFetched: Date.now,
            }
        case SET_TRANSACTION:
            return {
                ...state,
                item: action.payload,
                itemFetched: Date.now,
            }
        case INSERT_TRANSACTION:
            list = [...state.list]
            list.push(action.payload)
            list.sort((a, b) => a.perfomedOn > b.performedOn ? 1 : -1)
            return {
                ...state,
                list,
            }
        case UPDATE_TRANSACTION:
            list = [...state.list]
            list = list.map(t => t._id === action.payload._id ? action.payload : t)
            return {
                ...state,
                list,
            }
        case DELETE_TRANSACTION:
            list = [...state.list]
            list = list.filter(i => i._id !== action.payload._id)
            return {
                ...state,
                list,
            }
        default:
            return state
    }
}