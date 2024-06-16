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
                className='m-0 shrink-0 ~size-14/16 ~max-w-14/16'
                src={workExperience.logoUrl}
                width={64}
                height={64}
                alt={`Logo of ${workExperience.title}`}
              />
            )}
            <div className=''>
              <h3 className='mt-0 text-balance text-2xl font-semibold text-primary-600'>
                {workExperience.role}
              </h3>
              <p className='mb-0 text-sm'>
                <span className='text-primary-500'>{workExperience.title}</span>
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
