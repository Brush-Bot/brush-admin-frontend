import React, { ReactNode, useState } from 'react';
import { Layout, Menu } from 'antd';
import Logo from '@/assets/images/logo.jpeg';
import { useLocation, useNavigate } from 'react-router-dom';
import { children, ChildrenItem } from '@/router.tsx';

const { Sider } = Layout;

interface MenuItem {
  key: string;
  label: string;
  icon?: ReactNode;
  children?: MenuItem[];
}

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const generateMenuConfig = (routes: ChildrenItem[], basePath = '') => {
    return routes.map((route) => {
      const key = `${basePath}/${route.path}`;
      const menuItem: MenuItem = {
        label: route.label,
        key,
        icon: route.icon,
      };

      if (route.children) {
        menuItem.children = generateMenuConfig(route.children, key);
      }

      return menuItem;
    });
  };

  const menuItems = generateMenuConfig(children);
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate('/', { replace: true });
  };

  const defaultOpenKeys = menuItems.map((item) => {
    if (item.children) {
      return item.key;
    }
    return '';
  });

  return (
    <Sider
      width={250}
      className={'h-screen'}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        className={`my-[20px] flex cursor-pointer items-center justify-center`}
        onClick={goHome}
      >
        <img
          src={Logo}
          width={40}
          height={40}
          className="object-contain"
          alt="logo"
        />

        <span
          className={`ml-3 truncate text-xl font-bold text-white ${collapsed ? 'hidden' : ''}`}
        >
          小刷子管理后台
        </span>
      </div>

      <Menu
        className="z-1000"
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={[location.pathname]}
        mode="inline"
        theme="dark"
        items={menuItems}
        onClick={({ key }) => {
          navigate(key);
        }}
      />
    </Sider>
  );
};

export default Sidebar;
