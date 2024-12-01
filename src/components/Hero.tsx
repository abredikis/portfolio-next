'use client';

import Button from './ui/Button';
import Image from 'next/image';
import authorImage from '@public/author.png';
import SplitText from './ui/SplitText';
import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SlideUp from './ui/Animations/SlideUp';
import FadeIn from './ui/Animations/FadeIn';
import useTimeline from '@/hooks/useTimeline';
import smoothScrollTo from '@/utils/smoothScrollTo';

gsap.registerPlugin(ScrollTrigger);
type HeroProps = React.ComponentPropsWithoutRef<'section'>;

export default function Hero({ className, ...rest }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const timeline = useTimeline({
    createTimelineOptions: (target) => {
      return {
        scrollTrigger: {
          trigger: target,
        },
      };
    },
  });

  return (
    <section
      {...rest}
      className={cn(
        'relative flex min-h-[min(calc(95dvh-theme(spacing.24)),48rem)] flex-col justify-start lg:justify-center',
        className
      )}
      ref={sectionRef}
    >
      <div className='mx-auto w-full max-w-[90rem] ~px-5/24 ~py-6/12'>
        <div className='flex flex-wrap items-center justify-center md:~sm/xxl:~-mx-3/8 lg:flex-nowrap'>
          <FadeIn
            as='div'
            className='relative mb-8 w-full max-w-[384px] overflow-hidden rounded-xl md:~sm/xxl:~mx-3/8 lg:mb-0 xl:max-w-[420px]'
            timeline={timeline}
            config={{
              to: {
                delay: 0.2,
              },
            }}
          >
            <Image
              src={authorImage}
              fetchPriority='high'
              priority={true}
              quality={100}
              alt='Portrait of Alberts Bredikis'
              sizes='420px'
              className='relative z-0 aspect-[1/1.22] w-full object-cover'
            />
            <div className='pointer-events-none absolute inset-0 z-10 bg-primary-500 bg-opacity-10 mix-blend-lighten'></div>
          </FadeIn>
          <div className='basis-full pl-0 md:basis-auto md:~sm/xxl:~px-3/8'>
            <SlideUp
              as='span'
              selector='span span'
              intensity='strong'
              timeline={timeline}
              timelinePosition={'<10%'}
            >
              <SplitText
                split='chars'
                wrapperClass='[clip-path:polygon(0_0,_100%_0,_100%_100%,_0%_100%)] whitespace-nowrap'
              >
                <h1 className='mb-3 text-center font-medium !leading-[1.1] tracking-tight text-primary-900 ~/md:~text-4xl/5xl md:~text-5xl/6xl lg:text-left'>
                  Hey, <br className='hidden xl:inline' />
                  I'm Albert
                </h1>
              </SplitText>
            </SlideUp>
            <SlideUp
              as='span'
              selector='span span'
              timeline={timeline}
              timelinePosition={'<25%'}
            >
              <SplitText split='words'>
                <p className='mx-auto mb-8 max-w-[46ch] text-center !leading-relaxed text-primary-900 ~text-base/lg lg:mx-0 lg:text-left'>
                  a results-driven web developer with 4 years of success
                  crafting clean, reusable code to enhance page speed, elevate
                  user experience and improve SEO performance.
                </p>
              </SplitText>
            </SlideUp>
            <SlideUp
              as='div'
              className='flex flex-wrap ~gap-3/4'
              timeline={timeline}
              timelinePosition={'<25%'}
            >
              <Button
                as='a'
                className='min-w-fit flex-grow basis-0 xl:flex-grow-0'
                href='mailto:bredikisalberts@gmail.com'
              >
                Get in touch
              </Button>
              <Button
                as='button'
                className='min-w-fit flex-grow basis-0 xl:flex-grow-0'
                variant='secondary'
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('#projects');
                }}
              >
                View projects
              </Button>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
}
