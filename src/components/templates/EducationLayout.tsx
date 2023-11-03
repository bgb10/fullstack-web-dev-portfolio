import { EducationType } from 'src/types'
import Heading from '@components/molecules/Heading'
import EducationListItem from '@components/organisms/education/EducationListItem'
import TimeLine from '@components/molecules/TimeLine'
import { TimeLineElements } from '@components/molecules/TimeLine'

type EducationProps = {
  items: EducationType[]
}

const EducationLayout = (props: EducationProps) => {
  const experiences: TimeLineElements[] = props.items.map((item) => {
    return {
      name: item.institution,
      startedAt: item.duration.startedAt,
      endedAt: item.duration.endedAt
    }
  })

  return (
    <>
      <Heading title="Education" description="What I've Explored" />
      <TimeLine
        name="Experience"
        elements={experiences}
        maxDate={new Date('2025')}
      ></TimeLine>
      {props.items.map((item, index) => (
        <EducationListItem key={index} {...item} />
      ))}
    </>
  )
}

export default EducationLayout
