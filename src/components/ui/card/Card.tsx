'use client';

import React from 'react';
import fixedForwardRef from '@/utils/fixedForwardRef';
import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import { CardProvider } from './CardContext';
import { Merge } from '@/types/utilities';

type CardAllowedTags = ('div' | 'article' | 'section' | 'figure') &
  React.ElementType;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

export type CardVariants = {
  size?: 'large' | 'small';
  variant?: 'primary' | 'secondary';
};

const cardVariants = cva('bg-white flex flex-col', {
  variants: {
    size: {
      large: '~p-6/8 rounded-3xl',
      small: '~p-4/6 rounded-2xl',
    },
  },
});

type CardProps<T extends CardAllowedTags = 'div'> = CardVariants &
  Merge<
    React.ComponentPropsWithRef<T>,
    {
      as?: T;
    }
  >;

export default fixedForwardRef(function Card<T extends CardAllowedTags = 'div'>(
  {
    as = 'div' as T,
    variant = 'primary',
    size = 'large',
    className,
    children,
    ...rest
  }: CardProps<T>,
  ref: PolymorphicRef<T>
) {
  const Tag: React.ElementType = as;
  return (
    <CardProvider size={size}>
      <Tag
        ref={ref}
        {...rest}
        className={cn(cardVariants({ size }), className)}
      >
        {children}
      </Tag>
    </CardProvider>
  );
});
