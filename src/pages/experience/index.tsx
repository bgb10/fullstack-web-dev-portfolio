import React from 'react'
import ExperienceLayout from '@components/templates/ExperienceLayout'
import { experienceList } from 'src/data'

export default function Experience() {
  return (
    <>
      <ExperienceLayout items={experienceList}></ExperienceLayout>
    </>
  )
}
