import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import CategoryDetail from '../../components/Category/CategoryDetail/CategoryDetail'


const CategoryDetailPage = () => {
    const categories = useSelector(state => state.categories)
    const transactions = useSelector(state => state.transactions)
    const match = useRouteMatch()

    const [category, setCategory] = useState(null)
    const [transactionsForCategory, setTransactionsForCategory] = useState([])

    useEffect(() => {
        const { category } = match.params
        setCategory(categories.list.find(c => c._id === category))
        setTransactionsForCategory(Object.values(transactions.dictionary)
            .reduce(
                (list, month) => ([...list, ...month.filter(i => i.category === category)]),
                []
            ))
    }, [match, categories.list, transactions.dictionary])

    return (
        <>
            <CategoryDetail
                category={category}
                transactions={transactionsForCategory}
            />
        </>
    )
}

CategoryDetailPage.routeName = '/:category'

export default CategoryDetailPage