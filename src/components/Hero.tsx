import Button from './ui/Button';
import Image from 'next/image';
import authorImage from '@public/author.png';
type HeroProps = React.ComponentPropsWithoutRef<'section'>;

export default function Hero({ ...props }: HeroProps) {
  return (
    <section className='relative flex min-h-[calc(95dvh-theme(spacing.24))] flex-col justify-start lg:justify-center'>
      <div className='mx-auto w-full max-w-[90rem] ~px-6/24 ~py-4/8'>
        <div className='flex flex-wrap items-center justify-center md:~sm/xxl:~-mx-3/8 lg:flex-nowrap'>
          <div className='relative mb-8 w-full max-w-[380px] md:~sm/xxl:~px-3/8 lg:mb-0 xl:max-w-[469px]'>
            <Image
              src={authorImage}
              priority={true}
              quality={100}
              alt='Portrait of Alberts Bredikis'
              sizes='405px'
              className='relative z-0 aspect-[1/1.22] w-full rounded-xl object-cover'
            />
            <div className='pointer-events-none absolute inset-0 z-10 bg-primary-500 bg-opacity-10 mix-blend-lighten'></div>
          </div>
          <div className='basis-full pl-0 md:basis-auto md:~sm/xxl:~px-3/8'>
            <h1 className='mb-4 text-center font-medium !leading-[1.1] tracking-tight ~/md:~text-4xl/5xl md:~text-5xl/6xl lg:text-left'>
              Hey, <br className='hidden xl:inline' /> I'm Albert
            </h1>
            <p className='mx-auto mb-8 max-w-[46ch] text-center !leading-relaxed ~text-base/lg lg:mx-0 lg:text-left'>
              a results-driven web developer with 4 years of success crafting
              clean, reusable code to enhance page speed, elevate user
              experience and improve SEO performance.
            </p>
            <div className='flex flex-wrap ~gap-3/4'>
              <Button className='min-w-fit flex-grow basis-0 xl:flex-grow-0'>
                Get in touch
              </Button>
              <Button
                className='min-w-fit flex-grow basis-0 xl:flex-grow-0'
                variant='secondary'
              >
                View projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
