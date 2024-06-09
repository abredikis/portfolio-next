export type NavLinkProps = {
  text?: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function NavLink({ children, text, ...rest }: NavLinkProps) {
  return <a {...rest}>{children ? children : text}</a>;
}
