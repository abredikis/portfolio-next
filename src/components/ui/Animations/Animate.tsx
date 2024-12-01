'use client';

import React, { memo, useRef } from 'react';
import fixedForwardRef from '@/utils/fixedForwardRef';
import { Merge } from '@/types/utilities';
import { cn } from '@/utils/cn';
import mergeRefs from 'merge-refs';
import { useGSAP } from '@gsap/react';

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

export type AnimateAllowedTags = React.ElementType;

type ConfigWithoutTimeline = {
  timeline?: undefined;
  timelinePosition?: undefined;
};

type ConfigWithTimeline = {
  timeline: gsap.core.Timeline | null;
  timelinePosition?: gsap.Position;
};

type ConfigTimelineSettings = ConfigWithoutTimeline | ConfigWithTimeline;

export type AnimateProps<T extends AnimateAllowedTags = 'div'> = {
  config: {
    to?: gsap.TweenVars;
    from?: gsap.TweenVars;
  };
  selector?: string;
} & Merge<
  React.ComponentPropsWithRef<T>,
  {
    as?: T;
  }
> &
  ConfigTimelineSettings;

function Animate<T extends AnimateAllowedTags = 'div'>(
  {
    as = 'div' as T,
    className,
    children,
    selector = '& > *',
    config,
    timeline,
    timelinePosition = '>',
    ...rest
  }: AnimateProps<T>,
  ref: PolymorphicRef<T>
) {
  const Tag: React.ElementType = as;
  const localRef = useRef<React.ElementRef<T>>(null);

  useGSAP(
    () => {
      if (!timeline || !localRef.current || !config) return;

      timeline.to(
        localRef.current,
        {
          opacity: 1,
        },
        timelinePosition
      );

      if (config.from && config.to) {
        timeline.fromTo(selector, config.from, config.to, timelinePosition);
      } else if (config.from) {
        timeline.from(selector, config.from, timelinePosition);
      } else if (config.to) {
        timeline.to(selector, config.to, timelinePosition);
      }
    },
    { dependencies: [timeline], scope: localRef }
  );

  return (
    <Tag
      ref={mergeRefs(ref, localRef)}
      {...rest}
      className={cn('animate opacity-0', className)}
    >
      {children}
    </Tag>
  );
}

export default memo(fixedForwardRef(Animate));
