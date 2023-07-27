import axios from 'axios'

import { setErrors } from './errorsAction'
import { SET_CATEGORIES, APPEND_CATEGORY } from './actionTypes'


export const fetchCategories = () => dispatch => {
    return axios
        .get('/api/categories')
        .then(res => dispatch({
            type: SET_CATEGORIES,
            payload: res.data,
        }))
        .catch(err => dispatch(setErrors(err.response.data)))
}

export const saveCategory = (category, callback) => {
    return async dispatch => {
        let resCategory
        if (category._id) {
            resCategory = await dispatch(updateCategory(category, callback))
        }
        else {
            resCategory = await dispatch(createCategory(category, callback))
        }
        return resCategory
    }
}

const createCategory = (category) => {
    return async dispatch => {
        console.log(category)
        try {
            const res = await axios.post('/api/categories', category)
            const { data } = res
            await dispatch({
                type: APPEND_CATEGORY,
                payload: data,
            })
            return data
        } catch (errors) {
            console.log(errors)
            // err => dispatch(setErrors(err.response.data)))
        }
    }
}

const updateCategory = category => dispatch => {
    axios
        .post(`/api/categories/${category._id}`, category)
        .then(category => console.log(category))
        .catch(err => dispatch(setErrors(err.response.data)))
}