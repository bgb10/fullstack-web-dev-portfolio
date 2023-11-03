import ResumeListItem from '@components/organisms/ResumeListItem'
import { ProjectType } from 'src/types'

const ProjectListItem: React.FC<ProjectType> = ({
  name,
  description,
  details,
  skills
}) => (
  <ResumeListItem title={name} label={description} details={details}>
    {/* Here tags to be added! */}
  </ResumeListItem>
)

export default ProjectListItem
