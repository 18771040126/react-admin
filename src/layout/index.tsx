import React, { useState } from 'react'
import { Layout, theme } from 'antd'
import Aside from './aside'
import Header from './header'
import Content from './content'

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Aside collapsed={collapsed} />
      <Layout className="site-layout">
        <Header
          collapsed={collapsed}
          colorBgContainer={colorBgContainer}
          setCollapsed={setCollapsed}
        />
        <Content colorBgContainer={colorBgContainer} />
      </Layout>
    </Layout>
  )
}

export default App
