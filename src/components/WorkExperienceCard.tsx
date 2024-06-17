import { Card } from './ui/Card';
import CardContent from './ui/Card/CardContent';
import { CardProps } from './ui/Card/Card';
import Image from 'next/image';
import Tag from './ui/Tag';
import { cn } from '@/utils/cn';
import CardActionArea from './ui/Card/CardActionArea';
import { WorkExperience } from '@/types/workExperience';
import { fromTheme } from 'tailwind-merge';

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
                className='m-0 shrink-0 overflow-hidden rounded-xl ~size-14/16 ~max-w-14/16'
                src={workExperience.logoUrl}
                width={64}
                height={64}
                alt={`Logo of ${workExperience.title}`}
              />
            )}
            <div>
              <h3 className='mt-0 text-balance font-semibold text-primary-600 ~text-xl/2xl'>
                {workExperience.role}
              </h3>
              <p className='mb-0 flex text-sm'>
                <span className='flex gap-1 text-primary-500'>
                  {workExperience.title}{' '}
                  {workExperience.url && (
                    <svg
                      width='14'
                      height='14'
                      fill='#0A54FF'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6Zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8Z'></path>
                    </svg>
                  )}
                </span>
                <span className='mx-2 font-extrabold'>·</span>
                {[workExperience?.dateFrom, workExperience?.dateTo]
                  .filter((date) => date)
                  .join(' - ')}
              </p>
            </div>
          </div>
          <div className='not-prose ~my-6/7'>
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
