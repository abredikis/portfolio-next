import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef, memo } from 'react';
import ProjectCard from './ProjectCard';
import previewAkola from '@public/preview-akola.png';
import previewCollective from '@public/preview-collective.png';
import previewVKU from '@public/preview-vku.png';
import previewTimbero from '@public/preview-timbero.png';
import previewTimberHomz from '@public/preview-timberhomz.png';
import previewDaupro from '@public/preview-daupro.png';

import { Project } from '@/types/project';
import SplitText from './ui/SplitText';
import SlideUp from './ui/Animations/SlideUp';

const PROJECT_ENTRIES: Project[] = [
  {
    title: 'Collective Art & Tattoo Studio',
    imageUrl: previewCollective.src,
    url: 'https://collectivearttattoostudio.com/en/',
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
        Marketing website for a Latvian tattoo studio. Designed, developed and
        launched a complete website overhaul.
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
        Marketing website for a Lithuanian investment company specializing in
        agriculture and food production in the Baltics, with over 60
        subsidiaries.
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
        Marketing website for a trusted financial institution in Lithuania
        offering a wide range of services for individuals and businesses. With
        over 50 million euros in their loan portfolio.
      </p>
    ),
  },
  {
    title: 'Timbero',
    imageUrl: previewTimbero.src,
    url: 'https://timbero.lv/en/',
    tags: ['WordPress', 'PHP', 'jQuery', 'HTML & CSS'],
    content: (
      <p>
        Marketing website for a Latvian company specializing in the construction
        of timber houses. With over 15 years of experience and more than 800
        projects in 15 countries.
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
        Marketing website for a Latvian welding company specializing in
        metalworking, including railings, staircases, and other metal products.
      </p>
    ),
  },
  {
    title: 'Timber Homz',
    imageUrl: previewTimberHomz.src,
    url: 'https://timberhomz.ie/',
    tags: ['WordPress', 'PHP', 'JavaScript', 'HTML & CSS'],
    content: (
      <p>
        Marketing website for an Irish company specializing in modern,
        eco-friendly garden rooms, studios, and residential spaces.
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

export default memo(ProjectGrid)
