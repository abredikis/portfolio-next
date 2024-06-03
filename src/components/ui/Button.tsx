'use client';

import { Merge } from '@/types/utilities';
import { cn } from '@/utils/cn';
import fixedForwardRef from '@/utils/fixedForwardRef';
import { cva } from 'class-variance-authority';
import React, { useRef } from 'react';
import Ripple from '../Ripple';
import mergeRefs from 'merge-refs';

type ButtonAllowedTags = React.ElementType<any, 'a' | 'button' | 'span'>;

type ButtonVariants = {
  variant?: 'primary' | 'secondary';
  size?: 'large' | 'small';
};

type ButtonProps<T extends ButtonAllowedTags = 'a'> = ButtonVariants &
  Merge<
    React.ComponentPropsWithRef<T>,
    {
      as?: T;
    }
  >;

const buttonVariants = cva(
  'inline-flex select-none relative font-semibold py-[0.88em] px-[1.77em] rounded-lg transition overflow-hidden cursor-pointer no-underline',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 hover:bg-primary-600 transition text-white',
        secondary: 'bg-white hover:bg-primary-50 text-primary-600',
      },
      size: {
        large: 'text-lg',
        small: 'text-base',
      },
    },
  }
);

export default fixedForwardRef(function Button<
  T extends ButtonAllowedTags = 'a',
>(
  {
    as = 'a' as T,
    variant = 'primary',
    size = 'large',
    className,
    children,
    ...rest
  }: ButtonProps<T>,
  ref: React.ForwardedRef<React.ElementRef<T>>
) {
  const Tag: ButtonAllowedTags = as;
  const targetRef = useRef<React.ElementRef<T>>(null);
  return (
    <Tag
      ref={mergeRefs(ref, targetRef)}
      {...rest}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
      <Ripple
        targetRef={targetRef as React.RefObject<HTMLElement>}
        variant={variant}
      />
    </Tag>
  );
});
