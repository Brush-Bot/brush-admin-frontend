import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import router from '@/router.tsx';
import { isSystemDarkMode } from '@/utils';
import '@/style/base.css';

dayjs.locale('en');
const { defaultAlgorithm, darkAlgorithm } = theme;

const App = () => {
  return (
    <div className="flex h-screen w-screen">
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm: [isSystemDarkMode() ? darkAlgorithm : defaultAlgorithm],
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
};

export default App;
