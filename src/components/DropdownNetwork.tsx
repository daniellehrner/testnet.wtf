// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import React, { MutableRefObject, useRef, useState, useEffect } from 'react';
import { useOnClickOutside } from 'use-hooks';
import { Link } from 'react-router-dom';
import { NetworksProps } from '../props/NetworksProps.ts';

export default function DropdownNetwork({ networks }: NetworksProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [networkItems, setNetworkItemss] = useState<Array<React.JSX.Element>>([]);

  const ref = useRef() as MutableRefObject<never>;
  useOnClickOutside(ref, () => setOpen(false));

  const handleClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const networkItems = networks.map((network) => {
      const lowerCaseName = network.name.toLowerCase();

      return (
        <li key={lowerCaseName} onClick={handleClick}>
          <Link to={'/' + lowerCaseName}>
            {network.name}
            {network.isDeprecated && <span className="badge badge-accent">deprecated</span>}
          </Link>
        </li>
      );
    });

    setNetworkItemss(networkItems);
  }, [networks]);

  return (
    <div
      // add toggle dropdown-open
      className={'dropdown' + (open ? ' dropdown-open' : '')}
      // add reference to the dropdown element
      ref={ref}>
      <label
        tabIndex={0}
        className="btn m-1 select"
        // toggle open when the button is clicked.
        onClick={() => setOpen((prev) => !prev)}>
        Select testnet
      </label>
      <ul
        tabIndex={0}
        // add hidden class when the dropdown is not open
        className={
          'dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52' + (!open ? ' hidden' : '')
        }>
        {networkItems}
      </ul>
    </div>
  );
}
