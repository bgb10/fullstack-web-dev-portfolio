import { ElementNode } from '@graphcms/rich-text-types'

export interface DurationType {
  startedAt: Date
  endedAt?: Date
  isCompleted: boolean
}

export interface DetailType {
  raw: {
    children: ElementNode[]
  }
}
export interface ExperienceType {
  company: string
  job: string
  duration: DurationType
  details: DetailType
}

interface DegreeType {
  name: string
  major: string
  gpa: string
}

export interface EducationType {
  institution: string
  country: string
  isDegreeProgram: boolean
  degree?: DegreeType
  duration: DurationType
  details: string
}

export interface ProjectType {
  name: string
  description: string
  details: string
  skills: SkillType[]
}

export interface SkillType {
  name: string
}

export interface CourseWorkType {
  name: string
  duration: DurationType
  details: string
  skills: SkillType[]
}
