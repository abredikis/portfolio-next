'use client';
import { forwardRef, useRef } from 'react';
import Animate, {
  AnimateAllowedTags,
  AnimateProps,
  PolymorphicRef,
} from './Animate';
import useTimeline from '../../../hooks/useTimeline';
import mergeRefs from 'merge-refs';

type SlideUpIntensity = 'weak' | 'normal' | 'strong';

type SlideUpProps<T extends AnimateAllowedTags = 'div'> = {
  intensity: 'weak' | 'normal' | 'strong';
  createTimelineOptions?: (
    target?: gsap.DOMTarget
  ) => gsap.TimelineVars | undefined;
} & AnimateProps<T>;

const ANIMATION_INTENSITY: Record<SlideUpIntensity, gsap.TweenVars> = {
  weak: { translateY: '15%', opacity: 0 },
  normal: { translateY: '50%', opacity: 0 },
  strong: { translateY: '100%', opacity: 0 },
};

export default forwardRef(function SlideUp<
  T extends AnimateAllowedTags = 'div',
>(
  {
    intensity = 'normal',
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
  }: SlideUpProps<T>,
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
        from: { ...ANIMATION_INTENSITY[intensity], ...config?.from },
        to: {
          translateY: 0,
          opacity: 1,
          ease: 'expo.out',
          duration: 1.625,
          stagger: {
            amount: 0.4,
          },
          ...config?.to,
        },
      }}
    />
  );
});
