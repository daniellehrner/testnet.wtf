// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from "./routes/Root.tsx";

import ErrorPage from "./routes/ErrorPage.tsx";
import NetworkSelector from "./components/NetworkSelector.tsx";

import Holesky from "./routes/Holesky.tsx";
import Goerli from "./routes/Goerli.tsx";
import Sepolia from "./routes/Sepolia.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index:true, element: <NetworkSelector /> },
          {
            path: "/holesky",
            element: <Holesky />,
          },
          {
            path: "/goerli",
            element: <Goerli />,
          },
          {
            path: "/sepolia",
            element: <Sepolia />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
