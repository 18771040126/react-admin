import Home from '../views/Home'

// 基础设置
import App from '../views/BasicSettings/App'
import AppPackage from '../views/BasicSettings/AppPackage'

// 公司管理
import Company from '../views/CompanyManagement/Company'
import Platform from '../views/CompanyManagement/Platform'

// 设备管理
import Equipment from '../views/EquipmentManagement/Equipment'
import Upgradation from '../views/EquipmentManagement/Upgradation'

import {
  FileOutlined,
} from '@ant-design/icons'
// 路由表
const privateRoute = [
  {
    path: '/home',
    key: '/home',
    label: '首页',
    icon: <FileOutlined />,
    component: Home,
  },
  {
    path: '/basics',
    key: '/basics',
    label: '基础设置',
    icon: <FileOutlined />,
    children: [
      {
        path: '/basics/app',
        key: '/basics/app',
        label: 'app套餐',
        icon: <FileOutlined />,
        component: App,
      },
      {
        path: '/basics/AppPackage',
        key: '/basics/AppPackage',
        label: 'app应用',
        icon: <FileOutlined />,
        component: AppPackage,
      },
    ],
  },
  {
    path: '/company',
    key: '/company',
    label: '公司管理',
    icon: <FileOutlined />,
    children: [
      {
        path: '/company/commpanyManage',
        key: '/company/commpanyManage',
        label: '公司管理',
        icon: <FileOutlined />,
        component: Company,
      },
      {
        path: '/company/platformManage',
        key: '/company/platformManage',
        label: '平台管理员',
        icon: <FileOutlined />,
        component: Platform,
      },
    ],
  },
  {
    path: '/equipment',
    key: '/equipment',
    label: '设备管理',
    icon: <FileOutlined />,
    children: [
      {
        path: '/equipment/equipmentManage',
        key: '/equipment/equipmentManage',
        label: '设备管理',
        icon: <FileOutlined />,
        component: Equipment,
      },
      {
        path: '/equipment/upgradation',
        key: '/equipment/upgradation',
        label: '设备升级',
        icon: <FileOutlined />,
        component: Upgradation,
      },
    ],
  },
]

export default privateRoute
