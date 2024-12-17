import { Dropdown, MenuProps } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import Avatar from '@/assets/images/avatar.png';
import { useNavigate } from 'react-router-dom';

type MenuKey = 'logout';

const Header = () => {
  const navigate = useNavigate();
  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: <span>退出登录</span>,
      icon: <LogoutOutlined className="mr-1" />,
    },
  ];

  const handleLogout = () => {
    // TODO clear store
    localStorage.removeItem('loginInfo');
    navigate('/login');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    switch (e.key as MenuKey) {
      case 'logout':
        handleLogout();
        break;

      default:
        break;
    }
  };

  return (
    <header
      className={`
      border-bottom
      py-6px
      box-border
      flex
      h-[56px]
      w-full
      items-center
      justify-end
      bg-white
      px-6
      transition-all
        `}
    >
      <div className="flex items-center">
        <Dropdown className="min-w-50px" menu={{ items, onClick }}>
          <div
            className="ant-dropdown-link flex cursor-pointer items-center"
            onClick={(e) => e.preventDefault()}
          >
            <img
              src={Avatar}
              width={27}
              height={27}
              alt="Avatar"
              className="rounded-1/2 bg-light-500 overflow-hidden object-cover"
            />
            <span
              className="text-15px min-w-50px ml-2 truncate">{JSON.parse(localStorage.getItem('loginInfo') || 'admin')}</span>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
