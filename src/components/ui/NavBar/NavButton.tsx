import Button, { ButtonProps } from '../Button';

export type NavButtonProps = {
  text?: string;
} & ButtonProps;

export default function NavButton({ children, text, ...rest }: NavButtonProps) {
  return (
    <Button key={text} {...rest}>
      {children ? children : text}
    </Button>
  );
}
