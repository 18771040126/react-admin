import { useState } from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import { Route, Redirect, Switch } from 'react-router-dom'
import PrivateRouter from '../router/privateRoute'
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd'
const { Header, Content, Sider } = Layout


const App = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const onClick = (e) => {
    props.history.push(e.key)
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" mode="inline" onClick={onClick} items={PrivateRouter} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{
            padding: 24,
            minHeight: 360,
            height: 'calc(100% - 64px)',
            background: colorBgContainer
          }}>
            <Redirect exact from="/" to="/home" />
            {
              PrivateRouter.map(route => {
                return (
                  <Switch>
                    <Route
                      key={route.key}
                      exact={route.exact || true}
                      path={route.path}
                      render={() => (<route.component />)}
                    />
                    {
                      Array.isArray(route.children) ?
                        route.children.map((item) => {
                          return (
                            <Route
                              key={item.key}
                              exact={item.exact || true}
                              path={item.path}
                              render={() => (<item.component />)}
                            />
                          )
                        }) : null
                    }
                  </Switch>
                )
              })
            }
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App