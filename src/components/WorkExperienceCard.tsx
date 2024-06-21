import { Card } from './ui/Card';
import CardContent from './ui/Card/CardContent';
import { CardProps } from './ui/Card/Card';
import Image from 'next/image';
import Tag from './ui/Tag';
import { cn } from '@/utils/cn';
import CardActionArea from './ui/Card/CardActionArea';
import { WorkExperience } from '@/types/workExperience';

type WorkExperienceCardProps = {
  workExperience: WorkExperience;
} & CardProps;

export default function WorkExperienceCard({
  className,
  children,
  workExperience,
  ...rest
}: WorkExperienceCardProps) {
  return (
    <Card {...rest} className={cn('h-auto', className)}>
      <CardActionArea href={workExperience.url} target='_blank'>
        <CardContent className='flex h-full flex-col'>
          <div className='flex flex-wrap items-center gap-x-6 gap-y-4'>
            {workExperience.logoUrl && (
              <Image
                className='shrink-0 overflow-hidden rounded-xl ~size-14/16 ~max-w-14/16'
                src={workExperience.logoUrl}
                width={64}
                height={64}
                alt={`Logo of ${workExperience.title}`}
              />
            )}
            <div>
              <h3 className='mb-[0.2em] text-balance font-semibold leading-tight text-primary-600 ~text-lg/xl'>
                {workExperience.role}
              </h3>
              <p className='text-sm'>
                <span className='text-primary-600'>
                  {workExperience.title}
                  {workExperience.url && (
                    <span className='relative ml-1 inline-flex size-3 items-center justify-center overflow-hidden'>
                      <svg
                        className='absolute inset-0 size-3 -translate-x-3 translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0'
                        fill='currentColor'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.2'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M5.636 18.364 18.364 5.636m0 0h-9.9m9.9 0v9.9'></path>
                      </svg>
                      <svg
                        className='absolute inset-0 size-3 translate-x-0 translate-y-0 transition-transform group-hover:-translate-y-3 group-hover:translate-x-3'
                        fill='currentColor'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.2'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M5.636 18.364 18.364 5.636m0 0h-9.9m9.9 0v9.9'></path>
                      </svg>
                    </span>
                  )}
                </span>
                <span className='mx-3 font-extrabold'>·</span>
                {[workExperience?.dateFrom, workExperience?.dateTo]
                  .filter((date) => date)
                  .join(' - ')}
              </p>
            </div>
          </div>
          <div className='max-w-[65ch] ~my-6/7'>
            {workExperience?.content || children}
          </div>
          {workExperience?.tags?.length && (
            <div className='mt-auto flex flex-wrap gap-x-2 gap-y-1'>
              {workExperience.tags.map((tagText) => (
                <Tag key={tagText}>{tagText}</Tag>
              ))}
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
