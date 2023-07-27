import axios from 'axios'

import { setErrors } from './errorsAction'
import { SET_UNITS, APPEND_UNIT, UPDATE_UNIT } from './actionTypes'


export const fetchUnits = () => dispatch => {
    return axios
        .get('/api/units')
        .then(res => dispatch({
            type: SET_UNITS,
            payload: res.data,
        }))
        .catch(err => dispatch(setErrors(err.response.data)))
}

export const saveUnit = (unit) => {
    console.log(unit)
    return async dispatch => {
        let resUnit
        if (unit._id) {
            resUnit = await dispatch(updateUnit(unit))
        } else {
            resUnit = await dispatch(createUnit(unit))
        }
        return resUnit
    }
}

const createUnit = (unit) => {
    return async dispatch => {
        try {
            const res = await axios.post('/api/units', unit)
            const { data } = res
            await dispatch({
                type: APPEND_UNIT,
                payload: data,
            })
            return data
        } catch (errors) {
            console.log(errors)
        }
    }
}

const updateUnit = (unit) => {
    return async dispatch => {
        try {
            const res = axios.post(`/api/units/${unit._id}`, unit)
            const { data } = res
            await dispatch({
                type: UPDATE_UNIT,
                payload: data,
            })
            return data
        } catch (errors) {
            console.log(errors)
        }
    }
}