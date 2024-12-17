import Head from '../head';
import { Breadcrumb, Layout } from 'antd';
import Sidebar from '@/components/sidebar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { children, ChildrenItem } from '@/router.tsx';
import { useEffect, useState } from 'react';

const { Content } = Layout;
type Breadcrumb = {
  title: string;
};

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [breadcrumbItems, setBreadcrumbItems] = useState<Breadcrumb[]>([]);
  const getBreadcrumb = (path: string, config: ChildrenItem[]): string[] => {
    const pathSegments = path.split('/').filter(Boolean);

    return pathSegments.reduce<string[]>((breadcrumbs, segment) => {
      const route = config.find((item) => item.path === segment);
      if (route) {
        breadcrumbs.push(route.label);
        config = route.children || [];
      }
      return breadcrumbs;
    }, []);
  };

  useEffect(() => {
    const breads = getBreadcrumb(location.pathname, children).map((item) => ({
      title: item,
    }));
    setBreadcrumbItems(breads);
  }, [location.pathname]);

  useEffect(() => {
    if (!localStorage.getItem('loginInfo')) {
      navigate('/login');
    }
  }, []);


  const renderWrapper = () => {
    if (!localStorage.getItem('loginInfo')) {
      return;
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Head />
          <Content className={'px-[16px]'}>
            <Breadcrumb className="my-[16px]" items={breadcrumbItems} />
            <div className={'min-h-[360px] rounded-[8px] bg-white p-[14px]'}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  };

  return (
    <>
      {renderWrapper()}
    </>

  );
};

export default MainLayout;
