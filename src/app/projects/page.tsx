import { Projects } from '@/components/Projects';
import { projects } from '@/utils/data/project';
import React from 'react'

const ProjectPage = () => {
  return (
    <main className='pt-10'>
      {" "}
      <Projects projects={projects} />
    </main>
  );
}

export default ProjectPage