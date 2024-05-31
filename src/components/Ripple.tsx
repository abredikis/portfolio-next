"use client";

import { useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";
import useDebounce from "@/hooks/useDebounce";

type RippleProps = {
  className?: string;
  variant?: "primary" | "secondary";
  targetRef: React.RefObject<HTMLElement>;
};

type Ripple = {
  xPos: number;
  yPos: number;
};

interface RippleStyles extends React.CSSProperties {
  top: string;
  left: string;
  animationDuration: string;
}

const rippleVariants = cva(
  "ripple pointer-events-none select-none size-10 opacity-60 absolute rounded-full -ml-5 -mt-5 origin-center",
  {
    variants: {
      variant: {
        primary: "bg-primary-50",
        secondary: "bg-primary-500",
      },
    },
  }
);

export default function Ripple({
  className,
  variant = "primary",
  targetRef,
}: RippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const debouncedRipples = useDebounce(ripples);

  useEffect(() => {
    const target = targetRef.current;

    const handleClick = (e: MouseEvent) => {
      if (target) {
        const rect = target.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        const yPos = e.clientY - rect.top;
        setRipples((prev) => [...prev, { xPos, yPos }]);
      }
    };

    if (target) {
      target.addEventListener("click", handleClick);
    }

    return () => {
      if (target) {
        target.removeEventListener("click", handleClick);
      }
    };
  }, [targetRef]);

  useEffect(() => {
    setRipples([]);
  }, [debouncedRipples]);

  return (
    <>
      {ripples.map((ripple, index) => {
        return (
          <span
            key={index}
            className={cn(rippleVariants({ variant }), className)}
            style={
              {
                top: `${ripple.yPos}px`,
                left: `${ripple.xPos}px`,
              } as RippleStyles
            }
          ></span>
        );
      })}
    </>
  );
}
