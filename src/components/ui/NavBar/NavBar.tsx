import { cn } from '@/utils/cn';
import NavItem, { NavItemProps } from './NavItem';

export type NavBarProps = {
  navItems?: NavItemProps[];
} & React.ComponentPropsWithoutRef<'nav'>;

export default function NavBar({
  className,
  navItems,
  children,
  ...rest
}: NavBarProps) {
  return (
    <nav
      {...rest}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-[90rem] py-6 ~px-6/24',
        className
      )}
    >
      <div className='flex items-center justify-end gap-9'>
        {navItems?.length &&
          navItems.map(({ key, ...rest }) => <NavItem key={key} {...rest} />)}
      </div>
    </nav>
  );
}
