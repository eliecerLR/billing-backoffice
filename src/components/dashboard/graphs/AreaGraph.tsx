import React, { Key, useEffect } from 'react';
import '../../../../globals.css';
import { AreaChart, Card, Title, CustomTooltipProps } from '@tremor/react';
import colors from 'tailwindcss/colors';

import PlansIcon from '../../../../public/assets/menuIcons/plans-icon.svg';
import TemplatesIcon from '../../../../public/assets/menuIcons/templates-icon.svg';
import { RiExpandDiagonalFill } from '@remixicon/react';

//utilities
import { useTranslation } from 'react-i18next';

interface BillData {
  date: string;
  Downloads: number;
}

interface subsData {
  date: string;
  subs: number;
}

interface Props {
  type: keyof typeof IconList;
  data: (BillData | subsData)[];
  customClasses: string;
}

const IconList = {
  bills: <TemplatesIcon />,
  subs: <PlansIcon />,
};

const cardText = {
  bills: 'Total Bills',
  subs: 'Total memberships',
};

const customTooltip = ({ payload, active }: CustomTooltipProps) => {
  if (!active || !payload) return null;

  return (
    <div className="w-56 rounded-sm bg-original-purple bg-opacity-30 p-2">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div
            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
          />
          <div className="space-y-1">
            <p className="text-original-bone">{category.payload.date}</p>
            <p className="font-medium text-original-bone">
              {`${category.value} ${
                category.payload.bills ? 'Downloads' : 'Suscriptions'
              }`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const AreaGraph = (props: Props) => {
  const { type, data, customClasses } = props;
  const { t } = useTranslation();

  let color = `mx-1 h-72 ${customClasses}`;
  useEffect(() => {
    console.log(color);
  }, []);
  return (
    <div className="m-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="">{IconList[type]}</span>
          <p className="text-xl ml-3">{t(`Dashboard.${type}`)}</p>
        </div>
        <div className="flex items-center">
          <RiExpandDiagonalFill
            size={20}
            color={colors.white}
            className="text-end mr-2"
          />
        </div>
      </div>
      <AreaChart
        className={color}
        data={data}
        index="date"
        categories={type === 'bills' ? ['Downloads'] : ['subs']}
        yAxisWidth={39}
        customTooltip={customTooltip}
        showAnimation={true}
        animationDuration={2000}
      />
    </div>
  );
};

export default AreaGraph;
