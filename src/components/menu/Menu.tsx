import React, { useState } from 'react';

//utilities
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

//assets
import DashboardIcon from '../../../public/assets/menuIcons/dashboard-icon.svg';
import UsersIcon from '../../../public/assets/menuIcons/users-icon.svg';
import CompaniesIcon from '../../../public/assets/menuIcons/companies-icon.svg';
import TemplatesIcon from '../../../public/assets/menuIcons/templates-icon.svg';
import PlansIcon from '../../../public/assets/menuIcons/plans-icon.svg';

interface MenuItems {
  [key: string]: JSX.Element;
}

interface Props {
  page: string;
}

const menuItems: MenuItems = {
  Dashboard: <DashboardIcon />,
  Users: <UsersIcon />,
  Companies: <CompaniesIcon />,
  Templates: <TemplatesIcon />,
  Plans: <PlansIcon />,
};

const touchStyles = {
  background: 'linear-gradient(90deg, #1D2F3A 0%, #001C2E 100%)',
};

const Menu = (props: Props) => {
  const { page } = props;
  const [isSelected, setIsSelected] = useState(page);
  const router = useRouter();
  const { t } = useTranslation();

  const handleChangeView = (route: string) => {
    let formattedRoute = `/${route.toLowerCase()}`;
    router.push(formattedRoute);
  };
  return (
    <div className="flex flex-col ml-8 text-original-bone mt-4">
      <h2 className="text-3xl uppercase mt-2">{t('Menu.Menu')}</h2>
      <div className="flex flex-col mt-4 align-middle">
        {Object.keys(menuItems).map((item, index) => (
          <div
            className="flex items-center mt-1 p-4 rounded-l-lg hover:bg-original-dark-blue hover:bg-opacity-50 hover:border-r-4 hover:border-original-dark-blue"
            key={index}
            style={isSelected === item ? touchStyles : undefined}
            onClick={() => handleChangeView(item)}
          >
            {menuItems[item]}
            <span className="ml-3 mt-1 text-2xl">{t(`Menu.${item}`)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
