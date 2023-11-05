import { SkillListType } from 'src/types'
import Heading from '@components/molecules/Heading'
import SkillChartList from '@components/organisms/skill/SkillChartList'
import Item from '@components/molecules/Item'
import SkillListItem from '@components/organisms/skill/SkillListItem'

type SkillListProps = {
  items: SkillListType[]
}

const SkillLayout = (props: SkillListProps) => (
  <>
    <Heading title="Skills" description="How much Skillful in Tech" />
    <Item horizontal={true}>
      {props.items.map((item, index) => (
        <SkillChartList key={index} {...item} />
      ))}
    </Item>

    {props.items.map((item, index) => {
      return (
        <SkillListItem
          key={index}
          name={item.type}
          details={item.details}
        ></SkillListItem>
      )
    })}
  </>
)

export default SkillLayout
