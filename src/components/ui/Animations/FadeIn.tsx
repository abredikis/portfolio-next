'use client';

import { forwardRef, useEffect, useRef } from 'react';
import Animate, {
  AnimateAllowedTags,
  AnimateProps,
  PolymorphicRef,
} from './Animate';
import useTimeline from '../../../hooks/useTimeline';
import mergeRefs from 'merge-refs';

type FadeInProps<T extends AnimateAllowedTags> = {
  createTimelineOptions?: (
    target?: gsap.DOMTarget
  ) => gsap.TimelineVars | undefined;
} & AnimateProps<T>;

export default forwardRef(function FadeIn<T extends AnimateAllowedTags>(
  {
    timeline,
    createTimelineOptions = (target) => {
      return {
        scrollTrigger: {
          trigger: target,
          start: 'top bottom-=15%',
        },
      };
    },
    config,
    ...rest
  }: FadeInProps<T>,
  ref: PolymorphicRef<T>
) {
  const localRef = useRef<HTMLElement>(null);

  const localTimeline = useTimeline({
    timeline,
    createTimelineOptions,
    elementRef: localRef,
  });

  console.log(config);

  return (
    <Animate
      {...rest}
      ref={mergeRefs(ref, localRef)}
      timeline={localTimeline}
      config={{
        from: { opacity: 0, ...config?.from },
        to: {
          opacity: 1,
          ease: 'expo.out',
          duration: 1.6,
          stagger: {
            amount: 0.38,
          },
          ...config?.to,
        },
      }}
    />
  );
});
