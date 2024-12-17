import Login from '@/pages/login';
import ActivityCode from '@/pages/activityCode';
import ContractMonitor from '@/pages/contractMonitor';
import PaymentAddress from '@/pages/paymentAddress';
import RechargePackage from '@/pages/rechargePackage';
import UserOrder from '@/pages/userManagement/userOrder';
import NotFound from '@/pages/notFound/notFound.tsx';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './components/mainLayout';
import PointsRecord from '@/pages/pointManagement/pointRecord';
import UserPoint from '@/pages/pointManagement/userPoint';
import IncomeRecord from '@/pages/incomeRecord';
import PaymentOrder from '@/pages/userManagement/paymentOrder';
import {
  BookOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
  OrderedListOutlined,
  TagsOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ReactNode } from 'react';

export interface ChildrenItem {
  path: string;
  label: string;
  icon?: ReactNode;
  children?: ChildrenItem[];
}

export const children = [
  {
    path: 'activity-code',
    element: <ActivityCode />,
    icon: <FileTextOutlined />,
    label: '激活码',
  },
  {
    path: 'contract-monitor',
    element: <ContractMonitor />,
    label: '合约监控',
    icon: <OrderedListOutlined />,
  },
  {
    path: 'income-record',
    element: <IncomeRecord />,
    label: '入账记录',
    icon: <BookOutlined />,
  },
  {
    path: 'payment-address',
    element: <PaymentAddress />,
    label: '支付地址',
    icon: <CreditCardOutlined />,
  },
  {
    path: 'recharge-package',
    element: <RechargePackage />,
    label: '充值套餐',
    icon: <DollarCircleOutlined />,
  },
  {
    path: 'point-management',
    label: '积分管理',
    icon: <TagsOutlined />,
    children: [
      {
        path: 'point-record',
        index: true,
        element: <PointsRecord />,
        label: '积分记录',
      },
      {
        path: 'user-point',
        element: <UserPoint />,
        label: '用户积分',
      },
    ],
  },
  {
    path: 'user-management',
    label: '用户管理',
    icon: <UserOutlined />,
    children: [
      {
        path: 'payment-order',
        index: true,
        element: <PaymentOrder />,
        label: '支付订单',
      },
      {
        path: 'user-order',
        element: <UserOrder />,
        label: '用户订单',
      },
    ],
  },
];
const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="activity-code" />,
      },
      ...children,
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
