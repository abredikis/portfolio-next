import { cn } from '@/utils/cn';
import Button, { ButtonProps } from './ui/Button';

type BurgerProps = {
  isActive: boolean;
} & Omit<ButtonProps<'button'>, 'as'>;

export default function Burger({ isActive, className, ...rest }: BurgerProps) {
  return (
    <Button as='button' {...rest} className={cn('p-[0.5em]', className)}>
      <svg
        height={24}
        width={24}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <rect
          className={cn(
            'origin-[12px_13px] transition-all',
            isActive ? 'rotate-45 scale-x-125' : ''
          )}
          width={20}
          height={2}
          x={2}
          y={isActive ? 12 : 9}
          fill='#000'
          rx='1'
        />
        <rect
          className={cn(
            'origin-[12px_13px] -translate-x-[10%] scale-x-[.7] transition-all',
            isActive ? 'translate-x-0 -rotate-45 scale-x-125' : ''
          )}
          width={20}
          height={2}
          x={isActive ? 2 : 5}
          y={isActive ? 12 : 15}
          fill='#000'
          rx='1'
        />
      </svg>
    </Button>
  );
}
