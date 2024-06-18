import { WorkExperience } from '@/types/workExperience';
import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef } from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import logoFreelance from '@public/logo-freelance.svg';
import logoCivitta from '@public/logo-civitta.jpeg';
import logoBright from '@public/logo-bright.png';
import { Education } from '@/types/education';
import EducationCard from './EducationCard';
import ProjectCard from './ProjectCard';
import previewAkola from '@public/preview-desktop-akola.png';

type ExperienceEducationProps = {} & ComponentPropsWithoutRef<'section'>;
export default function ExperienceEducation({
  className,
  ...rest
}: ExperienceEducationProps) {
  const workExperience: WorkExperience[] = [
    {
      title: 'Freelance',
      logoUrl: logoFreelance.src,
      role: 'Web Developer',
      dateFrom: 'Aug 2023',
      dateTo: 'Present',
      tags: ['React', 'TypeScript', 'Tailwind', 'WordPress', 'PHP'],
      content: (
        <p className='~text-base/lg'>
          Develop WordPress solutions for diverse clients, ensuring
          pixel-perfect implementation, optimizing page speed, and creating
          seamless editor experiences. Work with notable clients such as Vilnius
          Credit Union, Girteka, and Akola Group.
        </p>
      ),
    },
    {
      title: 'Civitta',
      url: 'https://civitta.com/',
      logoUrl: logoCivitta.src,
      role: 'Mid WordPress Developer',
      dateFrom: 'May 2022',
      dateTo: 'Aug 2023',
      tags: [
        'WordPress',
        'PHP',
        'Docker',
        'Vue.js',
        'HTML & CSS',
        'jQuery',
        'JavaScript',
      ],
      content: (
        <p className='~text-base/lg'>
          Develop WordPress solutions for diverse clients, ensuring
          pixel-perfect implementation, optimizing page speed, and creating
          seamless editor experiences. Work with notable clients such as Vilnius
          Credit Union, Girteka, and Akola Group.
        </p>
      ),
    },
    {
      title: 'Bright',
      url: 'https://bright.lv/',
      logoUrl: logoBright.src,
      role: 'Junior WordPress Developer',
      dateFrom: '2021',
      dateTo: '2022',
      tags: ['WordPress', 'PHP', 'HTML & CSS', 'jQuery', 'JavaScript'],
      content: (
        <p className='~text-base/lg'>
          Develop WordPress solutions for diverse clients, ensuring
          pixel-perfect implementation, optimizing page speed, and creating
          seamless editor experiences. Work with notable clients such as Vilnius
          Credit Union, Girteka, and Akola Group.
        </p>
      ),
    },
  ];

  const education: Education[] = [
    {
      title: 'Vocational High School Degree in Computer Programming',
      source: 'Riga Technical College',
      dateFrom: '2016',
      dateTo: '2020',
      content: (
        <p className='text-base'>
          Acquired knowledge in software design, planning, development and
          maintainance. Gained proficiency in HTML, CSS, PHP, and SQL for web
          development, alongside foundational understanding of OOP and C, C++
          programming languages.
        </p>
      ),
    },
  ];

  const certificates: Education[] = [
    {
      title: 'Meta Front-End Developer',
      source: 'Meta on Coursera',
      dateFrom: '2024',
      url: 'https://www.coursera.org/account/accomplishments/professional-cert/4VFQC637NRTS',
      content: (
        <p className='text-base'>
          Acquired basics of essential front-end tech: HTML, CSS, Bootstrap,
          React, crafting dynamic, responsive web experiences.
        </p>
      ),
    },
  ];

  return (
    <section
      {...rest}
      className={cn(
        'mx-auto w-full max-w-[90rem] ~px-5/24 ~py-12/24',
        className
      )}
    >
      <div className='grid grid-cols-6 gap-x-6 ~gap-y-14/12 lg:grid-cols-12 lg:~lg:~gap-x-6/12'>
        <div className='col-span-6 flex flex-col items-center ~lg:~gap-6/8 lg:col-span-7'>
          <div>
            <h2 className='text-center'>Work Experience</h2>
            <p className='mb-0 text-center'>Work History Overview</p>
          </div>
          <div className='flex flex-col ~lg:~gap-4/6'>
            {workExperience.map((item, index) => (
              <WorkExperienceCard
                className='w-full'
                key={index}
                workExperience={item}
              />
            ))}
          </div>
        </div>
        <div className='col-span-6 flex flex-col gap-x-6 ~gap-y-14/12 lg:col-span-5 lg:~lg:~gap-x-6/12'>
          <div className='flex flex-col items-center ~lg:~gap-6/8'>
            <div>
              <h2 className='text-center'>Education</h2>
              <p className='mb-0 text-center'>Academic Background</p>
            </div>
            <div className='flex flex-col ~lg:~gap-4/6'>
              {education.map((item, index) => (
                <EducationCard
                  className='w-full'
                  key={index}
                  education={item}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center ~lg:~gap-6/8'>
            <div>
              <h2 className='text-center'>Certificates</h2>
              <p className='mb-0 text-center'>Acquired Certifications</p>
            </div>
            <div className='flex flex-col ~lg:~gap-4/6'>
              {certificates.map((item, index) => (
                <EducationCard
                  className='w-full'
                  key={index}
                  education={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='my-12 grid grid-cols-12 gap-6'>
        <ProjectCard
          className='col-span-12 xl:col-span-4'
          project={{
            title: 'Akola Group',
            url: 'https://www.akolagroup.lt',
            imageUrl: previewAkola.src,
            tags: ['React', 'TypeScript', 'Tailwind', 'WordPress', 'PHP'],
            content: (
              <p className='~text-base/lg'>
                Akola Group is an investment company specializing in agriculture
                and food production in the Baltics, with over 60 subsidiaries.
              </p>
            ),
          }}
        />
        <ProjectCard
          className='col-span-12 xl:col-span-4'
          project={{
            title: 'Akola Group',
            url: 'https://www.akolagroup.lt',
            imageUrl: previewAkola.src,
            tags: ['React', 'TypeScript', 'Tailwind', 'WordPress', 'PHP'],
            content: (
              <p className='~text-base/lg'>
                Akola Group is an investment company specializing in agriculture
                and food production in the Baltics, with over 60 subsidiaries.
              </p>
            ),
          }}
        />
        <ProjectCard
          className='col-span-12 xl:col-span-4'
          project={{
            title: 'Akola Group',
            url: 'https://www.akolagroup.lt',
            imageUrl: previewAkola.src,
            tags: ['React', 'TypeScript', 'Tailwind', 'WordPress', 'PHP'],
            content: (
              <p className='~text-base/lg'>
                Akola Group is an investment company specializing in agriculture
                and food production in the Baltics, with over 60 subsidiaries.
              </p>
            ),
          }}
        />
      </div>
    </section>
  );
}
