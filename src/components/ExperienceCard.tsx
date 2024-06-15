import { Card } from './ui/Card';
import CardContent from './ui/Card/CardContent';
import { CardProps } from './ui/Card/Card';
import Image, { ImageProps } from 'next/image';
import Tag from './ui/Tag';
import { cn } from '@/utils/cn';

type ExperienceCardProps = {
  cardTitle: string;
  cardImageSrc: ImageProps['src'];
  cardTags?: string[];
  cardDateFrom?: string;
  cardDateTo?: string;
} & CardProps;

export default function ExperienceCard({
  className,
  children,
  cardImageSrc,
  cardTitle,
  cardTags,
  cardDateFrom,
  cardDateTo,
  ...rest
}: ExperienceCardProps) {
  return (
    <Card {...rest} className={cn('h-auto', className)}>
      <CardContent className='flex h-full flex-col'>
        <div className='flex flex-wrap items-center gap-x-6 gap-y-4'>
          {cardImageSrc && (
            <Image
              className='m-0 shrink-0 ~size-14/16 ~max-w-14/16'
              src={cardImageSrc}
              width={64}
              height={64}
              alt='Logo'
            />
          )}
          <div className=''>
            <h3 className='mt-0 text-primary-600'>{cardTitle}</h3>
            <p className='mb-0 text-sm'>
              {[cardDateFrom, cardDateTo].filter((date) => date).join(' - ')}
            </p>
          </div>
        </div>
        <div className='not-prose ~my-6/7'>{children}</div>
        {Array.isArray(cardTags) && cardTags.length && (
          <div className='mt-auto flex flex-wrap gap-x-2 gap-y-1'>
            {cardTags.map((tagText) => (
              <Tag key={tagText}>{tagText}</Tag>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
