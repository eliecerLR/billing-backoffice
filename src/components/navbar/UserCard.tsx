//main
import React from 'react';
import { FC, useState } from 'react';
import '../../../globals.css';
import Image from 'next/image';

//assets
import ArrowDownIcon from '../../../public/assets/utilities/arrow-down.svg';

interface userCardProps {
  name: string;
  imageUrl: string;
}

const UserCard = (props: userCardProps) => {
  const { name, imageUrl } = props;
  return (
    <div className="flex items-center justify-center space-x-4 text-center">
      <div className="rounded-full">
        <Image
          className="rounded-full"
          src={imageUrl}
          width={48}
          height={48}
          alt="Picture of the author"
        />
      </div>
      <h3 className="text-original-bone text-xl">{name}</h3>
      <ArrowDownIcon />
    </div>
  );
};

export default UserCard;
