import React from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'

export default function Dashboard(props) {

    const logout = () => {
        axios.delete('/logout')
        .then( () => {
            props.history.push('/')
        })
    }

    return (
        <div>
            <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
        </div>
    )
}