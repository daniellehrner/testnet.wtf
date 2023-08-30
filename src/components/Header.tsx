// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import DropdownNetwork from './DropdownNetwork';
import { NetworksProps } from '../props/NetworksProps.ts';

export default function Header({ networks }: NetworksProps) {
  const isHome = useLocation().pathname === '/';

  return (
    <header className="navbar sticky top-0 rounded-box">
      <div className="flex-1 px-2">
        {isHome ? (
          <p className="font-extrabold text-xl">testnet.wtf</p>
        ) : (
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        )}
      </div>
      <DropdownNetwork networks={networks} />
    </header>
  );
}
