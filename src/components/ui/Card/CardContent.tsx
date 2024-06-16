'use client';

import fixedForwardRef from '@/utils/fixedForwardRef';
import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import { useCardContext } from './CardContext';

type CardContentProps = React.ComponentPropsWithRef<'div'>;

const cardContentVariants = cva('d-block w-full text-left prose', {
  variants: {
    size: {
      large: '~p-6/8',
      small: 'p-6',
    },
  },
});

export default fixedForwardRef(function CardContent(
  { className, children, ...rest }: CardContentProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { size } = useCardContext();
  return (
    <div
      ref={ref}
      {...rest}
      className={cn(cardContentVariants({ size }), className)}
    >
      {children}
    </div>
  );
});
