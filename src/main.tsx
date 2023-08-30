// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './routes/Root.tsx';

import ErrorPage from './routes/ErrorPage.tsx';
import NetworkSelector from './components/NetworkSelector.tsx';

import NetworkDetails from './routes/NetworkDetails.tsx';
import { NetworkType } from './networks/NetworkType.ts';

import goerli from './networks/Goerli.ts';
import holesky from './networks/Holesky.ts';
import sepolia from './networks/Sepolia.ts';

const networks: Array<NetworkType> = [goerli, holesky, sepolia];

const networkRoutes: Array<RouteObject> = networks.map((network) => {
  const lowerCaseName = network.name.toLowerCase();

  return {
    path: `/${lowerCaseName}`,
    element: <NetworkDetails network={network} />
  };
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root networks={networks} />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <NetworkSelector /> }, ...networkRoutes]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
