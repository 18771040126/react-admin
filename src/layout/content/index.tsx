import { Layout, Breadcrumb } from 'antd'
const Content = (props: any) => {
  return (
    <Layout.Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: props.colorBgContainer,
        }}>
        Bill is a cat.
      </div>
    </Layout.Content>
  )
}

export default Content
