import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { registerUser } from '../redux/actions/authActions'
import { Link } from 'react-router-dom'
import { Button, Input, Title, } from '../components/UI'


const Register = () => {
    const dispatch = useDispatch()
    const [authentication, setAuthentication] = useState({ email: '', password: '', password2: '', })

    const handleOnInputChange = (id, value) => {
        const updatedAuthentication = Object.assign(Object.create(Object.getPrototypeOf(authentication)), authentication)
        switch (id) {
            case 'email':
                updatedAuthentication.email = value
                break
            case 'password':
                updatedAuthentication.password = value
                break
            case 'password2':
                updatedAuthentication.password2 = value
                break
            default:
                break
        }
        setAuthentication(updatedAuthentication)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(authentication))
    }

    return (
        <div>
            <div>
                <form>
                    <Title component="h2">
                        Register
                    </Title>
                    <Input
                        id='email'
                        onChange={handleOnInputChange}
                        value={authentication.email}
                    />
                    <Input
                        id='password'
                        onChange={handleOnInputChange}
                        value={authentication.password}
                    />
                    <Input
                        id='password2'
                        onChange={handleOnInputChange}
                        value={authentication.password2}
                    />
                    <Button type="submit" onClick={handleOnSubmit}>
                        Register
                    </Button>
                </form>
            </div>
            <div>
                <p>
                    Already have an account? You can log in <Link to="/login">here</Link>
                </p>
            </div>
        </div>
    )
}

Register.routeName = '/register'

export default Register