import { ExperienceType, EducationType, ProjectType } from 'src/types'

export const experienceList: ExperienceType[] = [
  {
    company: 'Republic of Korea Air Force(ROKAF)',
    job: 'Software Engineer',
    duration: {
      startedAt: new Date(2000, 1),
      endedAt: new Date(2000, 10),
      isCompleted: true
    },
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    company: 'Republic of Korea Air Force(ROKAF)',
    job: 'Software Engineer',
    duration: {
      startedAt: new Date(2000, 1),
      endedAt: new Date(2000, 10),
      isCompleted: true
    },
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }
]

export const educationList: EducationType[] = [
  {
    institution: '중앙',
    country: '서울',
    isDegreeProgram: true,
    degree: {
      name: '학사',
      major: '소프트',
      gpa: '4.5'
    },
    duration: {
      startedAt: new Date(2000, 1),
      endedAt: new Date(2000, 10),
      isCompleted: true
    },
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    institution: '중앙',
    country: '서울',
    isDegreeProgram: true,
    degree: {
      name: '학사',
      major: '소프트',
      gpa: '4.5'
    },
    duration: {
      startedAt: new Date(2000, 1),
      endedAt: new Date(2000, 10),
      isCompleted: true
    },
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }
]

export const projectList: ProjectType[] = [
  {
    name: 'project',
    description: 'this is the project description. enjoy~!',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    skills: [
      {
        name: 'gwan'
      }
    ]
  }
]
