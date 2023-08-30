// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import { ReactNode } from 'react';
import { NetworkType } from '../networks/NetworkType.ts';

export type NetworkDetailProps = {
  network: NetworkType;
  children?: ReactNode;
};
