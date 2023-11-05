import ResumeListItem from '@components/organisms/ResumeListItem'
import { DetailType } from 'src/types'

type SkillListItemProp = {
  name: string
  details: DetailType
}

const SkillListItem: React.FC<SkillListItemProp> = ({ name, details }) => (
  <ResumeListItem title={name} details={details}></ResumeListItem>
)

export default SkillListItem
