import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ProfilePage } from './pages/ProfilePage'
import { AuthPage } from './pages/AuthPage'
import { MessengerPage } from './pages/MessengerPage'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/messenger" exact>
          <MessengerPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Redirect to="/messenger" />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
      <MessengerPage />
    </Switch>
  )
}
