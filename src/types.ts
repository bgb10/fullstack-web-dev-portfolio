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
  details: DetailType
}

export interface ProjectType {
  name: string
  description: string
  details: DetailType
  skills: SkillType
}

export interface SkillListType {
  type: string
  skills: SkillType[]
  details: DetailType
}

export interface SkillType {
  name: string
  proficiency: number
}

export interface CourseWorkType {
  name: string
  duration: DurationType
  details: string
  skills: SkillType
}
