import ResumeListItem from '@components/organisms/ResumeListItem'
import { EducationType } from 'src/types'

const createEducationTitle = (institution: string, country: string) =>
  institution + ', ' + country

const EducationListItem: React.FC<EducationType> = ({
  institution,
  country,
  isDegreeProgram,
  degree,
  duration,
  details
}) => {
  // Create degree text.
  const _degree = () =>
    `Degree: ${duration.isCompleted ? '' : 'Pursuing'} ${
      degree?.name
    }'s degree in ${degree?.major}`

  return (
    <ResumeListItem
      title={createEducationTitle(institution, country)}
      description={isDegreeProgram ? _degree() + ' | ' + degree?.gpa : ''}
      duration={duration}
      details={details}
    />
  )
}

export default EducationListItem
