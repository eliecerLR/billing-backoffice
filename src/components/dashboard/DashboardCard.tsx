import React from 'react';
import { BadgeDelta } from '@tremor/react';

// assets
import UsersIcon from '../../../public/assets/menuIcons/users-icon.svg';
import PlansIcon from '../../../public/assets/menuIcons/plans-icon.svg';
import CompaniesIcon from '../../../public/assets/menuIcons/companies-icon.svg';
import { RiExpandDiagonalFill } from '@remixicon/react';
import { white } from 'tailwindcss/colors';

interface Props {
  type: keyof typeof IconList;
  amount: string;
}

const IconList = {
  users: <UsersIcon />,
  plans: <PlansIcon />,
  companies: <CompaniesIcon />,
};

const cardBackground = {
  plans: 'linear-gradient(90deg, #2F3737 -10.08%, #56FFF5 111.03%)',
  users: 'linear-gradient(90deg, #3D3B4D 0%, #7562F2 104.94%)',
  companies: 'linear-gradient(90deg, #50697B 0%, #5FBDFF 104.94%)',
};

const cardText = {
  users: 'Total Users',
  plans: 'Active Plans',
  companies: 'Total Companies',
};

const DashboardCard = (props: Props) => {
  const { type, amount } = props;

  return (
    <div
      style={{
        background: `${cardBackground[type]}`,
      }}
      className="rounded-lg px-4 pb-4 pt-2"
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="">{IconList[type]}</span>
          <p className="text-xl ml-3">{cardText[type]}</p>
        </div>
        <div className="flex items-center">
          <RiExpandDiagonalFill
            size={20}
            color={white}
            className="text-end mr-2"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <p className="text-3xl">{amount}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
