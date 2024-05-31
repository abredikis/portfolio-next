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

export default function Ripple({ className, variant, targetRef }: RippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const animationDuration = 600;

  const rippleVariants = cva(
    "ripple size-10 opacity-60 absolute rounded-full -ml-5 -mt-5 origin-center",
    {
      variants: {
        variant: {
          primary: "bg-primary-50",
          secondary: "bg-primary-500",
        },
      },
    }
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        const yPos = e.clientY - rect.top;
        setRipples((prev) => [...prev, { xPos, yPos }]);
      }
    };

    const target = targetRef.current;

    if (target) {
      target.addEventListener("click", handleClick);
    }

    return () => {
      if (target) {
        target.removeEventListener("click", handleClick);
      }
    };
  }, [targetRef]);

  useDebounce(() => {
    setRipples([]);
  }, 400);

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
                animationDuration: `${animationDuration}ms`,
              } as RippleStyles
            }
          ></span>
        );
      })}
    </>
  );
}
