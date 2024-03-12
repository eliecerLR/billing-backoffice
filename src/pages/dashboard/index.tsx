//main
import { FC, useState } from 'react';
import '../../../globals.css';

//components
import Navbar from '@/components/navbar/Navbar';

//assets
import UserIcon from '../../../public/assets/logo-words.svg';

import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-screen bg-dark-background text-original-bone font-custom overflow-auto">
      <div className="w-full h-full flex">
        <div className="w-1/5 mt-6">
          <UserIcon className="ml-8" />
        </div>
        <div className="w-4/5 mt-6 bg-original-dark-blue ml-auto rounded-t-lg mr-8 pl-12">
          <Navbar
            name="Raulin Rosendo"
            navigation="Dashboard"
            imageUrl="https://ui-avatars.com/api/?name=Rohn+Roe"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
