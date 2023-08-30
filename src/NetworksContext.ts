// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import { createContext } from 'react';
import { NetworkType } from './networks/NetworkType.ts';

export const NetworkContext = createContext<Array<NetworkType>>([]);
