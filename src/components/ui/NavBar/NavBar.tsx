'use client';
import { cn } from '@/utils/cn';
import NavItem, { NavItemProps } from './NavItem';
import { useEffect, useState } from 'react';
import useScrollPosition from '@/hooks/useScrollPosition';
import Burger from '@/components/ui/Burger';

export type NavBarProps = {
  navItems?: NavItemProps[];
} & React.ComponentPropsWithoutRef<'nav'>;

export default function NavBar({
  className,
  navItems,
  children,
  ...rest
}: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setHasScrolled(!!(scrollPosition && scrollPosition > 0));
  }, [scrollPosition]);

  return (
    <nav
      {...rest}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 mx-auto flex min-h-24 w-full items-center border-b border-transparent text-primary-900 transition',
        className,
        hasScrolled ? 'border-primary-100 bg-white' : ''
      )}
    >
      <div className='relative mx-auto flex w-full max-w-[90rem] items-center ~gap-6/9 ~px-5/24'>
        <div
          className={cn(
            'absolute top-0 z-10 flex flex-grow origin-[95%_15%] scale-0 flex-col items-center justify-end rounded-xl bg-white px-5 py-5 opacity-0 shadow-2xl shadow-primary-950/20 ~right-5/24 ~left-5/24 ~gap-6/9 [transition:transform_0.375s,opacity_0.225s] sm:left-auto sm:w-full sm:max-w-80 lg:shadow-none xl:static xl:w-auto xl:max-w-full xl:scale-100 xl:flex-row xl:bg-transparent xl:p-0 xl:opacity-100',
            isMenuOpen
              ? 'right-0 translate-y-[calc(51.5px+0.6rem)] scale-100 opacity-100 shadow-[0_5px_22px_theme(colors.primary.100)]'
              : ''
          )}
        >
          {navItems?.length &&
            navItems.map((item, key) => (
              <NavItem
                className='w-full text-center xl:w-auto'
                key={key}
                {...item}
              />
            ))}
        </div>
        <div className='ml-auto xl:hidden'>
          <Burger
            isActive={isMenuOpen}
            onClick={toggleMenu}
            variant='secondary'
            size='small'
          ></Burger>
        </div>
      </div>
    </nav>
  );
}
