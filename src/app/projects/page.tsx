import { Projects } from '@/components/Projects';
import { projects } from '@/utils/data/project';
import React from 'react'

const ProjectPage = () => {
  return (
    <main>
      {" "}
      <Projects projects={projects} />
    </main>
  );
}

export default ProjectPage