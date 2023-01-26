import React from 'react';
import Link from 'next/link';

import { Logo } from './styles';

export function LogoComponent() {
  return (
    <Link href="/">
      <Logo>
        <strong>MKS</strong> <span>Sistemas</span>
      </Logo>
    </Link>
  );
}
