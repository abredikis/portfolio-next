export type NavLinkProps = {
  text?: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function NavLink({
  id: key,
  children,
  text,
  ...rest
}: NavLinkProps) {
  return (
    <a key={text} {...rest}>
      {children ? children : text}
    </a>
  );
}
