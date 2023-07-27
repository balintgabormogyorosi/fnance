import React from 'react'

import { Button } from '../../UI'
import TransactionList from '../../Transaction/TransactionList/TransactionList'
import ButtonContainer from '../../ButtonContainer/ButtonContainer'
import Category from '../Category/Category'
import BalanceBlock from '../../MonthSelector/BalanceBlock'

import './CategoryDetail.scss'


const CategoryDetail = ({ category, transactions }) => {
    if (!category) return null

    return (
        <div className="category-detail-wrapper">
            <div className="category-detail">
                <div className="category-detail-info">
                    <Category
                        category={category}
                    />
                    <BalanceBlock
                        expense={-100}
                        income={214}
                    />
                </div>
                <hr />
                <ButtonContainer>
                    <Button>
                        Edit
                    </Button>
                    <Button>
                        Delete
                    </Button>
                </ButtonContainer>
            </div>
            <TransactionList transactions={transactions} />
        </div>
    )
}

export default CategoryDetail