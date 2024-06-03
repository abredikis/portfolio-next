import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef } from 'react';

type TagProps = ComponentPropsWithoutRef<'span'>;

export default function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      {...props}
      className={cn(
        'rounded-[4px] bg-primary-500 bg-opacity-5 px-[0.8em] py-[0.42em] text-sm font-medium leading-relaxed text-primary-500',
        className
      )}
    >
      {children}
    </span>
  );
}
