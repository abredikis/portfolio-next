import { cn } from '@/utils/cn';

export type NavLinkProps = {
  text?: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function NavLink({
  id: key,
  className,
  children,
  text,
  ...rest
}: NavLinkProps) {
  return (
    <a
      key={text}
      {...rest}
      className={cn(
        'cursor-pointer transition-colors hover:text-primary-600',
        className
      )}
    >
      {children ? children : text}
    </a>
  );
}
