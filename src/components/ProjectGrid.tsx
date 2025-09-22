import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef, memo } from 'react';
import ProjectCard from './ProjectCard';
import previewCollective from '@public/preview-collective.png';
import previewTasks from '@public/preview-tasks.png';
import previewWorktime from '@public/preview-worktime.png';

import { Project } from '@/types/project';
import SplitText from './ui/SplitText';
import SlideUp from './ui/Animations/SlideUp';

const PROJECT_ENTRIES: Project[] = [
  {
    title: 'Task & Route Planning (Mapon)',
    imageUrl: previewTasks.src,
    url: 'https://www.mapon.com/en/fleet-management-solutions/cost-optimisation/task-route-planning',
    tags: [
      'React',
      'Redux Toolkit',
      'TypeScript',
      'Storybook',
      'Jest',
      'HTML & CSS',
      'Docker',
    ],
    content: (
      <p>
        Task & Route Planning – a fleet management solution that optimises
        routes, reduces empty kilometres, and simplifies task execution for
        dispatchers and drivers.
      </p>
    ),
  },
  {
    title: 'Worktime (Mapon)',
    imageUrl: previewWorktime.src,
    url: 'https://www.mapon.com/en/fleet-management-solutions/process-automation/worktime',
    tags: [
      'React',
      'Redux Toolkit',
      'TypeScript',
      'Storybook',
      'Jest',
      'HTML & CSS',
      'Docker',
    ],
    content: (
      <p>
        Worktime - a workforce management solution for accurate time tracking,
        payroll, and productivity via web and mobile apps.
      </p>
    ),
  },
  {
    title: 'Collective Art & Tattoo Studio',
    imageUrl: previewCollective.src,
    url: 'https://collectivearttattoostudio.com/en/',
    tags: [
      'React',
      'JavaScript',
      'HTML & CSS',
      'WordPress',
      'PHP',
      'Docker',
      'UX & UI',
    ],
    content: (
      <p>
        Marketing website for a Latvian tattoo studio. Designed, developed and
        launched a complete website overhaul.
      </p>
    ),
  },
];

type ProjectGridProps = {} & ComponentPropsWithoutRef<'section'>;

function ProjectGrid({ className, ...rest }: ProjectGridProps) {
  return (
    <section
      id='projects'
      {...rest}
      className={cn(
        'mx-auto flex w-full max-w-[90rem] flex-col items-center justify-center ~my-8/16 ~px-5/24 ~py-6/12',
        className
      )}
    >
      <SlideUp as='div' className='~xl:~mb-6/8' selector='span'>
        <SplitText split='chars'>
          <h2 className='mb-[0.225em] text-balance text-center font-semibold leading-tight text-primary-900 ~text-3xl/4xl'>
            My Work
          </h2>
          <p className='text-center'>A few of my favorite projects</p>
        </SplitText>
      </SlideUp>
      <div className='grid w-full grid-cols-6 place-items-center ~xl:~gap-6/8 xl:grid-cols-12'>
        {PROJECT_ENTRIES.map((item, index) => (
          <SlideUp
            key={index}
            intensity='weak'
            as='div'
            className='col-span-6 h-full w-full xl:col-span-4'
          >
            <ProjectCard size='small' className='w-full' project={item} />
          </SlideUp>
        ))}
      </div>
    </section>
  );
}

export default memo(ProjectGrid);
