import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import RenderRoutesMap from './renderRoutesMap'
const Login = lazy(() => import('../views/Login'))
const NotFound = lazy(() => import('../views/404'))
const asyncRoute = () => {
  const token = localStorage.getItem('token')
  return (
    <Router>
      <Suspense fallback={<div>loading....</div>}>
        <Switch>
          <Route path="/login" component={Login} />
          {token ? (
            RenderRoutesMap.map((route) => {
              return (
                <Route
                  key={route.name}
                  path={route.path}
                  render={(propsRoute) => (<route.component {...propsRoute} />)}
                />
              )
            })
          ) : (
            <Redirect to="/login" />
          )}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}
export default asyncRoute
