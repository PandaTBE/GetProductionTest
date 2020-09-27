import React from 'react'
import { Route } from 'react-router-dom'
import InfoPage from '../infoPage/infoPage'
import Login from '../login/login'

const RouteComponent = () => {
    return (
        <>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/info" render={() => <InfoPage />} />
        </>
    )
}

export default RouteComponent