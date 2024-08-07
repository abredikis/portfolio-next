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

export type ButtonProps<T extends ButtonAllowedTags = 'a'> = ButtonVariants &
  Merge<
    React.ComponentPropsWithRef<T>,
    {
      as?: T;
    }
  >;

const buttonVariants = cva(
  'inline-flex select-none text-center justify-center relative font-medium py-[0.75em] px-[1.5em] rounded-lg overflow-hidden transition-colors cursor-pointer no-underline border-2 border-solid border-transparent',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white shadow-lg shadow-primary-400/20',
        secondary: 'bg-white text-primary-600 shadow-lg shadow-primary-400/20',
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
