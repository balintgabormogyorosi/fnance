import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveCategory } from '../../../redux/actions/categoriesActions'
import ColorSelector from '../../ColorSelector/ColorSelector'
import IconSelector from '../../IconSelector/IconSelector'
import TypeSelector from '../../TypeSelector/TypeSelector'

import { Button, Input, Title } from '../../UI'


const CategoryForm = ({ onReady, }) => {
    const [category, setCategory] = useState({ type: '', color: '', icon: '', name: '', })
    const dispatch = useDispatch()

    const handleOnInputChange = (id, value, isValid) => {
        const updatedCategory = Object.assign(Object.create(Object.getPrototypeOf(category)), category)
        switch (id) {
            case 'type':
                updatedCategory.type = value
                break
            case 'color':
                updatedCategory.color = value
                break
            case 'icon':
                updatedCategory.icon = value
                break
            case 'name':
                updatedCategory.name = value
                break
            default:
                break
        }
        setCategory(updatedCategory)
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        try {
            const resCategory = await dispatch(saveCategory(category))
            if (onReady && resCategory) {
                onReady(resCategory)
            }
        } catch (errors) {
            console.log(errors)
        }
    }

    return (
        <form>
            <div className="category-form">
                <Title>
                    Category Form
                </Title>
                <div className="category-form-inputs">
                    <TypeSelector
                        id='type'
                        name='type'
                        onChange={handleOnInputChange}
                        value={category.type}
                    />
                    <ColorSelector
                        id='color'
                        name='color'
                        onChange={handleOnInputChange}
                        value={category.color}
                    />
                    <IconSelector
                        id='icon'
                        name='icon'
                        onChange={handleOnInputChange}
                        value={category.icon}
                        icons={'Cart,Basket,Barbell,Home,Enter,Exit,Book,GameController,Restaurant,Briefcase,Cash,Wallet'.split(',').map(i => ({ value: i, name: i }))}
                    />
                    <Input
                        id='name'
                        name='name'
                        onChange={handleOnInputChange}
                        label='Name'
                        value={category.name}
                    />
                </div>
                <div>
                    <Button type="submit" onClick={handleOnSubmit}>
                        Save
                    </Button>
                    <Button type="reset">
                        Cancel
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default CategoryForm