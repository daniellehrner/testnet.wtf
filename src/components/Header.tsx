// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import { Link, useLocation } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const isHome = useLocation().pathname === "/";

  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="flex-1">
        {isHome ? (
          <p className="normal-case text-xl">testnet.wtf</p>
        ) : (
          <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
        )}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Select testnet</summary>
              <ul className="p-2 bg-base-100">
                <li><Link to="holesky">Holesky</Link></li>
                <li><Link to="goerli">Goerli<span className="badge badge-accent">deprecated</span></Link></li>
                <li><Link to="sepolia">Sepolia</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}