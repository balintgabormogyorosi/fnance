import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginUser } from '../redux/actions/authActions'
import { Button, Input, Title } from '../components/UI'


const LogIn = () => {
    const dispatch = useDispatch()
    const [authentication, setAuthentication] = useState({ email: '', password: '', })

    const handleOnInputChange = (id, value) => {
        const updatedAuthentication = Object.assign(Object.create(Object.getPrototypeOf(authentication)), authentication)
        switch (id) {
            case 'email':
                updatedAuthentication.email = value
                break
            case 'password':
                updatedAuthentication.password = value
                break
            default:
                break
        }
        setAuthentication(updatedAuthentication)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(authentication))
    }

    return (
        <div>
            <form>
                <Title component="h2">
                    Log In
                </Title>
                <Input
                    id='email'
                    label='Email'
                    onChange={handleOnInputChange}
                    value={authentication.email}
                />
                <Input
                    id='password'
                    label='Password'
                    onChange={handleOnInputChange}
                    type='password'
                    value={authentication.password}
                />
                <Button type="submit" onClick={handleOnSubmit}>
                    Log In
                </Button>
            </form>
            <div>
                <p>
                    Don't have an account yet? You can register <Link to="/register">here</Link>
                </p>
            </div>
        </div>
    )
}

LogIn.routeName = '/login'

export default LogIn