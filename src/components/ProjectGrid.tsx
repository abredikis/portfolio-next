import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef } from 'react';
import ProjectCard from './ProjectCard';
import previewAkola from '@public/preview-akola.png';
import previewCollective from '@public/preview-collective.png';
import previewVKU from '@public/preview-vku.png';
import previewTimbero from '@public/preview-timbero.png';
import previewTimberHomz from '@public/preview-timberhomz.png';
import previewDaupro from '@public/preview-daupro.png';

import { Project } from '@/types/project';

type ProjectGridProps = {} & ComponentPropsWithoutRef<'section'>;
export default function ProjectGrid({ className, ...rest }: ProjectGridProps) {
  const projects: Project[] = [
    {
      title: 'Collective Art & Tattoo Studio',
      imageUrl: previewCollective.src,
      url: 'https://www.akolagroup.lt/',
      tags: [
        'UX & UI',
        'WordPress',
        'PHP',
        'Docker',
        'React',
        'JavaScript',
        'HTML & CSS',
      ],
      content: (
        <p>
          Akola Group is an investment company specializing in agriculture and
          food production in the Baltics. With over 60 subsidiaries.
        </p>
      ),
    },
    {
      title: 'Akola Group',
      imageUrl: previewAkola.src,
      url: 'https://www.akolagroup.lt/en/',
      tags: ['WordPress', 'PHP', 'Docker', 'React', 'JavaScript', 'HTML & CSS'],
      content: (
        <p>
          Akola Group is an investment company specializing in agriculture and
          food production in the Baltics, with over 60 subsidiaries.
        </p>
      ),
    },
    {
      title: 'Vilnius Credit Union',
      imageUrl: previewVKU.src,
      url: 'https://www.vilniauskreditounija.lt/',
      tags: ['WordPress', 'PHP', 'JavaScript', 'HTML & CSS'],
      content: (
        <p>
          Vilnius Credit Union offers savings accounts, loans, and investments,
          helping people and businesses manage their finances effectively.
        </p>
      ),
    },
    {
      title: 'Timbero',
      imageUrl: previewTimbero.src,
      url: 'https://www.timbero.lv/',
      tags: ['WordPress', 'PHP', 'jQuery', 'HTML & CSS'],
      content: (
        <p>
          Akola Group is an investment company specializing in agriculture and
          food production in the Baltics. With over 60 subsidiaries.
        </p>
      ),
    },
    {
      title: 'Daupro',
      imageUrl: previewDaupro.src,
      url: 'https://daupro.com/en/',
      tags: ['WordPress', 'PHP', 'jQuery', 'HTML & CSS'],
      content: (
        <p>
          Akola Group is an investment company specializing in agriculture and
          food production in the Baltics. With over 60 subsidiaries.
        </p>
      ),
    },
    {
      title: 'Timber Homz',
      imageUrl: previewTimberHomz.src,
      url: 'https://timberhomz.ie/',
      tags: ['WordPress', 'PHP', 'jQuery', 'HTML & CSS'],
      content: (
        <p>
          Akola Group is an investment company specializing in agriculture and
          food production in the Baltics. With over 60 subsidiaries.
        </p>
      ),
    },
  ];

  return (
    <section
      {...rest}
      className={cn(
        'mx-auto flex w-full max-w-[90rem] flex-col items-center justify-center ~px-5/24 ~py-12/24',
        className
      )}
    >
      <div className='prose ~xl:~mb-6/8'>
        <h2 className='text-center'>My Work</h2>
        <p className='text-center'>A few of my favorite projects</p>
      </div>
      <div className='grid w-full grid-cols-6 grid-rows-12 place-items-center ~xl:~gap-x-4/6 ~xl:~gap-y-6/7 xl:grid-cols-12'>
        {projects.map((item, index) => (
          <ProjectCard
            className='col-span-6 w-full xl:col-span-4'
            key={index}
            project={item}
          />
        ))}
      </div>
    </section>
  );
}
