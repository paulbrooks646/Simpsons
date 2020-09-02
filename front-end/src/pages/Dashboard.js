import React from 'react'
import Button from '@material-ui/core/Button'

export default function Dashboard() {

    const logout = () => {
        console.log('Logout')
    }

    return (
        <div>
            <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
        </div>
    )
}