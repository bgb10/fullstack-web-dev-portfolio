import React from 'react'
import ProjectLayout from '@components/templates/ProjectLayout'
import { projectList } from 'src/data'

export default function Project() {
  return (
    <>
      <ProjectLayout items={projectList}></ProjectLayout>
    </>
  )
}
