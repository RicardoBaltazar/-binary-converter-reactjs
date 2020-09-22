import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../pages/home/Index'
import PageAbout from '../pages/about/index'
import PageMenu from '../pages/menu/index'
import PageOrdering from '../pages/ordering'

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>

                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/about'} component={PageAbout} />
                    <Route exact path={'/menu'} component={PageMenu} />
                    <Route exact path={'/ordering'} component={PageOrdering} />

                </Switch>
            </BrowserRouter>
        </>
    )
}