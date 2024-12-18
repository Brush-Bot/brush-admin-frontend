import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import router from '@/router.tsx';
import { isSystemDarkMode } from '@/utils';
import '@/style/base.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

dayjs.locale('en');
const { defaultAlgorithm, darkAlgorithm } = theme;
const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="flex h-screen w-screen">
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm: [isSystemDarkMode() ? darkAlgorithm : defaultAlgorithm],
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ConfigProvider>
    </div>
  );
};

export default App;
