import { WorkExperience } from '@/types/workExperience';
import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef, memo } from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import logoMapon from '@public/logo-mapon.jpg';
import logoFreelance from '@public/logo-freelance.svg';
import logoCivitta from '@public/logo-civitta.jpeg';
import logoBright from '@public/logo-bright.png';
import { Education } from '@/types/education';
import EducationCard from './EducationCard';
import SlideUp from './ui/Animations/SlideUp';
import SplitText from './ui/SplitText';

const WORK_EXPERIENCE_ENTRIES: WorkExperience[] = [
  {
    title: 'Mapon',
    logoUrl: logoMapon.src,
    role: 'Frontend developer',
    dateFrom: 'Aug 2024',
    dateTo: 'Present',
    url: 'https://mapon.com/',
    tags: ['React.js', 'TypeScript', 'CSS Modules', 'Jest', 'Redux Toolkit'],
    content: (
      <p>
        At Mapon, I develop and maintain the user interface for our fleet
        management platform. My work includes implementing new features,
        refactoring and maintaining legacy code, and optimizing performance. I
        also conduct code reviews, fix bugs, and collaborate with the team to
        address specific client needs and improve overall system functionality.
      </p>
    ),
  },
  {
    title: 'Freelance',
    logoUrl: logoFreelance.src,
    role: 'Full Stack developer',
    dateFrom: 'Aug 2023',
    dateTo: 'Aug 2024',
    tags: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'WordPress',
      'PHP',
    ],
    content: (
      <p>
        I specialize in developing and launching high-quality websites, focusing
        on enhancing user interaction and UI design. I work closely with clients
        to deliver tailored website solutions, ensuring projects are delivered
        on time and meet specifications. Additionally, I implement effective SEO
        strategies and provide ongoing maintenance and support for smooth
        website operations.
      </p>
    ),
  },
  {
    title: 'Civitta',
    url: 'https://civitta.com/',
    logoUrl: logoCivitta.src,
    role: 'Mid WordPress developer',
    dateFrom: 'May 2022',
    dateTo: 'Aug 2023',
    tags: [
      'WordPress',
      'PHP',
      'Docker',
      'React.js',
      'HTML & CSS',
      'jQuery',
      'JavaScript',
    ],
    content: (
      <p>
        At Civitta, I worked with a skilled web development team, working
        together to build websites for a variety of clients. I advocated for
        best practices in web development, resulting in improvements in website
        speed, code clarity, and maintainability. In addition, I created custom
        solutions like APIs, plugins, and themes to tackle specific client
        challenges.
      </p>
    ),
  },
  {
    title: 'Bright',
    url: 'https://bright.lv/en',
    logoUrl: logoBright.src,
    role: 'Junior WordPress developer',
    dateFrom: '2020',
    dateTo: '2022',
    tags: ['WordPress', 'PHP', 'HTML & CSS', 'Vue.js', 'jQuery', 'JavaScript'],
    content: (
      <p>
        At Bright, I made initialising new projects easier by creating a custom
        CLI-based WordPress setup generator tool. This tool saved the team
        significant time. I also assisted with developing custom themes for
        several clients, gaining valuable experience in user experience design
        and client collaboration.
      </p>
    ),
  },
];

const EDUCATION_ENTRIES: Education[] = [
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

const CERTIFICATE_ENTRIES: Education[] = [
  {
    title: 'Meta Front-End developer',
    source: 'Meta on Coursera',
    dateFrom: '2024',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/4VFQC637NRTS',
    content: (
      <p>
        Solidified core front-end development fundamentals through Meta's
        Front-End Developer Specialization: HTML, CSS, JavaScript, unit testing,
        and responsive design.
      </p>
    ),
  },
];

type ExperienceEducationProps = {} & ComponentPropsWithoutRef<'section'>;
function ExperienceEducation({ className, ...rest }: ExperienceEducationProps) {
  return (
    <section
      id='experience'
      {...rest}
      className={cn(
        'mx-auto w-full max-w-[90rem] ~my-8/16 ~px-5/24 ~py-6/12',
        className
      )}
    >
      <div className='grid grid-cols-6 gap-x-6 ~gap-y-14/12 xl:grid-cols-12 xl:~xl:~gap-x-6/12'>
        <div className='col-span-6 flex flex-col items-center ~xl:~gap-6/8 xl:col-span-7'>
          <SlideUp ubtebs='asdasd'>
            <SplitText split='chars'>
              <h2 className='mb-[0.225em] text-balance text-center font-semibold leading-tight text-primary-900 ~text-3xl/4xl'>
                Work Experience
              </h2>
              <p className='text-center'>Career Overview</p>
            </SplitText>
          </SlideUp>
          <div className='flex w-full flex-col ~xl:~gap-6/8'>
            {WORK_EXPERIENCE_ENTRIES.map((item, index) => (
              <SlideUp key={index} intensity='weak' className='w-full'>
                <WorkExperienceCard
                  className='w-full'
                  workExperience={item}
                  size='small'
                />
              </SlideUp>
            ))}
          </div>
        </div>
        <div className='col-span-6 flex flex-col gap-x-6 ~gap-y-14/12 xl:col-span-5 xl:~xl:~gap-x-6/12'>
          <div className='flex flex-col items-center ~xl:~gap-6/8'>
            <SlideUp selector='span'>
              <SplitText split='chars'>
                <h2 className='mb-[0.225em] text-balance text-center font-semibold leading-tight text-primary-900 ~text-3xl/4xl'>
                  Education
                </h2>
                <p className='text-center'>Academic Background</p>
              </SplitText>
            </SlideUp>
            <div className='flex w-full flex-col ~xl:~gap-6/8'>
              {EDUCATION_ENTRIES.map((item, index) => (
                <SlideUp key={index} intensity='weak' className='w-full'>
                  <EducationCard
                    className='w-full'
                    key={index}
                    education={item}
                  />
                </SlideUp>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center ~xl:~gap-6/8'>
            <SlideUp selector='span'>
              <SplitText split='chars'>
                <h2 className='mb-[0.225em] text-balance text-center font-semibold leading-tight text-primary-900 ~text-3xl/4xl'>
                  Certificates
                </h2>
                <p className='mb-0 text-center'>Acquired Certifications</p>
              </SplitText>
            </SlideUp>
            <div className='flex w-full flex-col ~xl:~gap-6/8'>
              {CERTIFICATE_ENTRIES.map((item, index) => (
                <SlideUp key={index} intensity='weak' className='w-full'>
                  <EducationCard
                    className='w-full'
                    key={index}
                    education={item}
                  />
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ExperienceEducation);
