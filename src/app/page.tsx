import Hero from '@/components/Hero';
import ExperienceEducation from '@/components/ExperienceEducation';
import WithNavBar from '@/components/WithNavBar';
import ProjectGrid from '@/components/ProjectGrid';

export default function Home() {
  return (
    <main className='flex-grow pt-24'>
      <WithNavBar />
      <Hero />
      <ExperienceEducation />
      <ProjectGrid />
    </main>
  );
}
