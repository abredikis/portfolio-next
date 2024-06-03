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
  variant?: 'primary';
};

const cardVariants = cva('relative bg-white flex flex-col', {
  variants: {
    variant: {
      primary: '',
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
    className,
    children,
    ...rest
  }: CardProps<T>,
  ref: PolymorphicRef<T>
) {
  const Tag: React.ElementType = as;
  return (
    <CardProvider>
      <Tag
        ref={ref}
        {...rest}
        className={cn(cardVariants({ variant }), className)}
      >
        {children}
      </Tag>
    </CardProvider>
  );
});
