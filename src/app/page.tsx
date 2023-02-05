'use client';

import Courses from './components/Courses';
import HeroSection from './components/HeroSection';
import Syllabus from './components/Syllabus';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Courses />
      <Syllabus />
    </>
  );
}
