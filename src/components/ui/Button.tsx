"use client";

import { Merge } from "@/types/utilities";
import { cn } from "@/utils/cn";
import fixedForwardRef from "@/utils/fixedForwardRef";
import { cva } from "class-variance-authority";
import React from "react";

type ButtonAllowedTags = "a" | "button" | "span" | React.ElementType<any>;

type ButtonVariants = {
  variant?: "primary" | "secondary";
  size?: "large" | "small";
};

type ButtonProps<T extends ButtonAllowedTags = "a"> = ButtonVariants &
  Merge<
    React.ComponentPropsWithRef<T>,
    {
      as?: T;
    }
  >;

const buttonVariants = cva(
  "inline-flex relative font-semibold py-[0.88em] px-[1.77em] rounded-lg transition overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 hover:bg-primary-600 transition text-white",
        secondary: "bg-white hover:bg-primary-50 text-primary-600",
      },
      size: {
        large: "text-lg",
        small: "text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  }
);

export default fixedForwardRef(function Button<
  T extends ButtonAllowedTags = "a"
>(
  {
    as = "a" as T,
    variant,
    size,
    className,
    children,
    ...rest
  }: ButtonProps<T>,
  ref: React.Ref<React.ElementRef<T>>
) {
  const Tag: ButtonAllowedTags = as;

  return (
    <Tag
      ref={ref}
      {...rest}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </Tag>
  );
});
