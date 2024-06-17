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
          <div className=''>
            <h3 className='mt-0 text-balance text-xl font-semibold text-primary-600'>
              {education.title}
            </h3>
            <p className='mb-0 text-sm'>
              <span className='text-primary-500'> {education.source}</span>
              {(education?.dateFrom || education?.dateTo) && (
                <span className='mx-2 font-extrabold'>·</span>
              )}
              {[education?.dateFrom, education?.dateTo]
                .filter((date) => date)
                .join(' - ')}
            </p>
          </div>
          <div className='not-prose mt-6'>{education?.content || children}</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
