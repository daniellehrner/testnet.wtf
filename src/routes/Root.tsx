// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import { Outlet } from 'react-router-dom';

import '../styles/Root.css';

import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import { NetworksProps } from '../props/NetworksProps.ts';

export default function Root({ networks }: NetworksProps) {
  return (
    <div className="md:container md:mx-auto">
      <Header networks={networks} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
