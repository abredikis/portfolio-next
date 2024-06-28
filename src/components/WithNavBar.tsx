'use client';
import { useEffect, useLayoutEffect, useState } from 'react';
import NavBar from './ui/NavBar/NavBar';
import useMediaQuery from '@/hooks/useMediaQuery';
import getMediaQuery from '@/utils/getMediaQuery';
import useScrollPosition from '@/hooks/useScrollPosition';

export default function WithNavBar() {
  const [isDesktop, setIsDesktop] = useState(true);
  const isLargeScreen = useMediaQuery(getMediaQuery('xl'));
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useLayoutEffect(() => {
    setIsDesktop(isLargeScreen);
  }, [isLargeScreen]);

  useEffect(() => {
    setIsScrolled(!!(scrollPosition && scrollPosition > 0));
  }, [scrollPosition]);

  return (
    <NavBar
      navItems={[
        {
          itemType: 'link',
          text: 'Experience',
        },
        {
          itemType: 'link',
          text: 'Projects',
        },
        {
          itemType: 'button',
          href: '/files/Alberts_Bredikis_Resume.pdf',
          target: '_blank',
          rel: 'noopener noreferrer',
          variant:
            (isDesktop && isScrolled) || !isDesktop ? 'primary' : 'secondary',
          size: 'small',
          text: 'Resume',
        },
      ]}
    />
  );
}
