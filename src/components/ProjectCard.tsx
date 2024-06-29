import { Card } from './ui/Card';
import CardContent from './ui/Card/CardContent';
import { CardProps } from './ui/Card/Card';
import { cn } from '@/utils/cn';
import CardActionArea from './ui/Card/CardActionArea';
import { Project } from '@/types/project';
import Tag from './ui/Tag';
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
} & CardProps;

export default function ProjectCard({
  className,
  children,
  project,
  ...rest
}: ProjectCardProps) {
  return (
    <Card {...rest} className={cn('h-full', className)}>
      <CardActionArea
        href={project.url}
        target='_blank'
        className='h-full'
        rel='noreferrer nofollow'
      >
        <CardContent className='flex h-full max-w-full flex-col ~gap-8/6 md:flex-row xl:flex-col'>
          <div className='flex w-full flex-grow flex-col'>
            <h3 className='mb-[0.425em] text-balance font-semibold leading-tight text-primary-600 ~text-lg/xl'>
              {project.title}
            </h3>
            <div className='max-w-[65ch]'>{project.content || children}</div>
            {project.tags?.length && (
              <div className='mt-auto flex flex-wrap gap-x-2 gap-y-1 ~pt-6/7'>
                {project.tags.map((tagText) => (
                  <Tag key={tagText}>{tagText}</Tag>
                ))}
              </div>
            )}
          </div>
          {project.imageUrl && (
            <div className='-order-1 w-full md:order-last lg:max-w-72 xl:order-last xl:-mt-20 xl:max-w-full'>
              <Image
                className='my-0 w-full max-w-full origin-bottom overflow-hidden rounded-xl border border-primary-100 transition-transform xl:translate-y-24 xl:scale-[.985] xl:rounded-b-none xl:shadow-xl xl:shadow-primary-500/20 xl:group-hover:translate-y-20 xl:group-hover:scale-100'
                src={project.imageUrl}
                width={333}
                height={209}
                sizes='(max-width: 768px) 640px, 384px'
                quality={90}
                alt={`Preview of ${project.title} project`}
              />
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
