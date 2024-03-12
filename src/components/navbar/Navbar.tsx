//main
import React from 'react';
import { FC, useState } from 'react';
import '../../../globals.css';

//components
import UserCard from './UserCard';

interface navbarProps {
  name: string;
  navigation: string;
  imageUrl: string;
}

const Navbar = (props: navbarProps) => {
  const { name, navigation, imageUrl } = props;
  return (
    <div className=" text-original-bone font-custom overflow-auto">
      <div className="flex">
        <div className="w-1/5 mt-6 text-4xl font-bold">
          <h1>{`${navigation}`}</h1>
        </div>
        <div className="w-1/5 mt-6 ml-auto mr-4">
          <UserCard name={name} imageUrl={imageUrl} />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg text-original-cyan">{`Welcome, ${name}!`}</p>
      </div>
    </div>
  );
};

export default Navbar;
