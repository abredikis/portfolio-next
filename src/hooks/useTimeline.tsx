import { useState, RefObject } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Define the types for the hook's parameters and return value
export type CreateTimelineOptions = (
  target?: gsap.DOMTarget
) => gsap.TimelineVars | undefined;

interface UseTimelineProps {
  timeline?: gsap.core.Timeline | null;
  createTimelineOptions?: CreateTimelineOptions;
  elementRef?: RefObject<HTMLElement>;
}

export default function useTimeline({
  timeline,
  createTimelineOptions,
  elementRef,
}: UseTimelineProps = {}): gsap.core.Timeline | null {
  const [localTimeline, setLocalTimeline] = useState<gsap.core.Timeline | null>(
    null
  );

  useGSAP(() => {
    if (timeline !== undefined) {
      setLocalTimeline(timeline);
    } else if (elementRef && elementRef.current) {
      setLocalTimeline(
        gsap.timeline(
          createTimelineOptions ? createTimelineOptions(elementRef.current) : {}
        )
      );
    } else {
      setLocalTimeline(gsap.timeline());
    }
  }, [timeline, elementRef]);

  return localTimeline;
}
