'use client';

import React, { useRef } from 'react';
import fixedForwardRef from '@/utils/fixedForwardRef';
import mergeRefs from 'merge-refs';
import Ripple from '@/components/Ripple';
import { cn } from '@/utils/cn';
import { Merge } from '@/types/utilities';

type CardActionAreaAllowedTags = React.ElementType<any, 'a' | 'button'>;

type CardActionAreaProps<T extends CardActionAreaAllowedTags = 'a'> = Merge<
  React.ComponentPropsWithRef<T>,
  {
    as?: T;
    isRippleVisible?: boolean;
  }
>;

export default fixedForwardRef(function CardActionArea<
  T extends CardActionAreaAllowedTags = 'a',
>(
  {
    as = 'a' as T,
    isRippleVisible = true,
    className,
    children,
    ...rest
  }: CardActionAreaProps<T>,
  ref: React.ForwardedRef<React.ElementRef<T>>
) {
  const Tag: CardActionAreaAllowedTags = as;
  const localRef = useRef<React.ElementRef<T>>(null);

  return rest?.href || rest?.onClick ? (
    <Tag
      ref={mergeRefs(ref, localRef)}
      {...rest}
      className={cn('d-block relative w-full overflow-hidden', className)}
    >
      {children}
      {isRippleVisible && (
        <Ripple
          targetRef={localRef as React.RefObject<HTMLElement>}
          variant='secondary'
        />
      )}
    </Tag>
  ) : (
    <>{children}</>
  );
});
