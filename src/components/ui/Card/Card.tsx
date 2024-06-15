'use client';

import React from 'react';
import fixedForwardRef from '@/utils/fixedForwardRef';
import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import { CardProvider } from './CardContext';
import { Merge } from '@/types/utilities';

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

export type CardAllowedTags = ('div' | 'article' | 'section' | 'figure') &
  React.ElementType;

export type CardSize = 'large' | 'small';

export type CardVariants = {
  size?: CardSize;
};

const cardVariants = cva(
  'relative bg-white flex flex-col shadow-lg shadow-primary-100',
  {
    variants: {
      size: {
        large: 'rounded-3xl',
        small: 'rounded-2xl',
      },
    },
  }
);

export type CardProps<T extends CardAllowedTags = 'div'> = CardVariants &
  Merge<
    React.ComponentPropsWithRef<T>,
    {
      as?: T;
    }
  >;

export default fixedForwardRef(function Card<T extends CardAllowedTags = 'div'>(
  {
    as = 'div' as T,
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
