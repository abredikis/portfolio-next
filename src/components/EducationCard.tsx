import { Card } from './ui/Card';
import CardContent from './ui/Card/CardContent';
import { CardProps } from './ui/Card/Card';
import { cn } from '@/utils/cn';
import CardActionArea from './ui/Card/CardActionArea';
import { Education } from '@/types/education';

type EducationCardProps = {
  education: Education;
} & CardProps;

export default function EducationCard({
  className,
  children,
  education,
  ...rest
}: EducationCardProps) {
  return (
    <Card size='small' {...rest} className={cn('h-auto', className)}>
      <CardActionArea href={education.url} target='_blank'>
        <CardContent className='flex h-full flex-col'>
          <div>
            <h3 className='mb-[0.2em] text-balance font-semibold leading-tight text-primary-600 ~text-lg/xl'>
              {education.title}
            </h3>
            <p className='text-sm'>
              <span className='text-primary-500'>
                {' '}
                {education.source}
                {education.url && (
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
              {(education?.dateFrom || education?.dateTo) && (
                <span className='mx-3 font-extrabold'>·</span>
              )}
              {[education?.dateFrom, education?.dateTo]
                .filter((date) => date)
                .join(' - ')}
            </p>
          </div>
          <div className='mt-5 max-w-[65ch]'>
            {education?.content || children}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
