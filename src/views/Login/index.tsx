import React, { useEffect, useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import './index.css'
const Login: React.FC = (props: any) => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState({})

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({})
  }, [])
  const onFinish = (values: any) => {
    console.log('Finish:', values)
    localStorage.setItem('token', JSON.stringify('123123'))
    setTimeout(() => {
      message.success('登录成功')
      props.history.replace('/')
    }, 1000)
  }
  return (
    <div className="form-container">
      <Form form={form} name="horizontal_login" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              block
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }>
              登录
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
