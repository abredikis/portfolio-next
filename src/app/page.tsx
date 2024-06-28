import Hero from '@/components/Hero';
import ExperienceEducation from '@/components/ExperienceEducation';
import WithNavBar from '@/components/WithNavBar';
import ProjectGrid from '@/components/ProjectGrid';
import WithFooter from '@/components/WithFooter';
import WithBackgroundAccent from '@/components/WithBackgroundAccent';

export default function Home() {
  return (
    <>
      <WithBackgroundAccent />
      <main className='z-10 flex-grow pt-24 leading-relaxed text-primary-900/80'>
        <WithNavBar />
        <Hero />
        <ExperienceEducation />
        <ProjectGrid />
        <WithFooter />
      </main>
    </>
  );
}
