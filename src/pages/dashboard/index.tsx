//main
import React, { FC, useState } from 'react';
import '../../../globals.css';

//components
import Navbar from '@/components/navbar/Navbar';
import Menu from '@/components/menu/Menu';
import DashboardCard from '@/components/dashboard/DashboardCard';
import TierList from '@/components/dashboard/TierList';
import AreaGraph from '@/components/dashboard/graphs/AreaGraph';

//assets
import UserIcon from '../../../public/assets/logo-words.svg';

//utilities
import { useTranslation } from 'react-i18next';

//mockups
const tierListData = [
  {
    template: 'Aqua template',
  },
  {
    template: 'Fire template',
  },
  {
    template: 'Earth template',
  },
  {
    template: 'Simple template',
  },
  {
    template: 'Robot template',
  },
];

const billsData = [
  {
    date: 'Jan 23',
    Downloads: 167,
  },
  {
    date: 'Feb 23',
    Downloads: 1025,
  },
  {
    date: 'Mar 23',
    Downloads: 856,
  },
  {
    date: 'Apr 23',
    Downloads: 465,
  },
  {
    date: 'May 23',
    Downloads: 2053,
  },
  {
    date: 'Jun 23',
    Downloads: 400,
  },
  {
    date: 'Jul 23',
    Downloads: 750,
  },
  {
    date: 'Aug 23',
    Downloads: 940,
  },
  {
    date: 'Sep 23',
    Downloads: 2560,
  },
  {
    date: 'Oct 23',
    Downloads: 1067,
  },
  {
    date: 'Nov 23',
    Downloads: 1670,
  },
  {
    date: 'Dec 23',
    Downloads: 1607,
  },
  {
    date: 'Jan 24',
    Downloads: 1120,
  },
  {
    date: 'Feb 24',
    Downloads: 367,
  },
  {
    date: 'Mar 24',
    Downloads: 3200,
  },
];

const subsData = [
  {
    date: 'Jan 23',
    subs: 607,
  },
  {
    date: 'Feb 23',
    subs: 125,
  },
  {
    date: 'Mar 23',
    subs: 1856,
  },
  {
    date: 'Apr 23',
    subs: 765,
  },
  {
    date: 'May 23',
    subs: 53,
  },
  {
    date: 'Jun 23',
    subs: 400,
  },
  {
    date: 'Jul 23',
    subs: 350,
  },
  {
    date: 'Aug 23',
    subs: 908,
  },
  {
    date: 'Sep 23',
    subs: 250,
  },
  {
    date: 'Oct 23',
    subs: 167,
  },
  {
    date: 'Nov 23',
    subs: 670,
  },
  {
    date: 'Dec 23',
    subs: 607,
  },
  {
    date: 'Jan 24',
    subs: 120,
  },
  {
    date: 'Feb 24',
    subs: 734,
  },
  {
    date: 'Mar 24',
    subs: 320,
  },
];

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen bg-dark-background text-original-bone font-custom overflow-auto">
      <div className="w-full h-full flex">
        <div className="w-1/5 mt-6">
          <UserIcon className="ml-8" />
          <Menu page="Dashboard" />
        </div>
        <div className="w-4/5 mt-6 bg-original-dark-blue ml-auto rounded-t-lg mr-8 pl-12">
          <Navbar
            name="Raulin Rosendo"
            navigation={t('Menu.Dashboard')}
            imageUrl="https://ui-avatars.com/api/?name=Raulin+Rosendo"
          />
          <div className="flex h-2/5 mt-4">
            <div className="w-1/5 flex flex-col justify-between">
              <DashboardCard type="plans" amount="3" />
              <DashboardCard type="users" amount="70" />
              <DashboardCard type="companies" amount="200" />
            </div>
            <div className="w-9/12 ml-8 rounded-lg bg-dark-background">
              <AreaGraph
                key="bills-graph"
                type="bills"
                data={billsData}
                customClasses="text-graph-variant"
              />
            </div>
          </div>
          <div className="mt-8 flex h-2/5">
            <div className="w-9/12 rounded-lg bg-dark-background">
              <AreaGraph
                key="subs-graph"
                type="subs"
                data={subsData}
                customClasses="text-graph-bar"
              />
            </div>
            <div className="w-1/5 ml-8 rounded-lg bg-dark-background">
              <TierList data={tierListData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
