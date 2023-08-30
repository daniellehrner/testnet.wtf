// Copyright 2023 - testnet.wtf contributors
// SPDX-License-Identifier: Apache-2.0

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer items-center p-4">
      <div className="items-center grid-flow-col">
        <p className="accent-content">Copyright © {currentYear}</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/daniellehrner/testnet.wtf" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
      </div>
    </footer>
  );
}
