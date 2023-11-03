import { SkillListType } from 'src/types'
import Heading from '@components/molecules/Heading'
import SkillListItem from '@components/organisms/skill/SkillListItem'

type SkillListProps = {
  items: SkillListType[]
}

const SkillLayout = (props: SkillListProps) => (
  <>
    <Heading title="Skills" description="share my experience yeah!" />
    {props.items.map((item, index) => (
      <SkillListItem key={index} {...item} />
    ))}
  </>
)

export default SkillLayout
