'use client';
import NavBar from '@/components/ui/NavBar/NavBar';
import Hero from '@/components/Hero';
import useMediaQuery from '@/hooks/useMediaQuery';
import getMediaQuery from '@/utils/getMediaQuery';
import { useEffect, useLayoutEffect, useState } from 'react';
import useScrollPosition from '@/hooks/useScrollPosition';
import ExperienceEducation from '@/components/ExperienceEducation';

export default function Home() {
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
    <main className='flex-grow pt-24'>
      <NavBar
        navItems={[
          {
            itemType: 'link',
            text: 'Portfolio',
          },
          {
            itemType: 'link',
            text: 'Contact Me',
          },
          {
            itemType: 'button',
            variant:
              (isDesktop && isScrolled) || !isDesktop ? 'primary' : 'secondary',
            size: 'small',
            text: 'Resume',
          },
        ]}
      />
      <Hero />
      <ExperienceEducation />
    </main>
  );
}
