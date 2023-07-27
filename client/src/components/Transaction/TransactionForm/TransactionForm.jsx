import React, { useState } from 'react'
import moment from 'moment'

import IconSelector from '../../IconSelector/IconSelector'
import { Button, Input, Title } from '../../UI'
import UnitSelector from '../../UnitSelector/UnitSelector'
import { useDispatch, useSelector } from 'react-redux'
import { saveTransaction } from '../../../redux/actions/transactionsActions'


const ProductForm = ({ index, onProductChange, onProductRemove, product, }) => {
    const handleOnChange = (id, value) => {
        const updatedProduct = Object.assign(Object.create(Object.getPrototypeOf(product)), product)
        switch (id) {
            case 'name':
                updatedProduct.name = value
                break
            case 'value':
                updatedProduct.value = value
                break
            default:
                break
        }
        onProductChange(index, updatedProduct)
    }

    return (
        <div>
            <Input
                id='name'
                onChange={handleOnChange}
                value={product.name}
            />
            <Input
                id='value'
                onChange={handleOnChange}
                value={product.value}
            />
            <strong onClick={() => onProductRemove(index)}>X</strong>
        </div>
    )
}

const TransactionForm = ({ transactionEdited, onReady, }) => {
    const dispatch = useDispatch()
    const [transaction, setTransaction] = useState({ category: '', unit: '', performedOn: moment().format('YYYY-MM-DD'), products: [], })
    const categories = useSelector(state => state.categories.list)
    const units = useSelector(state => state.units.list)

    const handleOnInputChange = (id, value, isValid) => {
        const updatedTransaction = Object.assign(Object.create(Object.getPrototypeOf(transaction)), transaction)
        switch (id) {
            case 'category':
                updatedTransaction.category = value
                break
            case 'unit':
                updatedTransaction.unit = value
                break
            case 'performedOn':
                updatedTransaction.performedOn = value
                break
            default:
                break
        }
        setTransaction(updatedTransaction)
    }

    const handleOnProductAdd = () => {
        const updatedTransaction = Object.assign(Object.create(Object.getPrototypeOf(transaction)), transaction)
        updatedTransaction.products.push({ name: '', value: '', })
        setTransaction(updatedTransaction)
    }

    const handleOnProductChange = (index, product) => {
        const updatedTransaction = Object.assign(Object.create(Object.getPrototypeOf(transaction)), transaction)
        updatedTransaction.products[index] = product
        setTransaction(updatedTransaction)
    }

    const handleOnProductRemove = (index) => {
        const updatedTransaction = Object.assign(Object.create(Object.getPrototypeOf(transaction)), transaction)
        updatedTransaction.products.splice(index, 1)
        setTransaction(updatedTransaction)
    }

    const handleOnSubmit = async () => {
        try {
            const resTransaction = await dispatch(saveTransaction(transaction))
            if (onReady && resTransaction) {
                onReady(resTransaction)
            }
        } catch (errors) {
            console.log(errors)
        }
    }

    console.log(transaction)

    return (
        <form>
            <div className="transaction-form">
                <Title>
                    Transaction Form
                </Title>
                <div className="transaction-form-inputs">
                    <IconSelector
                        icons={categories.map(c => ({ value: c._id, name: c.icon, label: c.name, color: c.color, }))}
                        id='category'
                        name='category'
                        onChange={handleOnInputChange}
                        value={transaction.category}
                    />
                    <UnitSelector
                        id='unit'
                        name='unit'
                        onChange={handleOnInputChange}
                        units={units.map(u => ({ value: u._id, name: u.name, }))}
                        value={transaction.unit}
                    />
                    <Input
                        id='performedOn'
                        name='date'
                        onChange={handleOnInputChange}
                        type='date'
                        value={transaction.performedOn}
                    />
                </div>
                <div>
                    <Button onClick={handleOnProductAdd}>
                        Add Product
                    </Button>
                    <div>
                        {transaction.products.map((product, index) => (
                            <ProductForm
                                key={index}
                                index={index}
                                onProductChange={handleOnProductChange}
                                onProductRemove={handleOnProductRemove}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <Button onClick={handleOnSubmit}>
                        Save
                    </Button>
                    <Button>
                        Cancel
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default TransactionForm