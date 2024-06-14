import NavButton, { NavButtonProps } from './NavButton';
import NavLink, { NavLinkProps } from './NavLink';

type NavItemTypes = 'link' | 'button';

type BaseNavItemProps = {
  itemType?: NavItemTypes;
};

type LinkNavItemProps = {
  itemType?: 'link';
} & NavLinkProps;

type ButtonNavItemProps = {
  itemType: 'button';
} & NavButtonProps;

export type NavItemProps = BaseNavItemProps &
  (LinkNavItemProps | ButtonNavItemProps);

export default function NavItem({ id, itemType, ...rest }: NavItemProps) {
  if (itemType === 'link') {
    return <NavLink {...rest}></NavLink>;
  } else if (itemType === 'button') {
    return <NavButton {...rest}></NavButton>;
  }
}
