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
    <Card {...rest} className={cn('h-auto', className)}>
      <CardActionArea href={project.url} target='_blank'>
        <CardContent className='flex h-full flex-col items-center gap-6 md:flex-row xl:flex-col'>
          <div>
            <h3 className='mt-0 text-balance font-semibold text-primary-600 ~text-xl/2xl'>
              {project.title}
            </h3>
            <div className='mt-3'>{project.content || children}</div>
            {project.tags?.length && (
              <div className='flex flex-wrap gap-x-2 gap-y-1 ~mt-6/7'>
                {project.tags.map((tagText) => (
                  <Tag key={tagText}>{tagText}</Tag>
                ))}
              </div>
            )}
          </div>
          {project.imageUrl && (
            <div className='-order-1 w-full md:order-last lg:max-w-72 xl:order-last xl:-mt-20 xl:max-w-full'>
              <Image
                className='my-0 w-full origin-bottom overflow-hidden rounded-xl border border-white transition-transform sm:max-w-[500px] md:max-w-full xl:translate-y-24 xl:rounded-b-none xl:group-hover:translate-y-20 xl:group-hover:scale-100'
                src={project.imageUrl}
                width={333}
                height={209}
                sizes='(max-width:480px) 320px, (max-width: 768px) 500px, (max-width: 992px) 335px'
                alt={`Preview of ${project.title} project`}
              />
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
