'use client';

import React, { useRef } from 'react';
import fixedForwardRef from '@/utils/fixedForwardRef';
import mergeRefs from 'merge-refs';
import Ripple from '@/components/Ripple';
import { cn } from '@/utils/cn';

type CardActionAreaProps = {
  showRipple?: boolean;
} & React.ComponentPropsWithRef<'button'>;

export default fixedForwardRef(function CardActionArea(
  { showRipple = true, className, children, ...rest }: CardActionAreaProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const localRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={mergeRefs(ref, localRef)}
      {...rest}
      className={cn('d-block relative w-full overflow-hidden', className)}
    >
      {children}
      {showRipple && <Ripple targetRef={localRef} variant='secondary' />}
    </button>
  );
});
