import { WorkExperience } from '@/types/workExperience';
import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef } from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import logoFreelance from '@public/logo-freelance.svg';
import logoCivitta from '@public/logo-civitta.jpeg';
import logoBright from '@public/logo-bright.png';
import { Education } from '@/types/education';
import EducationCard from './EducationCard';

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
        <p>
          I work with clients to build web solutions that are user-friendly and
          deliver strong results. I prioritize performance optimization,
          ensuring websites load quickly and provide a smooth user experience.
          This focus on usability and performance has consistently led to
          satisfied clients and websites that achieve their business goals.
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
        <p>
          At Civitta, I worked with a skilled web development team, working
          together to build websites for a variety of clients.I advocated for
          best practices in web development, resulting in improvements in
          website speed, code clarity, and maintainability. In addition, I
          created custom solutions like APIs, plugins, and themes to tackle
          specific client challenges.
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
        <p>
          At Bright, I made initialising new projects easier by creating a
          custom CLI-based WordPress setup generator tool. This tool saved the
          team significant time. I also assisted with developing custom themes
          for several clients, gaining valuable experience in user experience
          design and client collaboration.
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
        <p>
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
        <p>
          Solidified core front-end development fundamentals through Meta's
          Front-End Developer Specialization: HTML, CSS, JavaScript, unit
          testing, and responsive design.
        </p>
      ),
    },
  ];

  return (
    <section
      {...rest}
      className={cn(
        'mx-auto w-full max-w-[90rem] ~my-8/16 ~px-5/24 ~py-6/12',
        className
      )}
    >
      <div className='grid grid-cols-6 gap-x-6 ~gap-y-14/12 xl:grid-cols-12 xl:~xl:~gap-x-6/12'>
        <div className='col-span-6 flex flex-col items-center ~xl:~gap-6/8 xl:col-span-7'>
          <div>
            <h2 className='mb-[0.225em] text-balance text-center font-semibold leading-tight text-primary-900 ~text-3xl/4xl'>
              Work Experience
            </h2>
            <p className='text-center'>Career Overview</p>
          </div>
          <div className='flex w-full flex-col ~xl:~gap-6/8'>
            {workExperience.map((item, index) => (
              <WorkExperienceCard
                className='w-full'
                key={index}
                workExperience={item}
              />
            ))}
          </div>
        </div>
        <div className='col-span-6 flex flex-col gap-x-6 ~gap-y-14/12 xl:col-span-5 xl:~xl:~gap-x-6/12'>
          <div className='flex flex-col items-center ~xl:~gap-6/8'>
            <div>
              <h2 className='mb-[0.225em] text-balance text-center font-semibold leading-tight text-primary-900 ~text-3xl/4xl'>
                Education
              </h2>
              <p className='text-center'>Academic Background</p>
            </div>
            <div className='flex w-full flex-col ~xl:~gap-6/8'>
              {education.map((item, index) => (
                <EducationCard
                  className='w-full'
                  key={index}
                  education={item}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center ~xl:~gap-6/8'>
            <div>
              <h2 className='mb-[0.225em] text-balance text-center font-semibold leading-tight text-primary-900 ~text-3xl/4xl'>
                Certificates
              </h2>
              <p className='mb-0 text-center'>Acquired Certifications</p>
            </div>
            <div className='flex w-full flex-col ~xl:~gap-6/8'>
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
    </section>
  );
}
