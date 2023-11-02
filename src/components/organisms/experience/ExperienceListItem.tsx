import ResumeListItem from '@components/organisms/ResumeListItem'
import { ExperienceType } from '@components/types'

const ExperienceListItem: React.FC<ExperienceType> = ({
  company,
  job,
  duration,
  details
}) => (
  <ResumeListItem
    title={company}
    label={job}
    duration={duration}
    details={details}
    horizontal
  />
)

export default ExperienceListItem
