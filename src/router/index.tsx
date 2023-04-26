import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Login from '../views/Login'
import NotFound from '../views/404'
import RenderRoutesMap from './renderRoutesMap'

const Routes = () => {
  const token = localStorage.getItem('token')
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        {token ? (
          RenderRoutesMap.map((route) => {
            return (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                render={(routeProps: any) => {
                  return <route.component {...routeProps}></route.component>
                }}
              />
            )
          })
        ) : (
          <Redirect to="/login" />
        )}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
export default Routes
