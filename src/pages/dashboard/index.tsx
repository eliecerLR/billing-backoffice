//main
import { FC, useState } from 'react';
import '../../../globals.css';

//components
import Navbar from '@/components/navbar/Navbar';

//assets
import UserIcon from '../../../public/assets/logo-words.svg';

import React from 'react';
import Menu from '@/components/menu/Menu';
import DashboardCard from '@/components/dashboard/DashboardCard';

const Dashboard = () => {
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
            navigation="Dashboard"
            imageUrl="https://ui-avatars.com/api/?name=Raulin+Rosendo"
          />
          <div className="flex h-2/5 mt-4">
            <div className="w-1/5 flex flex-col justify-between">
              <DashboardCard type="plans" amount="3" />
              <DashboardCard type="users" amount="70" />
              <DashboardCard type="companies" amount="200" />
            </div>
            <div
              className="w-9/12 ml-8"
              style={{ border: '1px solid red' }}
            ></div>
          </div>
          <div className="mt-8 flex h-2/5">
            <div className="w-9/12" style={{ border: '1px solid red' }}></div>
            <div
              className="w-1/5 ml-8"
              style={{ border: '1px solid red' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
