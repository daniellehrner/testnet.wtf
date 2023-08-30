// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import { NetworkDetailProps } from '../props/NetworkDetailProps.ts';

export default function NetworkDetails({ network }: NetworkDetailProps) {
  return <div>{network.name}</div>;
}
