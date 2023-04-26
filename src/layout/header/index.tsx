import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
const Header = (props: any) => {
  return (
    <Layout.Header style={{ padding: 0, background: props.colorBgContainer }}>
      <Button
        type="text"
        icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => props.setCollapsed(!props.collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Layout.Header>
  )
}
export default Header
