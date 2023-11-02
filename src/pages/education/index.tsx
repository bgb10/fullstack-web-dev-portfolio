import React from 'react'
import EducationLayout from '@components/templates/EducationLayout'
import { educationList } from 'src/data'

export default function Experience() {
  return (
    <>
      <EducationLayout items={educationList}></EducationLayout>
    </>
  )
}
