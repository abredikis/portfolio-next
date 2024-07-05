'use client';

import { forwardRef, useRef } from 'react';
import Animate, {
  AnimateAllowedTags,
  AnimateProps,
  PolymorphicRef,
} from './Animate';
import useTimeline from '../../../hooks/useTimeline';
import mergeRefs from 'merge-refs';

type SlideDownProps<T extends AnimateAllowedTags> = {
  createTimelineOptions?: (
    target?: gsap.DOMTarget
  ) => gsap.TimelineVars | undefined;
} & AnimateProps<T>;

export default forwardRef(function SlideDown<T extends AnimateAllowedTags>(
  {
    timeline,
    createTimelineOptions = (target) => {
      return {
        scrollTrigger: {
          trigger: target,
          start: 'top bottom-=10%',
        },
      };
    },
    config,
    ...rest
  }: SlideDownProps<T>,
  ref: PolymorphicRef<T>
) {
  const localRef = useRef<HTMLElement>(null);

  const localTimeline = useTimeline({
    timeline,
    createTimelineOptions,
    elementRef: localRef,
  });

  return (
    <Animate
      {...rest}
      ref={mergeRefs(ref, localRef)}
      timeline={localTimeline}
      config={{
        from: { translateY: '-50%', opacity: 0, ...config?.from },
        to: {
          translateY: 0,
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
